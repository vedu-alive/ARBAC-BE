const { oauthService, registerService, loginService, refreshTokenService } = require('../Services/authService');
exports.oauthController = oauthService;
exports.registerController = registerService;
exports.loginController = loginService;
exports.refreshTokenController = refreshTokenService;