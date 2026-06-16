# Multi-stage build: saudegpt.com.br
# Stage 1: Build the Next.js app
FROM node:22-alpine AS builder
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json package-lock.json* ./
COPY infrastructure/ infrastructure/
COPY public/ public/
COPY src/ src/
COPY next.config.ts tsconfig.json postcss.config.mjs eslint.config.mjs ./

# Install dependencies
RUN npm ci --only=production 2>/dev/null; npm install --no-audit --no-fund

# Build
RUN npm run build

# Stage 2: Production with standalone output
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy standalone build
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
