import express from 'express'
import cors from 'cors'
import {connectDB} from './config/db.js'

import componentRouter from './routes/componentRoute.js'

// INITIALIZATION
const app = express()
const port = 5000

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// ROUTES
app.use('/component', componentRouter)
app.use('/images',express.static('uploads'))
connectDB()

// ROUTES


app.use((err,req,res,next) => {
    res.status(500).json({err})
});

// LISTEN
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
