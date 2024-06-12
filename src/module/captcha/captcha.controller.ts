import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { captchaServices } from "./captcha.service";
import { TCaptcha } from "./captcha.interface";


const createCaptcha: RequestHandler = catchAsync(async (req, res, next) => {
  const payload = req.body as TCaptcha;
  const captcha = await captchaServices.createCaptcha(payload);
  sendResponse(res, StatusCodes.OK, {
    success: true,
    message: "Captcha inserted successfully!",
    data: captcha,
  });
});
const getAllCaptcha: RequestHandler = catchAsync(async (req, res, next) => {
  const captcha = await captchaServices.getAllCaptcha();
  sendResponse(res, StatusCodes.OK, {
    success: true,
    message: "Captchas are retrieved successfully!",
    data: captcha,
  });
});
const getSingleCaptcha: RequestHandler = catchAsync(async (req, res, next) => {
  const captcha = await captchaServices.getSingleCaptcha(req.params?.id as string);
  if (!captcha) {
    throw new Error("Captcha is not found!");
  }
  sendResponse(res, StatusCodes.OK, {
    success: true,
    message: "Captcha is retrieved successfully!",
    data: captcha,
  });
});

const getRandomCaptcha: RequestHandler = catchAsync(async (req, res, next) => {
  const captcha = await captchaServices.getRandomCaptcha();
  if (!captcha) {
    throw new Error('No Captcha found');
  }
  sendResponse(res, StatusCodes.OK, {
    success: true,
    message: "Random Captcha is retrieved successfully!",
    data: captcha,
  });
});

const deleteCaptcha: RequestHandler = catchAsync(async (req, res, next) => {
  const captcha = await captchaServices.deleteCaptcha(req.params?.id as string);
  sendResponse(res, StatusCodes.OK, {
    success: true,
    message: "Captchas is deleted successfully!",
    data: captcha,
  });
});

export const captchaControllers = {
    createCaptcha,
    getAllCaptcha,
    getSingleCaptcha,
    deleteCaptcha,
    getRandomCaptcha
}
