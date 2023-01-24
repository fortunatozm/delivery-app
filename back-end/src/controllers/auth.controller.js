const { authService } = require('../services');

const loginControllerPost = async (req, res) => {
  const data = req.body;
  const result = await authService.loginServicePost(data);
  if (result.status === 404) {
    return res.status(result.status).json({ message: result.message });
  }
  return res.status(result.status).json({ token: result.message });
};

const registerControllerPost = async (req, res) => {
  const data = req.body;
  const { status, message } = await authService.registerServicePost(data);

  if (status) {
    return res.status(status).json({ message });
  }

  res.status(201).json(message);
};

const userDataGet = async (req, res) => {
  const authToken = req.headers.authorization;

  const user = await authService.getUser(authToken);
  res.status(200).json(user);
};

module.exports = {
  loginControllerPost,
  registerControllerPost,
  userDataGet,
};
