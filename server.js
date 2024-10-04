const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
// const pool = require('./Database/index');
//*config krn apadta hai 
dotenv.config();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
//* routes
app.use(require('./routes/index'));
app.listen(port, () => {
  console.log(`PORT : ${port}`);
});