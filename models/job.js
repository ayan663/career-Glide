import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({

  recruiterName: String,
  phoneNumber: String,
  address: String,
  jobTitle: String,
  companyName: String,
  salaryCurrency: String,
  location: String,
  skills: String,
  description: String,
}, { timestamps: true });

export default mongoose.model("Job", jobSchema);
