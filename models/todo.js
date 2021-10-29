const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const TodoModelSchema = new Schema({
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
module.exports = new mongoose.model('TodoModel', TodoModelSchema);