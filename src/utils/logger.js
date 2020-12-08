const winston = require('winston');

const customLevels = {
  levels: {
    debug: 4,
    info: 3,
    warn: 2,
    error: 1,
  },
  colors: {
    debug: 'blue',
    info: 'green',
    warn: 'yellow',
    error: 'red',
  },
};

const formatter = winston.format.combine(
  winston.format.colorize({ level: true, message: false }),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.splat(),
  winston.format.printf(info => {
    const { timestamp, level, message, store, product, ...meta } = info;

    if (store && product) {
      return `${timestamp} ${level} :: [${store}] [${product}] :: ${message}`;
    }

    return `${timestamp} ${level} :: ${message} ${
      Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''
    }`;
  }),
);

const makeLogger = () => {
  const devTransport = new winston.transports.Console({
    format: formatter,
  });

  const logger = winston.createLogger({
    level: 'info',
    levels: customLevels.levels,
    transports: [devTransport],
  })

  winston.addColors(customLevels.colors)

  return logger;
}

const logger = makeLogger();

const loggerMethods = loggerInstance => ({
  debug: (msg, meta) => {
    loggerInstance.debug(msg, meta);
  },

  info: (msg, meta) => {
    loggerInstance.info(msg, meta);
  },

  warn: (msg, meta) => {
    loggerInstance.warn(msg, meta);
  },

  error: (msg, meta) => {
    loggerInstance.error(msg, meta);
  },

  createContextLogger: context => loggerMethods(loggerInstance.child(context)),
});

module.exports = loggerMethods(logger);