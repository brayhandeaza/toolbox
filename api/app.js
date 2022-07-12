const { default: axios } = require('axios')
const express = require('express')
const app = express()
const cors = require('cors')

axios.defaults.headers.common = { 'Authorization': `Bearer aSuperSecretKey` }

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        message: "Toolbox: Full Stack JS - Code Challenge"
    })
})

app.get("/files/data", async (req, res) => {
    if (req.query.fileName) {
        await axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/${req.query.fileName}`).then((file) => {
            const arrayOfData = file.data.split(/\r\n|\n/)
            const headers = arrayOfData[0].split(/\t|,/)
            const result = []

            for (let i = 1; i < arrayOfData.length; i++) {
                const data = arrayOfData[i].split(/\t|,/)

                if (data.length == headers.length) {
                    result.push({
                        "file": data[0],
                        "text": data[1],
                        "number": data[2],
                        "hex": data[3]
                    })
                }
            }
            res.json({
                file: req.query.fileName,
                lines: result,
            }).status(200)
        }).catch((err) => {
            res.json({
                error: true,
                message: err.message.toString()
            })
        })
    } else {
        await axios.get("https://echo-serv.tbxnet.com/v1/secret/files").then((files) => {
            res.json({
                files: files.data.files
            })
        }).catch((err) => {
            res.json({
                error: true,
                message: err.message.toString()
            })
        })
    }
})

app.get("/q", (req, res) => {
    res.json({ file: req.query.file })
})

app.get("/:file", async (req, res) => {
    await axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/${req.params.file}`).then((file) => {
        const arrayOfData = file.data.split(/\r\n|\n/)
        const headers = arrayOfData[0].split(/\t|,/)
        const result = []

        for (let i = 1; i < arrayOfData.length; i++) {
            const data = arrayOfData[i].split(/\t|,/)

            if (data.length == headers.length) {
                result.push({
                    "file": data[0],
                    "text": data[1],
                    "number": data[2],
                    "hex": data[3]
                })
            }
        }
        res.json({
            headers,
            data: result,
            error: false,
        }).status(200)
    }).catch((err) => {
        res.json({
            error: true,
            message: err.message.toString()
        })
    })
})



const PORT = 8000
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})