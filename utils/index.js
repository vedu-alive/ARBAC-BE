const jwt = require("jsonwebtoken");
const mapUsersData = (users) => {
  const { group, role, applications, userDetails } = users;
  const data = {
    id: Math.floor(Math.random() * 100),
    account: {
      name: userDetails.name,
      email: userDetails.name + "@gmail.com",
    },
    role: userDetails.jobTitle,
    designation: role,
    applications,
    groups: group,
    createdOn: new Date().toLocaleDateString(),
  };
  return data;
};
const createToken = async (data) => {
  const token = jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });
  return token;
};
const createRefreshToken = async (data) => {
  const token = jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
};
module.exports = {
  mapUsersData,
  createToken,
  createRefreshToken,
};
