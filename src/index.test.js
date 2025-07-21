const request = require('supertest')
const { app } = require('./app')

describe('/hello', () => {
    it('Should return success resp', async () => {
        const data = await request(app).get('/hello')
        expect(data.statusCode).toBe(200);
    })
})
