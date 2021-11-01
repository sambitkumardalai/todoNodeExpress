const mongoose = require("mongoose");
const app = require("./app");
mongoose
  .connect("mongodb://localhost:27017/todoApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB connected`));
const port = 8000;
app.listen(port, () => {
  console.log(`server running on ${port} ...`);
});
