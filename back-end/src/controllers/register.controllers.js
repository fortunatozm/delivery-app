const { registerService } = require('../services');

const registerControllerPost = async (req, res) => {
  const data = req.body;
  const { status, message } = await registerService.registerServicePost(data);

  if (status) {
    return res.status(status).json({ message });
  }

  res.status(201).json(message);
};

module.exports = {
  registerControllerPost,
};
