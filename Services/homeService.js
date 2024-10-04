async function getHomeService (req, res){
    res.status(200).json({
        message: 'Welcome to the Home Page',
    });
}

module.exports = {
    getHomeService,
}