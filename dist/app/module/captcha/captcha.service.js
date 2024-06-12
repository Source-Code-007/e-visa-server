"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.captchaServices = void 0;
const captcha_model_1 = __importDefault(require("./captcha.model"));
const createCaptcha = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield captcha_model_1.default.create(payload);
    return result;
});
const getAllCaptcha = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield captcha_model_1.default.find({});
    return result;
});
const getSingleCaptcha = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield captcha_model_1.default.findById(id);
    return result;
});
const getRandomCaptcha = () => __awaiter(void 0, void 0, void 0, function* () {
    const count = yield captcha_model_1.default.countDocuments();
    if (!count) {
        throw new Error('No Captcha found');
    }
    const randomIndex = Math.floor(Math.random() * count);
    const result = yield captcha_model_1.default.findOne().skip(randomIndex);
    return result;
});
const deleteCaptcha = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield captcha_model_1.default.findByIdAndDelete(id);
    return result;
});
exports.captchaServices = {
    createCaptcha,
    getAllCaptcha,
    getSingleCaptcha,
    getRandomCaptcha,
    deleteCaptcha,
};
