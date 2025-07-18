import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  createFee,
  getAllFees,
  getFeeById,
  updateFee,
  deleteFee,
} from "../controllers/fees.controller.js";

const router = Router();

router.use(verifyJWT);

router.route("/").post(createFee).get(getAllFees);
router.route("/:id").get(getFeeById).patch(updateFee).delete(deleteFee);

export default router;