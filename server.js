import express from 'express'
import mongoose from 'mongoose'

// App config
const app = express()
const port = process.env.PORT || 9000


// Middleware configuration


// DB Config


// API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello The Webdev"))


// Listener
app.listen(port, () => console.log(`Listening on port ${port}`))