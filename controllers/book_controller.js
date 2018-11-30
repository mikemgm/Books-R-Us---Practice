const BookModel = require("./../database/models/book_model");
const AuthorModel = require("./../database/models/author_model");

async function create(req, res) {
    //logic for creating a resource
    let {title, published, author} = req.body;
    let book = await BookModel.create({ title, published, author })
        .catch(err => res.status(500).send(err));

    res.redirect(`/books/${book._id}`);
}

async function index(req, res) {
    //showed a list of all the resources
    let books = await BookModel.find();
    res.render("book/index", {books});
}

async function make(req, res) {
    //shows the form to create the resource
    let authors = await AuthorModel.find().select('_id name');
    res.render("book/new", { authors });
}

async function destroy(req, res) {
    //deletes the resource
    let { id } = req.params;    
    await BookModel.findByIdAndRemove(id);
    res.redirect("/books");
}

async function show(req, res) {
    //show a single resource
    let { id } = req.params;

    let book = await BookModel.findById(id).populate('author');

    res.render("book/show", {book});
}

async function update(req, res) {
    //updates the resource
    let { title, published } = req.body;
    let { id } = req.params;

    await BookModel.findByIdAndUpdate(id, {title, published});
    res.redirect(`/books/${id}`);
}

async function edit(req, res) {
    //shows the form to edit the resource
    let { id } = req.params;
    let book = await BookModel.findById(id);
    res.render("book/edit", { book });
}

module.exports = {
    create,
    index,
    make,
    destroy,
    show,
    update,
    edit
}