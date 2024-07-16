# umi-demo
## 文件作用
   ### child
     用作qiankun子应用跳转
   ### Qiankun_React_demo-main 
     主应用
   ### server
     nodejs + Express框架开启的后端服务器, 主要包括路由逻辑，数据库使用的SQlite3
## 已完成事项和未完成事项
  ### 已完成
    #### 主页，登录，修改文章名称，跳转至子应用
  ### 未完成
    #### 文章主题部分，增删改查等
    #### 已完成部分为主要框架，待进一步完善逻辑以及填充内容
## 主要使用技术
 axios：请求拦截与响应拦截，验证token等
 umi：主体部分
 dva：对登录以及查询部分进行状态管理
 less：主要应用了变量等功能，需要更进一步丰富内容的时候再应用
## 启动
```
npm install
```
```
npm start  &&  nodemon .\app.js
```
