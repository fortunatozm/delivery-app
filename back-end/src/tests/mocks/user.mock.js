const newUserResponseMock = {
  name: "nome aleatorio",
  email: "email@test.com",
  role: "seller",
};

const newUserMock = {
  ...newUserResponseMock,
  password: "senhaaleatoria",
};

const userMock = {
  id: 1,
  ...newUserMock,
}

module.exports = {
  newUserResponseMock,
  newUserMock,
  userMock,
};
