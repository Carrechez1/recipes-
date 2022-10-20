const { getUserByEmail } = require("../users/users.controller");
const { comparePassword } = require("../utils/crypto");

const loginUser = async (email, password) => {
  //este controlador tiene 2 porsibles respuestas
  //* la primera las credenciales son validas y retprnamos el usuario
  //* el segundo las credenciales son invalidas y retornamos false
  try {
    const user = await getUserByEmail(email);
    const verifyPassword = comparePassword(password, user.password);
    if (verifyPassword) {
      return user;
    }
    return false;
  } catch {
    return false;
  }
};
module.exports = {
  loginUser,
};
