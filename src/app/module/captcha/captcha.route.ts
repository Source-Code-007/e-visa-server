import { RequestHandler, Router } from "express";
import { captchaControllers } from "./captcha.controller";

const router = Router()


// Need update and create qr code zod schema
router.post('/', captchaControllers.createCaptcha)
router.get('/', captchaControllers.getAllCaptcha)
router.get('/random', captchaControllers.getRandomCaptcha)
router.get('/:id', captchaControllers.getSingleCaptcha)
router.delete('/:id', captchaControllers.deleteCaptcha)



export {router as captchaRouter}