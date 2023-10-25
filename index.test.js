const request = require('supertest');
const {app, server} = require(./index);

// supertest here:
describe('Test the users endpoints', () => {
    // GET /gifs
    test('It should list out all gifs', async () => {
        const response = await request(app).get('/gifs');
        expect(response.text).toBe('[Lots of data]');
        expect(response.statusCode).toBe(200);
    });
    // GET /gifs/:id
    test('It should get a gif with a specific ID', async () => {
        const response = await request(app).get('/gifs/65398a4e4155c7f715ea8a64');
        expect(response.body).toBe({"_id":"65398a4e4155c7f715ea8a64","name":"Mean Girls Gif","url":"https://media.giphy.com/media/iDcDa0KQD8Gpq/giphy.gif","tags":["mean girls","wednesdays","karen","pink"],"__v":0});
        expect(response.statusCode).tobe(200);
    });
    // POST /gifs
    test('It should add a new gif and return that gif', async () => {
        const response = await request(app)
            .post('/gifs')
            .send({	name: "Cat Hacker", url: "https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif",tags: ["reaction", "cat", "meme", "hacker", "hacking"],})
        expect(response.statusCode).toBe(200);

    });
    // PUT gifs/:id
    test('It should update a gif and return that gif', async () => {
        const response = await request(app)
            .put('/gifs/123')
            .send({ tags: ["reaction", "cat", "meme", "hacker", "hacking", "kitty cat"]})
        expect(response.statusCode).toBe(200);
    });
    // DELETE gifs/:id
    test('It should delete a gif', async () => {
        const response = await request(app).delete('/gifs/123');
        expect(response.body).toEqual({ id: '123' });
        expect(response.statusCode).toBe(200);

    });
})

afterAll(done => {
    server.close()
    done()
})