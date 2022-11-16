const express = require('express')
const router = express.Router()

const {getAllTasks, getTasks, createTask, updateTasks, deleteTasks} = require('../controllers/tasks')

router.route('/')
    .get(getAllTasks)
    .post(createTask)

router.route('/:id')
    .get(getTasks)
    .patch(updateTasks)
    .delete(deleteTasks)

module.exports = router