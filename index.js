
// import dotenv from "dotenv";
// dotenv.config();
// import express from "express";
// import mongoose from "mongoose";
// import certificateRouter from "./routes/CertificateRoutes.js";
// import cors from "cors";

// dotenv.config();
// const app = express();

// app.use(express.json());
// app.use(cors());

// app.get("/", async (req, res) => {
//     res.status(200).json({msg: "You are on home route"});
// })

// app.use("/certificates", certificateRouter);

// async function DBConnect(req, res) {
//     try {
//         await mongoose.connect(process.env.DB_URL);
//         console.log("Connected to database succesfully");
//     } catch (err) {
//         console.error(`The following error occured: ${err}`);
//     }
// }
// DBConnect();

// app.listen(process.env.PORT, (req, res) => {
//     console.log(`server is running on port ${process.env.PORT}`);
// })



import dotenv from "dotenv";
dotenv.config();  // only once at the top

import express from "express";
import mongoose from "mongoose";
import certificateRouter from "./routes/CertificateRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "You are on home route" });
});

app.use("/certificates", certificateRouter);

async function DBConnect() {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI); // check if variable is read
    await mongoose.connect(process.env.MONGO_URI);   // use MONGO_URI from .env
    console.log("Connected to database successfully");
  } catch (err) {
    console.error(`The following error occured: ${err}`);
  }
}

DBConnect();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
