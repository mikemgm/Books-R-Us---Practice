const AuthorModel = require("./../database/models/author_model");

async function update(req, res) {
    let { id } = req.params;
    let { name, gender } = req.body;

    await AuthorModel.findByIdAndUpdate(id, {name, gender});

    res.redirect(`/authors/${id}`);
} 

function newResource(req, res) {
    res.render("author/new");
}

async function show(req, res) {
    let { id } = req.params;
    let author = await AuthorModel.findById(id);
    
    res.render("author/show", { author });
} 

async function edit(req, res) {
    let { id } = req.params;
    let author = await AuthorModel.findById(id);

    res.render("author/edit", { author });
} 

async function remove(req, res) {
    let { id } = req.params;
    await AuthorModel.findByIdAndRemove(id);

    res.redirect("/authors");
}

async function index(req, res) {
    let authors = await AuthorModel.find();

    res.render("author/index", { authors });
}

async function create(req, res) {
    let { name, gender } = req.body;
    let author = await AuthorModel.create({ name, gender });

    res.redirect(`/authors/${author._id}`);
}

module.exports = {
    edit,
    newResource,
    show,
    update,
    remove,
    index,
    create
}