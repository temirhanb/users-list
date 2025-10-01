FROM node:lts as dependencies
WORKDIR /users-list
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

FROM node:lts as builder
WORKDIR /users-list
COPY . .
COPY --from=dependencies /users-list/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /users-list
ENV NODE_ENV production

COPY --from=builder /users-list/public ./public
COPY --from=builder /users-list/package.json ./package.json
COPY --from=builder /users-list/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]