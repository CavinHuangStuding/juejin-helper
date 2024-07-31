const winston = require("winston");

const path = require("path");

const logFile = path.resolve(__dirname, "../../logs/combined.log");

// 配置日志级别
winston.configure({
  level: "info",
  transports: [new winston.transports.Console(), new winston.transports.File({ filename: logFile })]
});

module.exports = winston;
