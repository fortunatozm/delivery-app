const { loginService } = require('../services');

const loginControllerPost = async (req, res) => {
  const data = req.body;
  const result = await loginService.loginServicePost(data);
  if (result.status === 404) {
    return res.status(result.status).json({ message: result.message });
  }
  return res.status(result.status).json({ token: result.message });
};

module.exports = {
  loginControllerPost,
};
