"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const captcha_route_1 = require("./app/module/captcha/captcha.route");
const visa_route_1 = require("./app/module/visa/visa.route");
const securityCode_route_1 = require("./app/module/securityCode/securityCode.route");
const errHandler_1 = require("./app/middleware/errHandler");
const app = (0, express_1.default)();
// Parser
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Router
app.use('/api/v1/captcha', captcha_route_1.captchaRouter);
app.use('/api/v1/visa', visa_route_1.visaRouter);
app.use('/api/v1/securityCode', securityCode_route_1.securityCodeRouter);
app.use(errHandler_1.notFoundErrHandler);
app.use(errHandler_1.globalErrHandler);
exports.default = app;
