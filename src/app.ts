import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.router'

const app: Application = express()

//Routes

//Middlewares
app.use(cors())

//Parse Data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/users/', UserRoutes)

//Error handling

//Test
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

//Global error handler
app.use(globalErrorHandler)

export default app
