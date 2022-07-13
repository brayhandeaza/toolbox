const app = require("../app")
const chai = require("chai")
const expect = chai.expect
const chaiHttp = require("chai-http")

chai.use(chaiHttp)

describe('Test API', () => {
    describe('GET REQUESTS:', () => {
        it("'/' welcome route", (done) => {
            chai.request(app).get("/files").end((err, res) => {
                expect(res.status).equal(200)
                done()
            })
        })
        it("'/files' fetch all files", (done) => {
            chai.request(app).get("/files").end((err, res) => {
                expect(res.status).equal(200)
                done()
            })
        })

        it("fetch files data", (done) => {
            chai.request(app).get("/files/data").end((err, res) => {
                expect(res.status).equal(200)
                done()
            })
        })

        it("fetch file data with query param", (done) => {
            chai.request(app).get("/files/data?fileName=test2.csv").end((err, res) => {
                expect(res.status).equal(200)
                done()
            })
        })

        it("fetch file data from tbx-echo-server", (done) => {
            chai.request(app).get("/files/test2.csv").end((err, res) => {
                expect(res.status).equal(200)
                done()
            })
        })
    })
})
