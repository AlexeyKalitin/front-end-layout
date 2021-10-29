const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const todoModelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
    }
})

const listSchema = mongoose.Schema({
    tasks: [todoModelSchema],
});

let List = new mongoose.model('List', listSchema);
module.exports = List;