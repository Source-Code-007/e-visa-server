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
exports.captchaControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_codes_1 = require("http-status-codes");
const captcha_service_1 = require("./captcha.service");
const createCaptcha = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const captcha = yield captcha_service_1.captchaServices.createCaptcha(payload);
    (0, sendResponse_1.default)(res, http_status_codes_1.StatusCodes.OK, {
        success: true,
        message: "Captcha inserted successfully!",
        data: captcha,
    });
}));
const getAllCaptcha = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const captcha = yield captcha_service_1.captchaServices.getAllCaptcha();
    (0, sendResponse_1.default)(res, http_status_codes_1.StatusCodes.OK, {
        success: true,
        message: "Captchas are retrieved successfully!",
        data: captcha,
    });
}));
const getSingleCaptcha = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const captcha = yield captcha_service_1.captchaServices.getSingleCaptcha((_a = req.params) === null || _a === void 0 ? void 0 : _a.id);
    if (!captcha) {
        throw new Error("Captcha is not found!");
    }
    (0, sendResponse_1.default)(res, http_status_codes_1.StatusCodes.OK, {
        success: true,
        message: "Captcha is retrieved successfully!",
        data: captcha,
    });
}));
const getRandomCaptcha = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const captcha = yield captcha_service_1.captchaServices.getRandomCaptcha();
    if (!captcha) {
        throw new Error('No Captcha found');
    }
    (0, sendResponse_1.default)(res, http_status_codes_1.StatusCodes.OK, {
        success: true,
        message: "Random Captcha is retrieved successfully!",
        data: captcha,
    });
}));
const deleteCaptcha = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const captcha = yield captcha_service_1.captchaServices.deleteCaptcha((_b = req.params) === null || _b === void 0 ? void 0 : _b.id);
    (0, sendResponse_1.default)(res, http_status_codes_1.StatusCodes.OK, {
        success: true,
        message: "Captchas is deleted successfully!",
        data: captcha,
    });
}));
exports.captchaControllers = {
    createCaptcha,
    getAllCaptcha,
    getSingleCaptcha,
    deleteCaptcha,
    getRandomCaptcha
};
