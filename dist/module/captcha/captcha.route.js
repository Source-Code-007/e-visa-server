"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.captchaRouter = void 0;
const express_1 = require("express");
const captcha_controller_1 = require("./captcha.controller");
const router = (0, express_1.Router)();
exports.captchaRouter = router;
// Need update and create qr code zod schema
router.post('/', captcha_controller_1.captchaControllers.createCaptcha);
router.get('/', captcha_controller_1.captchaControllers.getAllCaptcha);
router.get('/random', captcha_controller_1.captchaControllers.getRandomCaptcha);
router.get('/:id', captcha_controller_1.captchaControllers.getSingleCaptcha);
router.delete('/:id', captcha_controller_1.captchaControllers.deleteCaptcha);
