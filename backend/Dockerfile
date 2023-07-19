FROM node:18.12.1

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ENV PORT=4000 \
    MONGO_URI=mongodb+srv://ch4mi2:mymongo@cluster0.7w5xkyr.mongodb.net/?retryWrites=true&w=majority
    

EXPOSE 4000

CMD ["npm", "run" , "dev" ]
