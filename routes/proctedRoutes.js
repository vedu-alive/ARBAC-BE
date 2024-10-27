const express = require("express");
const router = express.Router();
const {
  getUsersController,
  addUserController,
} = require("../Controllers/usersControllers");
const { paths } = require("../paths");
const { validateToken } = require("../middlewares");

router.use(validateToken);
router.route(paths.users).get(getUsersController);
router.route(paths.addUsers).post(addUserController);

module.exports = router;