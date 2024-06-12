"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.securityCodeRouter = void 0;
const express_1 = require("express");
const securityCode_controller_1 = require("./securityCode.controller");
const router = (0, express_1.Router)();
exports.securityCodeRouter = router;
// Need update and create qr code zod schema
router.post('/', securityCode_controller_1.securityCodeControllers.createSecurityCode);
router.get('/', securityCode_controller_1.securityCodeControllers.getAllSecurityCode);
