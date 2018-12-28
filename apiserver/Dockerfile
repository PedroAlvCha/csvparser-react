FROM node:11.6.0-alpine
WORKDIR app/
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "startapi"]
EXPOSE 5000
