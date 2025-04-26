import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  companyName: { type: String, required: true },
  location: { type: String, required: true },
  jobType: { type: String, enum: ['Full-time', 'Part-time', 'Contract', 'Internship'], required: true },
  salaryRange: { type: String, required: true },
  jobDescription: { type: String, required: true },
  requirements: { type: String },
  responsibilities: { type: String },
  applicationDeadline: { type: Date }
}, { timestamps: true });

const Job = mongoose.model('Job', jobSchema);

export default Job;
