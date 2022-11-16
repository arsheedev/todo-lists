const { default: mongoose } = require('mongoose')
const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        let tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const createTask = async (req, res) => {
    try {
        let task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
const getTasks = async (req, res) => {
    try {
        let {id: taskID} = req.params
        let task = await Task.findOne({_id: taskID})

        if (!task) {
            return res.status(404).json({msg: `No task with this id: ${taskID}`})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
const updateTasks = async (req, res) => {
    try {
        let {id: taskID} = req.params
        let task = await Task.findOneAndUpdate({_id: taskID}, req.body, {new: true, runValidators: true})

        if (!task) {
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
const deleteTasks = async (req, res) => {
    try {
        let {id: taskID} = req.params
        let task = await Task.findOneAndDelete({_id: taskID})

        if (!task) {
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTasks,
    updateTasks,
    deleteTasks
}