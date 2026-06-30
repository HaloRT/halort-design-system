FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json turbo.json ./
COPY apps ./apps
COPY packages ./packages
COPY examples ./examples
RUN npm ci
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build:vercel

FROM nginx:1.27-alpine AS runner
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/apps/storybook/storybook-static /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
