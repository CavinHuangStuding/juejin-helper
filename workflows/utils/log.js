const winston = require("winston");

const path = require("path");

const logFile = path.resolve(__dirname, "../../logs/combined.log");

// 配置日志级别
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple()
    }),
    new winston.transports.File({ filename: logFile })
  ]
});

module.exports = {
  logger
};
