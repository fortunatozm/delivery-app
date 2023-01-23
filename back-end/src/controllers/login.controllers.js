const { loginServicePost } = require("../services/login.services")

const loginControllerPost = async (req, res) => {
    const requestData = req.body;
    console.log(requestData)
    const result = await loginServicePost(requestData);
    return res.status(result.status).json({ token: result.message });
};

module.exports = {
    loginControllerPost,
}