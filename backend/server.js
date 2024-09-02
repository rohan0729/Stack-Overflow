const dotenv = require("dotenv");
const connectDatabase = require('./config/db');
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const router = require("./routers");
const bodyParser = require("body-parser");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PORT = process.env.PORT || 4000;
dotenv.config({ path: "backend/config/config.env" });

connectDatabase.connect();




// const server = app.listen(process.env.PORT, () => {
//   console.log(`server is working on ${process.env.PORT}`);
// })


//const PORT = process.env.PORT || 80;

// const db = require("./db");
// db.connect();

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/api", router);
app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
  } catch (e) {
    res.send("Welcome to stackoverflow clone");
  }
});

app.use(cors());

app.listen(PORT, () => {
  console.log(`Stack Overflow Clone API is running on PORT No- ${PORT}`);
});
//const app = require('./app');

//handling uncaught exception
// process.on("uncaughtException", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log(`shuting down the server due to uncaught exception`);
//   process.exit(1);
// })


// Unhandled promise Rejection 

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shuting down the server due to unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});