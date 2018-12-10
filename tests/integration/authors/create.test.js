const supertest = require("supertest"); 
const app = require("./../../../app"); 
const mongoose = require("mongoose"); 
const AuthorModel = require("./../../../database/models/author_model");

beforeAll( () => {
mongoose.connect("mongodb://localhost/books_r_us", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connection.on("error", err => console.log(err));
});


afterAll(async () => { 
    await AuthorModel.deleteMany( {} );
    mongoose.connection.close();
}); 

describe("The user creates a new author", () => {
    test("POST / authors with a valid req body check redirect and ", async () => { 
        const authorCount = await AuthorModel.count();
        const response = await supertest(app)
            .post("/authors") 
            .send({
                name: "Mike", 
                bio: "All over the world", 
                gender: "Male"
            })
            .expect(302); 
        const newAuthorCount = await AuthorModel.count();

        expect(response.body).toEqual( {} ); 
        expect(response.headers.location).toMatch(/^\/authors\/.authors.*$/); 
        expect(newAuthorCount).toBe(authorCount + 1);

    }); 


    test("POST / authors with a valid req body and match data created ", async () => {
        const response = await supertest(app)
            .post("/authors") 
            .send({
                name: "bob", 
                bio: "All over the world, with Bob, of course", 
                gender: "Male"
            })
            .expect(302); 
        const author = await AuthorModel.findOne( {name: "Bob" });
        expect(author).toBeTruthy(); 
        expect(author.name).toBe("Bob");

    });
});