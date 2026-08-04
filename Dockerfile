FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --no-frozen-lockfile

COPY . .
RUN pnpm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "out", "-l", "3000"]
