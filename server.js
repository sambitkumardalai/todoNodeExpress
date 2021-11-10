// env file configuration with dotenv package
const dotenv = require("dotenv");
// env path setup
dotenv.config({ path: "./config.env" });
const app = require("./app");
const mongoose = require("mongoose");

// mongodb setup
mongoose
  .connect(process.env.MONGO_CONECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB connected 😎`));
const port = process.env.PORT || 2022;


// server listen
app.listen(port, () => {
  console.log(`server running on ${port} port 😎`);
});
