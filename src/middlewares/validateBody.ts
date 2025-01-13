import { Request, Response, NextFunction } from "express";

// for checking the body data present or not
export const validateRequestBody = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).json({ message: "Body data is required" });
    return;
  }
  next();
};
