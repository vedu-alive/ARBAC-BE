const { getUsersService, updateUserService, deleteUserService, addUsersService } = require("../Services/usersService");

exports.getUsersController = getUsersService;
exports.updateUser = updateUserService;
exports.deleteUser = deleteUserService;
exports.addUserController = addUsersService; 