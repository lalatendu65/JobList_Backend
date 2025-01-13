import jobModel from "../models/job.model";
import { Request, Response, NextFunction } from "express";

// Define an interface for the job data
interface JobData {
  title: string;
  company: string;
  location: string;
  salary: number;
  description: string;
}

export const createNewJob = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data: JobData = req.body;
    const newJob = await jobModel.create({
      title: data.title,
      company: data.company,
      location: data.location,
      salary: data.salary,
      description: data.description,
    });

    if (!newJob) {
      res.status(404).json({ message: "Job was not created" });
      return;
    }

    res.status(201).json({
      message: "Job created successfully",
      Data: newJob,
    });
  } catch (error) {
    console.error("Error creating job:", error);
    next(error); // Use next to forward the error to Express's error handler
  }
};

export const getAllJob = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const page = req.query.page as string | undefined;
    const limit = req.query.limit as string | undefined;

    // Convert page and limit to numbers with defaults
    const pageNumber = parseInt(page || "1", 10);
    const limitNumber = parseInt(limit || "10", 10);

    // Pagination calculations
    const skip = (pageNumber - 1) * limitNumber;

    // Fetch data with sorting, skipping, and limiting
    const allJob = await jobModel
      .find()
      .sort({ updatedAt: -1 }) // Sort by most recently updated jobs
      .skip(skip)
      .limit(limitNumber);

    if (!allJob || allJob.length === 0) {
      res.status(404).json({ message: "No jobs found" });
      return;
    }

    // Count total documents for pagination metadata
    const totalJobs = await jobModel.countDocuments();

    res.status(200).json({
      message: "Jobs fetched successfully",
      data: allJob,
      pagination: {
        currentPage: pageNumber,
        totalPages: Math.ceil(totalJobs / limitNumber),
        totalJobs,
      },
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    next(error); // Forward error to Express's error handler
  }
};

export const getJobById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const jobId = req.params.id;
    const job = await jobModel.findById(jobId);

    if (!job) {
      res.status(404).json({ message: `No jobs found with ${jobId} ` });
      return;
    }

    res.status(200).json({
      message: "Jobs fetched successfully",
      data: job,
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    next(error); // Forward error to Express's error handler
  }
};

export const updatedJobById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id: jobId } = req.params;

    // Check if the job exists
    const job = await jobModel.findById(jobId);
    if (!job) {
      res.status(404).json({ message: `No job found with ID ${jobId}` });
      return;
    }

    // Update the job with new data
    const updatedJob = await jobModel.findByIdAndUpdate(jobId, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation rules are applied to the updated data
    });

    if (!updatedJob) {
      res
        .status(500)
        .json({ message: `Failed to update job with ID ${jobId}` });
      return;
    }

    res.status(200).json({
      message: "Job updated successfully",
      data: updatedJob,
    });
  } catch (error) {
    console.error("Error updating job:", error);
    next(error); // Forward error to the Express error handler
  }
};

export const deleteJobById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id: jobId } = req.params;

    // Check if the job exists
    const job = await jobModel.findById(jobId);
    if (!job) {
      res.status(404).json({ message: `No job found with ID ${jobId}` });
      return;
    }

    // Delete the job
    const deletedJob = await jobModel.findByIdAndDelete(jobId);
    if (!deletedJob) {
      res
        .status(500)
        .json({ message: `Failed to delete job with ID ${jobId}` });
      return;
    }

    res.status(200).json({
      message: "Job deleted successfully",
      data: deletedJob,
    });
  } catch (error) {
    console.error("Error deleting job:", error);
    next(error); // Forward error to the Express error handler
  }
};
