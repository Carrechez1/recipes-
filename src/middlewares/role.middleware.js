const adminValidate = (req, res, next) => {
  const role = req.user.role;
  if (role === "amdin") {
    return next();
  } else {
    return res.status(401).json({ Acces: "Access Denied!" });
  }
};

module.exports = adminValidate;
