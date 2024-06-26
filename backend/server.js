import express from 'express'
import cors from 'cors'
import {connectDB} from './config/db.js'

import componentRouter from './routes/componentRoute.js'
import categoryRouter from './routes/categoryRoute.js'

// INITIALIZATION
const app = express()
const port = 5000

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// ROUTES
app.use('/component', componentRouter)
app.use('/category', categoryRouter)
app.use('/images',express.static('uploads'))
connectDB()

// ROUTES


app.use((err,req,res,next) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
        error: process.env.NODE_ENV === 'development' ? err : {}
    });
});

// LISTEN
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
