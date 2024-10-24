const { oauthService, registerService, loginService } = require('../Services/authService');
exports.oauthController = oauthService;
exports.registerController = registerService;
exports.loginController = loginService;