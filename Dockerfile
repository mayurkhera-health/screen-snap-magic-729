# syntax=docker/dockerfile:1

# ---- build ----------------------------------------------------------------
# npm, NOT bun (both install and build). bun.lock pins culori to Lovable's
# private registry (europe-west4-npm.pkg.dev/lovable-core-prod/...), which 403s
# outside their sandbox, so bun install --frozen-lockfile cannot work in an
# external build. npm resolves everything from registry.npmjs.org.
FROM node:22-slim AS build
WORKDIR /app

# `npm install`, not `npm ci`: this dependency tree resolves two ajv majors,
# which npm ci rejects as "lock file out of sync" even on a lockfile npm has
# just generated itself. Verified from a clean checkout.
COPY package.json package-lock.json ./
RUN npm install --no-audit --no-fund

COPY . .

# Which copy of the site this image is. Passed by fly.staging.toml /
# fly.production.toml. Unset means "local", which fails safe: noindex plus a
# visible badge. See src/lib/site-env.ts.
ARG VITE_SITE_ENV
ENV VITE_SITE_ENV=$VITE_SITE_ENV

# Anything that is not production also gets a robots.txt that disallows
# everything, belt-and-braces alongside the noindex meta tag. A staging site
# that turns up in Google competing with the real one is a genuine problem and
# it is cheap to prevent twice.
RUN if [ "$VITE_SITE_ENV" != "production" ]; then \
      printf 'User-agent: *\nDisallow: /\n' > public/robots.txt; \
    fi

# The Vite config defaults Nitro to the Cloudflare Workers target. Fly runs a
# plain container, so build the Node server preset instead — that is what
# produces .output/server/index.mjs.
ENV NITRO_PRESET=node-server
RUN npm run build

# ---- run ------------------------------------------------------------------
FROM node:22-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# The Nitro node-server bundle is self-contained: no node_modules needed.
COPY --from=build /app/.output ./.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
