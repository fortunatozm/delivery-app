const { User } = require("../database/models");
const md5 = require("md5")
const { createToken } = require("../utils/jwt.util");

const loginServicePost = async (data) => {
    const { email, password } = data
    const newPassword = md5(password);
    console.log(newPassword)
    const result = await User.findOne({ where: { email, newPassword }})
    if(result === null ){
        return { status: 400, message: 'Email ou senha inválidos' };
    }
    return { status: 200, message: createToken() };
}
module.exports = {loginServicePost}