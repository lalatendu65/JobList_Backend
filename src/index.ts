import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectToDatabase from "./utils/databaseConnection";
import routes from "./routes/app";
dotenv.config();
const app = express();

app.use(express.json());

// db connection
const DB_URL = process.env.MONGO_URL || "";
connectToDatabase(DB_URL);

// Example route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.use(routes());

// port

const PORT = process.env.PORT;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at${PORT}`);
});
