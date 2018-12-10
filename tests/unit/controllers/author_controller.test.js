const AuthorController = require("./../../../controllers/author_controller"); 
const AuthorModel = require("./../../../database/models/author_model"); 

//TDD style
describe("Author Controller", () => {
    describe("index()", () => {
        test("call res.render()", async () => { 
            const res = {
                render: jest.fn()
            } 

            const authors = []; 

            AuthorModel.find = jest.fn().mockResolvedValue( [] );

            await AuthorController.index(null, res ); 
            expect(AuthorModel.find).toBeCalledTimes(1);
            expect(res.render).toHaveBeenLastCalledWith("author/index", { authors });
        });
    });
});

//BDD Style
describe("Author Controller", () => {
    describe("index()", () => {
        test("call res.render()", async () => { 
            const res = {
                render: jest.fn()
            } 

            const authors = []; 

            AuthorModel.find = jest.fn().mockResolvedValue( [] );

            await AuthorController.index(null, res ); 
            expect(AuthorModel.find).toBeCalledTimes(1);
            expect(res.render).toHaveBeenLastCalledWith("author/index", { authors });
        });
    });
});