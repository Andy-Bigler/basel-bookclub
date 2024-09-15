FROM node:20-alpine AS builder

LABEL Developers="Andy Bigler"

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app .

USER node:node

CMD ["node", "build/index.js"]
