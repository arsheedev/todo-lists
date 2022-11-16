if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const PORT = process.env.PORT || 8080
const connectDB = require('./db/connection')

// Setup Database and Server
const start = async () => {
    try {
        await connectDB(process.env.DATABASE_URL)
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    } catch (error) {
        console.error(error)
    }
}

// Midleware
app.use(express.static('./public'))
app.use(express.json())

// Routes
app.use('/api/v1/tasks', tasks)

start()