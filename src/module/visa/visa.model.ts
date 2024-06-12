import mongoose, { model } from "mongoose";
import { TVisa } from "./visa.interface";

const visaSchema = new mongoose.Schema<TVisa>({
  userImg: { type: String, required: true },
  userQrCodeImg: { type: String, required: true },
  
  visaApplicationStatus: { type: String, required: true },
  applicationStatusDate: { type: String, required: true },
  referenceNumber: { type: String, required: true },
  passportCountry: { type: String, required: true },
  passportType: { type: String, required: true },
  passportNumber: { type: String, required: true },
  passportIssueDate: { type: String, required: true },
  passportExpirationDate: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  middleNameOrPatronymic: { type: String, required: true },
  birthDate: { type: String, required: true },
  visaType: { type: String, required: true },
  visaDuration: { type: Number, required: true },
  entryTimes: { type: String, required: true },
  visaValidityPeriod: { type: String, required: true },
});

const Visa = model<TVisa>("Visa", visaSchema);

export default Visa;
