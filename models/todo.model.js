
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const todoModelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default:() => Date.now(),
    },
    done: {
        type: Boolean,
        default:false,
        required: true
    },
    uuid:{
        type: String,
        default: uuidv4,
    }
},
{ versionKey: false }
)

const listTodos = new mongoose.model('list', todoModelSchema);
module.exports = listTodos;