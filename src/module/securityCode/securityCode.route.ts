import { RequestHandler, Router } from "express";
import { securityCodeControllers } from "./securityCode.controller";

const router = Router()


// Need update and create qr code zod schema
router.post('/', securityCodeControllers.createSecurityCode)
router.get('/', securityCodeControllers.getAllSecurityCode)



export {router as securityCodeRouter}