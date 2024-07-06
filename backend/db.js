const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://saichandusambangi:h3VEciOpvN2VJ9a4@cluster0.pf9i2p0.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}