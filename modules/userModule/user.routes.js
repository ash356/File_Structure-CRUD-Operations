const { handleError, welcome, getAllUsers ,sortUsers,addUser,deleteUser} = require("./user.control");
const router = require("express").Router();
router.get("/", welcome);
router.get("/users", getAllUsers);
router.get("/sortedUsers", sortUsers);
router.post("/addUser", addUser);
router.delete("/deleteUser", deleteUser);
router.use(handleError);
module.exports = router;
