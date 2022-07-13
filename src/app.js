import express from 'express'
import config from './config'
import clientsRoutes from './routes/clients.routes'

const app  = express()

// setings
app.set('port', config.port)

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//rutas
app.use(clientsRoutes)


// 404
app.use((req, res, next) => {
  res.status(404).json({
    message: '404 not found'
  })
})

export default app