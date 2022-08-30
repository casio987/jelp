"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationMiddleware = void 0;
const Logger_1 = require("../components/Logger");
const logger = (0, Logger_1.getLogger)();
const validationMiddleware = (schema) => (req, res, next) => {
    const result = schema.validate(req.body);
    const { error } = result;
    if (error) {
        logger.info(`Invalid request body - Error: ${error.message} - ${JSON.stringify(req.body)}`);
        res.status(400).json({
            message: "Invalid request body"
        });
        return;
    }
    next();
};
exports.validationMiddleware = validationMiddleware;
exports.default = exports.validationMiddleware;
