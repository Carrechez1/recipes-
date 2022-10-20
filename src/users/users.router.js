const router = require("express").Router();
const { session } = require("passport");
const passport = require("passport");
const adminValidate = require("../middlewares/role.middleware");
const userServices = require("./users.services");

require("../middlewares/auth.middleware")(passport);

//rutas raiz

router.get("/", userServices.getAllUsers);

//rutas dinamicas por ID
router
  .route("/me")
  .get(passport.authenticate("jwt", { session: false }), userServices.getMyUser)
  .patch(
    passport.authenticate("jwt", { session: false }),
    userServices.patchMyUser
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    userServices.deleteMyUser
  );

router
  .route("/:id")
  .get(userServices.getUserById)
  .patch(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    userServices.patchUser
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    userServices.deleteUser
  );

//TODO el registerUser ira en la ruta /auth/register

module.exports = router;
