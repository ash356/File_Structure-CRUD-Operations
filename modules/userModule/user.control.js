let { users } = require("../../DB/models/userArray");
// Home Page Method
const welcome = (request, response, next) => {
  return response.send("Home Page");
};
// 01- Get All Users Method
const getAllUsers = (request, response, next) => {
  return response.json({ users });
};
// 02- Sort Method By Name
const sortUsers = (request, response, next) => {
  let sortedUsers = users.sort((a, b) => {
    if (a.name > b.name) {
      return 1; // يسيبهم زي م هما
    } else {
      return -1; // Swap
    }
  });
  return response.json({ sortedUsers });
};
// 03- Add User
const addUser = (request, response, next) => {
  const { id, name, email } = request.body;
  const findUser = users.find((user) => {
    return user.id == id;
  });
  if (!findUser) {
    users.push({ id, name, email });
    return response.json({ "User Added": users });
  } else {
    return response.send("User Allready Exist !");
  }
};
// 04- Delete User
const deleteUser = (request, response, next) => {
  const { id } = request.body;
  const findUser = users.find((user) => {
    return user.id == id;
  });
  if (findUser) {
    users = users.filter((user) => {
      return user.id != id;
    });
    return response.json({ "User Deleted ": users });
  } else {
    return response.send("User Not Exist !");
  }
};
// Handle Error Method
const handleError = (request, response, next) => {
  return response.send("Error 404 Page Not Found !");
};
module.exports = {
  welcome,
  handleError,
  getAllUsers,
  sortUsers,
  addUser,
  deleteUser,
};
