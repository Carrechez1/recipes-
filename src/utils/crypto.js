const bcrypt = require("bcrypt");

//emcripta la contraseña del usuario cuando se crea o se modifica la contraseña
const hashPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, 10);
};
//compara si las contraseñas son iguales, la de texto plano y la encriptada

const comparePassword = (plainPassword, hashedPassword) => {
  //plainPassword:contraseña que recibimos del login

  //hashedPassword:contraseña que tenemos guardada en la base de datos

  //esta utilidad se usa cuando hacemos un loggin y recibimos la contraseña del usuario, comparandola con la del database
  return bcrypt.compareSync(plainPassword, hashedPassword);
};

module.exports = {
  hashPassword,
  comparePassword,
};
