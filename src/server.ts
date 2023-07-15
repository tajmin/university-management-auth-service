import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'

process.on('uncaughtException', err => {
  errorLogger.error(err)
  process.exit(1)
})

let server: Server
//Database Connection
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('DB connection successful')

    server = app.listen(config.port, () => {
      logger.info('Server listening to: ', config.port)
    })
  } catch (error) {
    errorLogger.error('Failed to connect: ', error)
  }

  process.on('unhandledRejection', err => {
    if (server) {
      server.close(() => {
        errorLogger.error(err)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootstrap()

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})
