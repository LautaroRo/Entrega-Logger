import winston from "winston";
const customLevelOptions = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        debug:4
    },
    colors: {
        fatal: "red",
        error: "magenta",
        warning: "yellow",
        info: "blue",
        debug: "white"
    }
}

const logger = winston.createLogger({
    levels:customLevelOptions.levels,

    transports : [
        new winston.transports.Console(
            {
                level: "error", format: winston.format.combine(winston.format.colorize({colors: customLevelOptions.colors}),
                winston.format.simple()
            )
            }
        ),
        new winston.transports.File({filename: "./errors.log",level: "error"})
    ]
})

export const addLoger = (req,res,next) => {
    req.logger = logger
    req.logger.error(`${req.method} en ${req.url} - ${new Date().toLocaleDateString()}`)
    next()
}