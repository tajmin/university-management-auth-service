import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.router'

const app: Application = express()

//Routes

//Middlewares
app.use(cors())

//Parse Data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/users/', usersRouter)

//Test
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

export default app
