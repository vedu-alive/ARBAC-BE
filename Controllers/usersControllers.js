const { registerUsersService, getUsersService, updateUserService, deleteUserService } = require("../Services/usersService");

exports.registerUser = registerUsersService
exports.getUsers = getUsersService;
exports.updateUser = updateUserService;
exports.deleteUser = deleteUserService;