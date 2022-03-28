const winston = require('winston')
const { format } = require('winston')
const appRoot = require('app-root-path')

const logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({
      filename: `${appRoot}/api/logs/error.log`,
      level: 'error',
    }),
    new winston.transports.File({
      filename: `${appRoot}/api/logs/combined.log`,
    }),
  ],
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  )
}

logger.stream = {
  write: function(message, encoding) {
    logger.info(message)
  },
}

module.exports = logger
