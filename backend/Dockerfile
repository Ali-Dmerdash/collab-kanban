FROM oven/bun:1.1-alpine AS base
WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

COPY . .

WORKDIR /app/backend
RUN bun run build

EXPOSE 4000
CMD ["bun", "run", "--filter", "backend", "start"]
