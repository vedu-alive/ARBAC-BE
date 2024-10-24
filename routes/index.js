const express = require('express');
const router = express.Router();
const { getUsersController, addUserController } = require('../Controllers/usersControllers');
const { paths, authPaths } = require('../paths');
const { getHomeService } = require('../Services/homeService');
const { oauthController,loginController,registerController } = require('../Controllers/authController');

//* Home Route
router.route(paths.home).get(getHomeService);

//* User Route 
router.route(paths.users)
    .get(getUsersController)
router.route(paths.addUsers)
    .post(addUserController);
router.route(authPaths.oauth)
    .post(oauthController);
router.route(authPaths.login)
    .post(loginController);
router.route(authPaths.register)
    .post(registerController);

module.exports = router;