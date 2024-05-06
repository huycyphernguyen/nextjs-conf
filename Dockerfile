FROM node:20.11.1

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

CMD [ "npm", "run", "start" ]