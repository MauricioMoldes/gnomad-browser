FROM --platform=linux/amd64 node:18.17-alpine
RUN npm install -g pnpm@^8.14.3

RUN mkdir /app && chown node:node /app

USER node
WORKDIR /app

ENV NODE_ENV=production

# Install dependencies
COPY --chown=node:node package.json /app/package.json
COPY --chown=node:node dataset-metadata/package.json /app/dataset-metadata/package.json
COPY --chown=node:node graphql-api/package.json /app/graphql-api/package.json
COPY --chown=node:node pnpm-lock.yaml .
COPY --chown=node:node pnpm-workspace-api-docker.yaml ./pnpm-workspace.yaml
RUN pnpm install --production --frozen-lockfile

# Copy source
COPY --chown=node:node dataset-metadata /app/dataset-metadata
COPY --chown=node:node graphql-api/src /app/graphql-api/src
COPY --chown=node:node tsconfig.json /app/graphql-api/tsconfig.json
COPY --chown=node:node tsconfig.build-instrumentation.json /app/graphql-api/tsconfig.build-instrumentation.json
COPY --chown=node:node tsconfig.build.json /app/graphql-api/tsconfig.build.json

# Build JS from TS source
RUN pnpm tsc -p /app/graphql-api/tsconfig.build-instrumentation.json
RUN pnpm tsc -p /app/graphql-api/tsconfig.build.json

# Copy static data into place
COPY --chown=node:node graphql-api/static_data /app/static_data

CMD ["node", "-r", "./graphql-api/src/instrumentation.js", "graphql-api/src/app.js"]
