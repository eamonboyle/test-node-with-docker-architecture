from node:20 AS build

RUN corepack enable

ARG VITE_BACKEND_URL=http://localhost:3001/api/v1

WORKDIR /build
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm install
COPY . .

RUN pnpm run build

FROM nginx AS final

WORKDIR /usr/share/nginx/html

COPY --from=build /build/dist .