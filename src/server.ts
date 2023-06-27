import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'

//Database Connection
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('DB connection successful')

    app.listen(config.port, () => {
      logger.info('Server listening to: ', config.port)
    })
  } catch (error) {
    errorLogger.error('Failed to connect: ', error)
  }
}

bootstrap()
