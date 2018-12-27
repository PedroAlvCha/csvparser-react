FROM node:9
WORKDIR app/
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "startapi"]
EXPOSE 5000
