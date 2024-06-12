import mongoose, { model } from "mongoose";
import { TSecurityCode } from "./securityCode.interface";

const securityCodeSchema = new mongoose.Schema<TSecurityCode>({
  codes: {
    type: [String],
    required: true,
  }
});

const SecurityCode = model<TSecurityCode>("SecurityCode", securityCodeSchema);

export default SecurityCode;
