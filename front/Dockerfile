FROM node:6
RUN mkdir -p /app
COPY . /app
WORKDIR /app
EXPOSE 4200
RUN npm install
CMD ["npm", "start"]
