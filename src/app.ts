import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()

//Routes

//Middlewares
app.use(cors())

//Parse Data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

export default app
