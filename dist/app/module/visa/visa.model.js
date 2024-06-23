"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const visaSchema = new mongoose_1.default.Schema({
    userImg: { type: String, required: true },
    userQrCodeImg: { type: String, required: true },
    visaApplicationStatus: { type: String, required: true },
    applicationStatusDate: { type: String, required: true },
    referenceNumber: { type: String, required: true },
    passportCountry: { type: String, required: true },
    passportType: { type: String, required: true },
    passportNumber: { type: String, required: true },
    passportIssueDate: { type: String, required: true },
    passportExpirationDate: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    middleNameOrPatronymic: { type: String },
    birthDate: { type: String, required: true },
    visaType: { type: String, required: true },
    visaDuration: { type: Number, required: true },
    entryTimes: { type: String, required: true },
    visaValidityPeriod: { type: String, required: true },
}, { timestamps: true });
const Visa = (0, mongoose_1.model)("Visa", visaSchema);
exports.default = Visa;
