const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = require('../app')

chai.use(chaiHttp)

describe('Test API', () => {
  describe('GET REQUESTS:', () => {
    it("('/files/list') `fetch all files`", (done) => {
      chai.request(app).get('/files').end((err, res) => {
        if (!err) {
          expect(res.status).equal(200)
          expect(res.body.files).not.equal(undefined)
          done()
        }
      })
    })

    it("('/files/data') `fetch files data`", (done) => {
      chai.request(app).get('/files/data').end((err, res) => {
        if (!err) {
          expect(res.status).equal(200)
          expect(typeof res.body).equal('object')
          done()
        }
      })
    })

    it("('/files/data?fileName=value') `fetch file data with query param`", (done) => {
      chai.request(app).get('/files/data?fileName=test2.csv').end((err, res) => {
        if (!err) {
          expect(res.status).equal(200)
          expect(typeof res.body).equal('object')
          expect(res.body.file).not.equal(undefined)
          expect(res.body.lines).not.equal(undefined)
          done()
        }
      })
    })

    it('fetch file data from tbx-echo-server', (done) => {
      chai.request(app).get('/files/test2.csv').end((err, res) => {
        if (!err) {
          expect(res.status).equal(200)
          expect(typeof res.body).equal('object')
          expect(res.body.file).not.equal(undefined)
          expect(res.body.lines).not.equal(undefined)
          done()
        }
      })
    })
  })
})
