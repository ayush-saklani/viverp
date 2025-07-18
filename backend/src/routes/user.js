
import { Router } from "express";
import {
  loginUser,
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

// Secured routes
router.route("/").get(verifyJWT, getAllUsers);
router
  .route("/:id")
  .get(verifyJWT, getUserById)
  .patch(verifyJWT, updateUser)
  .delete(verifyJWT, deleteUser);

export default router;
