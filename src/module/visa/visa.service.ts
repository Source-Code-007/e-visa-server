import { TVisa } from "./visa.interface";
import Visa from "./visa.model";

const createVisa = async (payload: TVisa) => {
  const result = await Visa.create(payload);
  return result;
};
const getAllVisa = async () => {
  const result = await Visa.find();
  return result;
};
const getSingleVisa = async (id: string) => {
  const result = await Visa.findById(id);
  return result;
};
const deleteVisa = async (id: string) => {
  const result = await Visa.findByIdAndDelete(id);
  return result;
};

export const visaServices = {
  createVisa,
  getAllVisa,
  getSingleVisa,
  deleteVisa,
}