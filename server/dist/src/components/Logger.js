"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogger = void 0;
const winston_1 = require("winston");
const { combine, timestamp, json } = winston_1.format;
// export const formatError = (err: Error | string): string => {
//   if (err instanceof Error) {
//     return `${err.name}: ${err.message}`;
//   }
//   return err;
// };
const getLogger = () => {
    return (0, winston_1.createLogger)({
        level: "info",
        format: combine(timestamp(), json()),
        transports: [
            new winston_1.transports.Console(),
        ],
    });
};
exports.getLogger = getLogger;
