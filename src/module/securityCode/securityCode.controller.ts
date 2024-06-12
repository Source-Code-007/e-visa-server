import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { SecurityCodeServices } from "./captcha.service";
import { TSecurityCode } from "./securityCode.interface";

const createSecurityCode: RequestHandler = catchAsync(async (req, res, next) => {
  const payload = req.body as TSecurityCode;
  const SecurityCode = await SecurityCodeServices.createSecurityCode(payload);
  sendResponse(res, StatusCodes.OK, {
    success: true,
    message: "Security code inserted successfully!",
    data: SecurityCode,
  });
});
const getAllSecurityCode: RequestHandler = catchAsync(async (req, res, next) => {
  const SecurityCode = await SecurityCodeServices.getAllSecurityCode();
  sendResponse(res, StatusCodes.OK, {
    success: true,
    message: "Security codes are retrieved successfully!",
    data: SecurityCode,
  });
});

export const securityCodeControllers = {
 createSecurityCode,
 getAllSecurityCode
};
