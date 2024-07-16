# 使用官方的 Node.js 镜像作为基础
FROM node:16

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装项目的依赖
RUN npm install

# 复制应用程序代码到工作目录
COPY . .

# 暴露应用程序监听的端口（假设应用程序监听在 3000 端口）
EXPOSE 3000

# 启动应用程序
CMD [ "node", "app.js" ] 
# 假设您的入口文件是 app.js
