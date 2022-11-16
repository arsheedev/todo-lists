const mongoose = require('mongoose')

const TaskModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be empty!'],
        trim: true,
        maxlenght: [20, 'Name cannot be more than 20']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskModel)