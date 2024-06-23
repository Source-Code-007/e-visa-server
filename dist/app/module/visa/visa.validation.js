"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visaZodValidation = void 0;
const zod_1 = require("zod");
const createVisaZodValidation = zod_1.z.object({
    userImg: zod_1.z.string(),
    userQrCodeImg: zod_1.z.string(),
    visaApplicationStatus: zod_1.z.string(),
    applicationStatusDate: zod_1.z.string(),
    referenceNumber: zod_1.z.string(),
    passportCountry: zod_1.z.string(),
    passportType: zod_1.z.string(),
    passportNumber: zod_1.z.string(),
    passportIssueDate: zod_1.z.string(),
    passportExpirationDate: zod_1.z.string(),
    name: zod_1.z.string(),
    surname: zod_1.z.string(),
    middleNameOrPatronymic: zod_1.z.string().optional(),
    birthDate: zod_1.z.string(),
    visaType: zod_1.z.string(),
    visaDuration: zod_1.z.number(),
    entryTimes: zod_1.z.string(),
    visaValidityPeriod: zod_1.z.string(),
});
const updateVisaZodValidation = zod_1.z.object({
    userImg: zod_1.z.string().optional(),
    userQrCodeImg: zod_1.z.string().optional(),
    visaApplicationStatus: zod_1.z.string().optional(),
    applicationStatusDate: zod_1.z.string().optional(),
    referenceNumber: zod_1.z.string().optional(),
    passportCountry: zod_1.z.string().optional(),
    passportType: zod_1.z.string().optional(),
    passportNumber: zod_1.z.string().optional(),
    passportIssueDate: zod_1.z.string().optional(),
    passportExpirationDate: zod_1.z.string().optional(),
    name: zod_1.z.string().optional(),
    surname: zod_1.z.string().optional(),
    middleNameOrPatronymic: zod_1.z.string().optional(),
    birthDate: zod_1.z.string().optional(),
    visaType: zod_1.z.string().optional(),
    visaDuration: zod_1.z.number().optional(),
    entryTimes: zod_1.z.string().optional(),
    visaValidityPeriod: zod_1.z.string().optional(),
});
exports.visaZodValidation = { createVisaZodValidation, updateVisaZodValidation };
