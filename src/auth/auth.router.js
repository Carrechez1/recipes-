//auth va a contener las rutas de autorizacion y autenticacion
/*
 *login
 *register
 *recovery password
 *verify user
 */

const router = require("express").Router();

const authServices = require("./auth.services");
const { registerUser } = require("../users/users.services");

router.post("/register", registerUser);
router.post("/login", authServices.login);

module.exports = router;
