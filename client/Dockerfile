FROM hub.c.163.com/lightingfire/nodejs:6.9.1-alpine
WORKDIR /client
COPY package.json /client
RUN npm i --registry https://registry.npm.taobao.org && npm cache clean
RUN npm i --registry https://registry.npm.taobao.org -g react-scripts
RUN npm config set unsafe-perm true
COPY . /client
EXPOSE 3000
CMD  react-scripts start