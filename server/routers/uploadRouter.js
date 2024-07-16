const express = require('express')
const router = express.Router()
const fs = require('fs')
const { v4: uuidv4 } = require('uuid') // node uuid
const { db, genid } = require('../db/DbUtils')


router.post('/rich_editor_upload', async (req, res) => {
    if (!req.files) {
        res.send({
            "errno": 1,
            "message": "上传失败"
        })
        return
    }
    let files = req.files;
    let ret_files = []; // 存储返还的文件
    for (let file of files) {
        // 获取文件名字后缀
        let file_ext = file.originalname.substring(file.originalname.lastIndexOf(".") + 1)
        // 随机文件名字
        let file_name = genid.NextId() + "." + file_ext
        // 修改名字加移动文件
        fs.renameSync(
            process.cwd() + "/public/upload/temp/" + file.filename,
            process.cwd() + "/public/upload/" + file_name
        )
        // console.log(file);
        // 保存文件名
        ret_files.push("/upload/" + file_name)
        // console.log(ret_files[0]);
        // 返回文件
        res.send({
            "errno": 0,
            "data": {
                "url": ret_files[0]
            }
        })
    }
})

module.exports = router
