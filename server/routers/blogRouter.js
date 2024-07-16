const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid') // node uuid
const { db, genid } = require('../db/DbUtils')

// 添加博客
router.post('/_token/add', async (req, res) => {
    let { title, categoryId, content } = req.body;
    let id = genid.NextId();
    // 时间戳
    let create_time = new Date().getTime();

    const insert_sql = "INSERT INTO `blog` (`id`,`title`,`category_id`,`content`,`create_time`) VALUES (?,?,?,?,?) "
    let params = [id, title, categoryId, content, create_time]

    let { err, rows } = await db.async.run(insert_sql, params)
    if (err == null) {
        res.send({
            code: 200,
            msg: "博客添加成功"
        })
    } else {
        res.send({
            code: 500,
            msg: "博客添加失败"
        })
    }
})
// 修改博客
router.put('/_token/update', async (req, res) => {
    let { id, title, categoryId, content } = req.body;
    // 时间戳
    let create_time = new Date().getTime();

    const update_sql = "UPDATE `blog` SET `title` = ?,`content` = ?, `category_id` = ? WHERE `id` = ?"
    let params = [title, content, categoryId, id]

    let { err, rows } = await db.async.run(update_sql, params)
    if (err == null) {
        res.send({
            code: 200,
            msg: "博客修改成功"
        })
    } else {
        res.send({
            code: 500,
            msg: "博客修改失败"
        })
    }
})
// 删除博客 /blog/delete?id=xxx
router.delete("/_token/delete", async (req, res) => {

    let id = req.query.id
    const delete_sql = "DELETE FROM `blog` WHERE `id` = ?"
    let { err, rows } = await db.async.run(delete_sql, [id])
    if (err == null) {
        res.send({
            code: 200,
            msg: "博客删除成功"
        })
    } else {
        res.send({
            code: 500,
            msg: "博客删除失败"
        })
    }
})
// 查询博客
router.get('/search', async (req, res) => {
    /* 
     keyword 关键字
     categoryId 分类编号

     分页：page 页码
     pageSize 分页大小
    */
    let { keyword, categoryId, page, pageSize } = req.query
    page = page == null ? 1 : page;
    pageSize = pageSize == null ? 10 : pageSize;
    categoryId = categoryId == null ? 0 : categoryId;
    keyword = keyword == null ? "" : keyword;

    let params = []
    let wheresqls = []
    if (categoryId != 0) {
        wheresqls.push(" `category_id` = ? ")
        params.push(categoryId)
    }
    if (keyword != "") {
        wheresqls.push(" (`title` LIKE ? OR `content` LIKE ?) ")
        params.push("%" + keyword + "%")
        params.push("%" + keyword + "%")
    }
    let wheresqlstr = ""
    if (wheresqls.length > 0) {
        wheresqlstr = "WHERE" + wheresqls.join(" AND ")
        // console.log(wheresqlstr);
        // console.log(params);

    }

    // 查询分页数据
    // let searchSql = "SELECT * FROM `blog`" + wheresqlstr + " ORDER BY `create_time` DESC LIMIT ?, ?"
    let searchSql = "SELECT `id`,`category_id`,`create_time`,`title`,substr(`content`,0,50) AS `content` FROM `blog`" + wheresqlstr + " ORDER BY `create_time` DESC LIMIT ?, ?"
    // console.log(searchSql);
    // [].concat()返回一个新数组，[].join()返回一个字符串
    let searchSqlParams = params.concat([(page - 1) * pageSize, pageSize])
    // console.log(searchSqlParams);
    // 查询数据总数
    let searchCountSql = " SELECT count(*) AS count FROM `blog` " + wheresqlstr;
    let searchCountParams = params;

    let searchResults = await db.async.all(searchSql, searchSqlParams)
    let countResults = await db.async.all(searchCountSql, searchCountParams)

    // console.log(searchResults.err, countResults.err);
    if (searchResults.err == null && countResults.err == null) {
        res.send({
            code: 200,
            msg: "博客数据查询成功",
            data: {
                keyword,
                // 分类ID
                categoryId,
                page,
                pageSize,
                rows: searchResults.rows,
                count: countResults.rows[0].count
            }
        })
    } else {
        res.send({
            code: 500,
            msg: "博客数据查询失败"
        })
    }

})

// 查询单篇博客文章
router.get("/detail", async (req, res) => {
    let { id } = req.query
    let detail_sql = "SELECT *FROM `blog` WHERE `id` = ?"
    let { err, rows } = await db.async.all(detail_sql, [id])
    if (err == null) {
        res.send({
            code: 200,
            msg: "指定博客成功",
            rows
        })
    } else {
        res.send({
            code: 500,
            msg: "指定博客失败"
        })
    }
})
module.exports = router
