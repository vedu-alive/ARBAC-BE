const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const pool = require('./Database/index');
//*config krna apadta hai
dotenv.config();
const port = process.env.PORT;
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
//* routes
app.use(require("./routes/unproctedRoutes"));
app.use(require('./routes/proctedRoutes'));

app.listen(port, () => {
  console.log(`PORT : ${port}`);
});
