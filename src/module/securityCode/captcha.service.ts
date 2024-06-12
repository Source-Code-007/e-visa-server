import { TSecurityCode } from "./securityCode.interface";
import SecurityCode from "./securityCode.model";


const createSecurityCode = async (payload: TSecurityCode) => {
  const result = await SecurityCode.create(payload);
  return result;
};
const getAllSecurityCode = async () => {
  const result = await SecurityCode.find({});
  return result;
};

export const SecurityCodeServices = {
  createSecurityCode,
  getAllSecurityCode,
};
