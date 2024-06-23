import { z } from "zod";




const createVisaZodValidation =  z.object({
        userImg: z.string(),
        userQrCodeImg: z.string(),
        visaApplicationStatus: z.string(),
        applicationStatusDate: z.string(),
        referenceNumber: z.string(),
        passportCountry: z.string(),
        passportType: z.string(),
        passportNumber: z.string(),
        passportIssueDate: z.string(),
        passportExpirationDate: z.string(),
        name: z.string(),
        surname: z.string(),
        middleNameOrPatronymic: z.string().optional(),
        birthDate: z.string(),
        visaType: z.string(),
        visaDuration: z.number(),
        entryTimes: z.string(),
        visaValidityPeriod: z.string(),
    });

const updateVisaZodValidation =  z.object({
        userImg: z.string().optional(),
        userQrCodeImg: z.string().optional(),
        visaApplicationStatus: z.string().optional(),
        applicationStatusDate: z.string().optional(),
        referenceNumber: z.string().optional(),
        passportCountry: z.string().optional(),
        passportType: z.string().optional(),
        passportNumber: z.string().optional(),
        passportIssueDate: z.string().optional(),
        passportExpirationDate: z.string().optional(),
        name: z.string().optional(),
        surname: z.string().optional(),
        middleNameOrPatronymic: z.string().optional(),
        birthDate: z.string().optional(),
        visaType: z.string().optional(),
        visaDuration: z.number().optional(),
        entryTimes: z.string().optional(),
        visaValidityPeriod: z.string().optional(),
    });


    export const visaZodValidation = {createVisaZodValidation, updateVisaZodValidation};