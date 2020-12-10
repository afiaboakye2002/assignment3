const express = require('express')
const app = express()
app.use(express.json())
const postRouter = require('./post')

app.use('/posts',postRouter)

