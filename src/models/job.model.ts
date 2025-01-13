import mongoose from "mongoose";
import { title } from "process";

const options = {
  timestamps: true,
  versionKey: false,
};

const jobSchema = new mongoose.Schema(
  {
    title: { type: String },
    company: { type: String },
    location: { type: String },
    salary: { type: Number },
    description: { type: String },
  },
  options
);
const jobModel = mongoose.model("Job", jobSchema);
export default jobModel;
