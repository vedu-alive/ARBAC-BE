const express = require('express');
const router = express.Router();
const { registerUser, getUsers } = require('../Controllers/usersControllers');
const { paths } = require('../paths');
const { getHomeService } = require('../Services/homeService');

//* Home Route
router.route(paths.home).get(getHomeService);

//* User Route 
router.route(paths.users)
    .get(getUsers)
    .post(registerUser);

module.exports = router;