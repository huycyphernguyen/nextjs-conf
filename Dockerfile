FROM node:20.11.1

WORKDIR /app
COPY . .
RUN npm i bun -g
RUN bun i
EXPOSE 3000
RUN npm run build
RUN npm run start