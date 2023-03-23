const { Router } = require("express");
const User = require("../controllers/user.controller");
const auth = require("../middleware/auth");

const route = Router();

route.get("/user", auth, User.getAll);
route.get("/user", User.getOne);
route.delete("/user/:_id", User.deleteUser);
route.put("/user/:_id", User.updateUser);
route.post("/user", User.createUser);

module.exports = route;
