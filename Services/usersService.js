const jwt = require('jsonwebtoken');
const { AppPermissions, AppsList } = require('../constants');

async function registerUsersService (req, res){
    const { email, password, name } = req.body;
    try {
        if (!email || !password || !name) {
            throw new Error("Missing required fields: email, password, or name");
        }
        console.log(email, password, name);
        const token = await jwt.sign({ email, password, name }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        });
        res.status(200).json({
            message: 'User registered successfully',
            user_name: name,
            user_email: email,
            token: token,
        });
    } catch (err) {
        console.error(err.message);
        res.status(400).json({
            error: err.message,
        });
    }
};

async function getUsersService(req, res) {
    setTimeout(() => {
        res.status(200).json([
            {
                id: 1,
                account: {
                    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                    name: "Ravi Teja",
                    email: "raviteja@gmail.com",
                },
                role: 'Employee',
                designation: 'Sr. Software Engineer',
                applications: [
                    AppsList.confluence,
                    AppsList.figma,
                    AppsList.slack,
                    AppsList.msOffice,
                    AppsList.hubspot,
                    AppsList.github,
                    AppsList.adobe,
                ],
                applicationPermissions: [AppPermissions.view, AppPermissions.edit],
                groups: ['Voyage', 'Platform Nx', 'Error Nx', 'Engage'],
                createdOn: new Date("02/10/2024").toLocaleDateString(),
            },
        ]);
    }, 700);
}

async function updateUserService (req, res){
    res.status(200).send({ message: `User with ID: ${userId} updated successfully` });
};

async function deleteUserService (req, res){
    res.status(200).send({ message: `User with ID: ${userId} deleted successfully` });
};

module.exports = {
    registerUsersService,
    getUsersService,
    updateUserService,
    deleteUserService,
}