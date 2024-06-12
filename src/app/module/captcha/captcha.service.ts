import { TCaptcha } from "./captcha.interface";
import Captcha from "./captcha.model";


const createCaptcha = async (payload: TCaptcha) => {
  const result = await Captcha.create(payload);
  return result;
};
const getAllCaptcha = async () => {
  const result = await Captcha.find({});
  return result;
};
const getSingleCaptcha = async (id: string) => {
  const result = await Captcha.findById(id);
  return result;
};
const getRandomCaptcha = async () => {
  const count = await Captcha.countDocuments();
  if(!count){
    throw new Error('No Captcha found');
  }
  const randomIndex = Math.floor(Math.random() * count);
  const result = await Captcha.findOne().skip(randomIndex);
  return result;
};
const deleteCaptcha = async (id: string) => {
  const result = await Captcha.findByIdAndDelete(id);
  return result;
};

export const captchaServices = {
  createCaptcha,
  getAllCaptcha,
  getSingleCaptcha,
  getRandomCaptcha,
  deleteCaptcha,
};