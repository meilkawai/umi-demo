const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid') // node uuid
const { db, genid } = require('../db/DbUtils')

/*
* 1 列表接口
  2 添加接口
  3 修改接口
  4 删除接口
*/
// 添加接口
router.post("/_token/add", async (req, res) => {

    let { name } = req.body
    const insert_sql = "INSERT INTO `category` (`id`,`name`) VALUES (?,?)"
    let { err, rows } = await db.async.run(insert_sql, [genid.NextId(), name])
    if (err == null) {
        res.send({
            code: 200,
            msg: "添加成功"
        })
    } else {
        res.send({
            code: 500,
            msg: "添加失败"
        })
    }
})
// 修改接口
router.put("/_token/update", async (req, res) => {
    // token 校验
    let { id, name } = req.body
    const update_sql = "UPDATE `category` SET `name` = ? WHERE `id` = ?"
    let { err, rows } = await db.async.run(update_sql, [name, id])
    if (err == null) {
        res.send({
            code: 200,
            msg: "修改成功"
        })
    } else {
        res.send({
            code: 500,
            msg: "修改失败"
        })
    }
})
// 删除接口
router.delete("/_token/delete", async (req, res) => {

    let id = req.query.id
    const delete_sql = "DELETE FROM `category` WHERE `id` = ?"
    let { err, rows } = await db.async.run(delete_sql, [id])
    if (err == null) {
        res.send({
            code: 200,
            msg: "删除成功"
        })
    } else {
        res.send({
            code: 500,
            msg: "删除失败"
        })
    }
})
// 列表接口
router.get("/list", async (req, res) => {
    const list_sql = "select * from `category`"
    let { err, rows } = await db.async.all(list_sql, [])
    if (err == null) {
        res.send({
            code: 200,
            msg: "查询成功",
            rows
        })
    } else {
        res.send({
            code: 500,
            msg: "查询失败"
        })
    }
})

module.exports = router
