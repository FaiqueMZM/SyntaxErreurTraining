import express = require("express");
import {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
} from "../controllers/userController";

const router = express.Router();

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
export default router;