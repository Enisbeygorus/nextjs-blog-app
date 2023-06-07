FROM node:16

# Create app directory
WORKDIR /home/node/blog-app

COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

CMD npm run start
EXPOSE 3000