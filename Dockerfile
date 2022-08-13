FROM node:latest

#set working directory
WORKDIR /app

#ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY ./tu-gerente-challenge ./

RUN npm install
RUN npm install react-scripts@5.0.1 -g

EXPOSE 3000

#start app

CMD [ "npm", "start" ]



