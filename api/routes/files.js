const router = require("express").Router()
const { csvToJson } = require("../helper")
const { default: axios } = require('axios')
axios.defaults.headers.common = { 'Authorization': `Bearer aSuperSecretKey` }

// Get All Files Name
router.get("/", async (req, res) => {
    await axios.get("https://echo-serv.tbxnet.com/v1/secret/files").then((files) => {
        res.status(200).json({
            files: files.data.files
        })
    }).catch((err) => {
        res.json({
            error: true,
            message: err.message.toString()
        })
    })
})

// Get File Data by fileName or Get Data for All Files
router.get("/data", async (req, res) => {
    if (req.query.fileName) {
        await axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/${req.query.fileName}`).then((file) => {
            const result = csvToJson(file.data)
            res.status(200).json({
                file: req.query.fileName,
                lines: result,
            })
        }).catch((err) => {
            res.status(err.response.status).json({
                error: true,
                message: err.message.toString()
            })
        })
    } else {
        let status 
        await axios.get("https://echo-serv.tbxnet.com/v1/secret/files").then(async (files) => {
            const result = []
            status = files.status
            for (let i = 0; i < files.data.files.length; i++) {
                let filesArray
                await axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/${files.data.files[i]}`).then((fileData) => {
                    if (fileData.data !== "file,text,number,hex") {
                        filesArray = {
                            file: files.data.files[i],
                            lines: csvToJson(fileData.data)
                        }
                    }
                })
                result.push(filesArray && filesArray)
            }

            const filteredResult = result.filter(file => file)
            res.status(200).json(filteredResult)
        }).catch((err) => {
            res.status(status).json({
                error: true,
                message: err.message.toString()
            })
        })
    }
})

// Get File Data by FileName
router.get("/:file", async (req, res) => {
    await axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/${req.params.file}`).then((file) => {
        const result = csvToJson(file.data)
        res.status(200).json({
            file: req.params.file,
            lines: result,
        }).status(200)
    }).catch((err) => {
        res.json({
            error: true,
            message: err.message.toString()
        })
    })
})

module.exports = router