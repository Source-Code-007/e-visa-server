import { Router } from "express";
import { visaControllers } from "./visa.controller";

const router = Router()


// Need update and create qr code zod schema
router.post('/', visaControllers.createVisa)
router.get('/', visaControllers.getAllVisa)
router.get('/:id', visaControllers.getSingleVisa)
router.delete('/:id', visaControllers.deleteVisa)

export {router as visaRouter}