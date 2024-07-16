const express = require('express')
const path = require('path')
// 上传
const multer = require('multer')
const app = express();
const { db, genid } = require('./db/DbUtils')
// 跨域请求
app.use(function (req, res, next) {
    // 允许跨域的域名
    res.header("Access-Control-Allow-Origin", "*");
    // 允许的header类型
    res.header("Access-Control-Allow-Headers", "*");
    // 跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method == "OPTIONS") { res.sendStatus(200); } // 让option请求尝试快速结束
    else { next(); }
});
app.use(express.json())
// 指定上传
const update = multer({
    // 指定上传路径
    dest: "./public/upload/temp"
})
// 允许所有接口拥有上传功能
app.use(update.any())
// 指定静态资源路径
app.use(express.static(path.join(__dirname, "public")))

// category/_token/add 
const ADMIN_TOKEN_PATH = "/_token"
app.all("*", async (req, res, next) => {
    if (req.path.indexOf(ADMIN_TOKEN_PATH) > -1) {
        // token 校验
        let token = req.headers.token;
        console.log(token);
        let admin_token_sql = "SELECT *FROM `admin` WHERE `token` = ?"
        let admin_result = await db.async.all(admin_token_sql, [token])
        if (admin_result.err != null || admin_result.rows.length == 0) {
            res.send({
                code: 403,
                msg: "请先登录"
            })
            return
        } else {
            next()
        }
    } else {
        next()
    }
})

// 路由
app.use("/admin", require('./routers/adminRouter'))
app.use("/category", require('./routers/categoryRouter'))
app.use("/blog", require('./routers/blogRouter'))
app.use("/upload", require('./routers/uploadRouter'))


app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(8080, () => {
    console.log("Express 框架已经开启...")
})
