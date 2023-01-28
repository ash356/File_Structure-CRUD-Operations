const express = require("express");
const app = express();
const port = 5000;
app.use(express.json()); // to convert All Data into Parse
const userRouter = require("./modules/userModule/user.routes");
app.use(userRouter);
app.listen(port, () => {
  console.log(`Server Is Running..... ${port}`);
});
