import QueryBuilder from "../../builder/QueryBuilder";
import { TVisa } from "./visa.interface";
import Visa from "./visa.model";

const createVisa = async (payload: TVisa) => {
  const result = await Visa.create(payload);
  return result;
};
const getAllVisa = async (query:Record<string,unknown>) => {
  const visaQuery = new QueryBuilder(Visa.find(), query)
  .searchQuery(['name', 'surname', 'referenceNumber', 'passportNumber'])
  .filterQuery()
  .paginateQuery()
  .sortQuery()
  .fieldFilteringQuery()

const visas = await visaQuery.queryModel

  // Fetch total count of documents that match the query without pagination
  const totalVisas = await Visa.countDocuments();

return {visas, totalVisas}
};
const getSingleVisa = async (referenceNumber: string) => {
  const result = await Visa.findOne({referenceNumber});
  return result;
};
const deleteVisa = async (id: string) => {
  const result = await Visa.findByIdAndDelete(id);
  return result;
};
const updateVisa = async (id: string,updatedVisaData:Partial<TVisa>) => {
  const result = await Visa.findByIdAndUpdate(id, updatedVisaData, {new:true});
  return result;
};

export const visaServices = {
  createVisa,
  getAllVisa,
  getSingleVisa,
  deleteVisa,
  updateVisa
}