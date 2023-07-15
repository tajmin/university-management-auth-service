import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
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
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  //throw new Error('Error Logger')
})

//Global error handler
app.use(globalErrorHandler)

export default app
