// env file configuration with dotenv package
const dotenv = require("dotenv");
// env path setup
dotenv.config({ path: "./config.env" });
const app = require("./app");
const mongoose = require("mongoose");
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log(`Uncaught exception 💥...Shutting down...`);
  process.exit(1);
});

// mongodb setup
mongoose
  .connect(process.env.MONGO_CONECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB connected 😎`));
const port = process.env.PORT || 2022;

// server listen
const server = app.listen(port, () => {
  console.log(`server running on ${port} port 😎`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log(`Unhandled rejection 💥...Shutting down...`);
  server.close(() => {
    process.exit(1);
  });
});

console.log(x);
