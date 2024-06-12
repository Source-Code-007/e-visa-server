"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visaRouter = void 0;
const express_1 = require("express");
const visa_controller_1 = require("./visa.controller");
const router = (0, express_1.Router)();
exports.visaRouter = router;
// Need update and create qr code zod schema
router.post('/', visa_controller_1.visaControllers.createVisa);
router.get('/', visa_controller_1.visaControllers.getAllVisa);
router.get('/:referenceNumber', visa_controller_1.visaControllers.getSingleVisa); //By ref number
router.delete('/:id', visa_controller_1.visaControllers.deleteVisa); //By Object Id
