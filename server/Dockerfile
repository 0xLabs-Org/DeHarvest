# ---------- Build Stage ----------
FROM node:alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ---------- Production Stage ----------
FROM node:alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev
COPY --from=builder /app/dist ./dist

ENV PORT=8080
EXPOSE 8080

CMD ["node", "dist/index.js"]
