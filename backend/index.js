require("dotenv").config({ path: "./.env" });
const express = require("express");
const { Authentication } = require("./routes");
const { ConnectDB } = require("./config/db");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const { errorConverter, errorHandler } = require("./middlewares/error");
const ApiError = require("./utils/ApiError");
const httpStatus = require("http-status");

const app = express();
app.use(cors());
app.use("/static/", express.static(path.join(__dirname, "./uploads/")));
app.use(morgan("dev"));
app.use(express.json());
const port = process.env.PORT || 3000;
ConnectDB();

app.use("/api/v1", Authentication);
app.use("/api/v1", (req, res) => {
  res.send("ali");
});

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
