FROM node:6.9.2
EXPOSE 8082
COPY * ./
CMD node server.js

