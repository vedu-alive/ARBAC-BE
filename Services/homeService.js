async function getHomeService (req, res){
    return res.status(200).json({
      message: "Welcome to the Home Page",
    });
}

module.exports = {
    getHomeService,
}