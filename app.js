const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const web = require("./routes/web");
const connectDB = require("./db/connectDB");

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());

// CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174","https://smsmern.netlify.app"],
    credentials: true,
  })
);

// database connect
connectDB();

// routes
app.use("/api", web);

// server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});