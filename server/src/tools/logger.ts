import { DateTime } from 'luxon';
import winston, { format } from 'winston';

const { combine, prettyPrint, printf, timestamp } = format;

const myFormat = printf(({ level, message, timestamp }: any) => {
  timestamp = DateTime.fromJSDate(new Date(timestamp)).toFormat(
    'yyyy-MM-dd HH:mm'
  );

  return `{\n 'time': '${timestamp}',\n 'level': '${level}',\n 'message': '${message}'\n}`;
});

export const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),

  transports: [
    new winston.transports.File({
      filename: 'src/logs/errors.log',
      format: combine(prettyPrint(), timestamp(), myFormat),
      level: 'error',
    }),
    new winston.transports.File({
      filename: 'src/logs/debug.log',
      format: combine(prettyPrint(), timestamp(), myFormat),
    }),
  ],
});

winston.addColors({
  error: 'red',
  warn: 'yellow',
  info: 'cyan',
  debug: 'green',
});

if (process.env['NODE_ENV'] !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}
