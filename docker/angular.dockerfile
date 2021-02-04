FROM node as base

WORKDIR /workspace
COPY angular .
RUN npm clean-install
RUN npm run build --production
CMD [ "npm", "run", "start" ]
