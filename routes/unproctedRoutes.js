const express = require('express');
const router = express.Router();
const { authPaths } = require('../paths');
const { oauthController,loginController,registerController, refreshTokenController, } = require('../Controllers/authController');

//* Auth Routes
router.route(authPaths.oauth)
    .post(oauthController);
router.route(authPaths.login)
    .post(loginController);
router.route(authPaths.register)
    .post(registerController);
router.route(authPaths.refreshToken)
    .post(refreshTokenController);

module.exports = router;