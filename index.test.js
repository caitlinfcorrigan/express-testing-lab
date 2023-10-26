const request = require('supertest');
const {app, server} = require('./index');

// supertest here:
describe('Test the users endpoints', () => {
    // GET /gifs
    test('It should list out all gifs', async () => {
        const response = await request(app).get('/gifs');
        expect(response.body).toBeDefined();
        expect(response.statusCode).toBe(200);
    });
    // GET /gifs/:id
    test('It should get a gif with a specific ID', async () => {
        const response = await request(app).get('/gifs/65398a4e4155c7f715ea8a64');
        expect(response.body._id).toBe("65398a4e4155c7f715ea8a64");
        expect(response.statusCode).toBe(200);
    });
    // POST /gifs
    test('It should add a new gif and return that gif', async () => {
        const response = await request(app)
            .post('/gifs')
            .send({	name: "Cat Hacker", url: "https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif",tags: ["reaction", "cat", "meme", "hacker", "hacking"],})
    //     expect(response.statusCode).toBe(200);

    // });
    // PUT gifs/:id
    test('It should update a gif and return that gif', async () => {
        const response = await request(app)
            .put('/gifs/65398a4e4155c7f715ea8a64')
            .send({ tags: ["mean girls", "wednesdays", "karen", "pink", "tina fey"]})
        expect(response.statusCode).toBe(200);
    });
    // DELETE gifs/:id
    test('It should delete a gif', async () => {
        const response = await request(app).delete('/gifs/6539979a9b5e9b537d9ed879');
        // expect(response.body._id).toEqual({ id: '65399ed88d003a9f0b592c56' });
        expect(response.statusCode).toBe(200);

    });
})

afterAll(done => {
    // server.close()
    done()
})