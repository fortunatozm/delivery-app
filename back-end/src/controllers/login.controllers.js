const { loginServicePost } = require("../services/login.services")

const loginControllerPost = async (req, res) => {
    const data = req.body
    const result = await loginServicePost(data)
    if( result.status === 400){
        return res.status(result.status).json({ message: result.message })
    }
    return res.status(result.status).json({ token: result.message });
};

module.exports = {
    loginControllerPost,
}