const { usersData } = require("../constants");
const { mapUsersData } = require("../utils");

async function getUsersService(req, res) {
  return res.status(200).json(usersData);
}

async function addUsersService(req, res) {
  const { body } = req;
  const { group, role, applications, userDetails } = body;
  if (!group || !role || !applications || !userDetails) {
    return res
      .status(400)
      .send({
        message:
          "Missing required fields: group, role, applications, or userData",
      });
  }
  usersData.push(mapUsersData(body));
  return res.status(200).send({ message: "User added successfully" });
}

async function updateUserService(req, res) {
  return res
    .status(200)
    .send({ message: `User with ID: ${userId} updated successfully` });
}

async function deleteUserService(req, res) {
  return res
    .status(200)
    .send({ message: `User with ID: ${userId} deleted successfully` });
}

module.exports = {
  getUsersService,
  updateUserService,
  deleteUserService,
  addUsersService,
};
