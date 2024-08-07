import {createLogger,transports,format} from 'winston';
const logger=createLogger({
    format:format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf(({timestamp,level,message}) => `[${timestamp} ${level}: ${message}]`)
    ),
    transports:[new transports.File({
        dirname :'logs',
        filename:'error.log',
        level:'error'
    }),
    new transports.File({
        dirname :'logs',
        level:'info',
        filename:'info.log',
    })
  ]
});
export {logger};