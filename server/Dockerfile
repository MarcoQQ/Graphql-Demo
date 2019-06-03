FROM hub.c.163.com/lightingfire/nodejs:6.9.1-alpine
WORKDIR /server
COPY package.json /server
RUN npm i --registry https://registry.npm.taobao.org && npm cache clean
COPY . /server
EXPOSE 4000
CMD node app