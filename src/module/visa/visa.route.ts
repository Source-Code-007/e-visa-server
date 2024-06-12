import { Router } from "express";
import { visaControllers } from "./visa.controller";

const router = Router()


// Need update and create qr code zod schema
router.post('/', visaControllers.createVisa)
router.get('/', visaControllers.getAllVisa)
router.get('/:referenceNumber', visaControllers.getSingleVisa) //By ref number
router.delete('/:id', visaControllers.deleteVisa) //By Object Id

export {router as visaRouter}