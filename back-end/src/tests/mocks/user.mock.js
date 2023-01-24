const newUserResponseMock = {
  name: "nome aleatorio",
  email: "email@test.com",
  role: "seller",
};

const newUserMock = {
  ...newUserResponseMock,
  password: "senhaaleatoria",
};

module.exports = {
  newUserResponseMock,
  newUserMock,
};
