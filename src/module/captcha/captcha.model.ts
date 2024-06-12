import mongoose, { model } from "mongoose";
import { TCaptcha } from "./captcha.interface";

const captchaSchema = new mongoose.Schema<TCaptcha>({
  img: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
});

const Captcha = model<TCaptcha>("Captcha", captchaSchema);

export default Captcha;
