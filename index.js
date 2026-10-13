import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";

const app = express();

// middleware for parsing request body
app.use(express.json());

// middleware for handling CORS POLICY
// app.use(
// cors({
// origin: "http://localhost:3000",
//methods: ["GET", "POST", "PUT", "DELETE"],
// allowedHeaders: "content-Type",
// })
//);

// middleware for handling CORS POLICY all
app.use(cors());

app.get("/", (req, res) => {
  res.status(234).send("Welcome to MERN full stack bookstore");
});

app.use("/books", bookRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("mongoDB connected...");
    app.listen(PORT, () => {
      console.log(`Server is running on: http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
