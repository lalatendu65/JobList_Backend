import { Request, Response, NextFunction } from "express";

export const validateRequestBody = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).json({ message: "Body data is required" });
    return;
  }
  next(); // Pass control to the next middleware or route handler
};
