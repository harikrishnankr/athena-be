FROM node:18

WORKDIR /app

RUN npm install -g @nestjs/cli

COPY package*.json ./
RUN npm install --only=production

COPY . .

RUN npm run build

COPY --from=build /app/dist ./dist

COPY package*.json ./

RUN npm install --only=production

EXPOSE 3000
CMD ["npm", "run", "start:prod"]
