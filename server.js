const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");

const app = require("./app");
mongoose
  .connect(process.env.MONGO_CONECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB connected`));
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server running on ${port} ...`);
});
