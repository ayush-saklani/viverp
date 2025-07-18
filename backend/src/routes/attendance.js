import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  createAttendance,
  getAllAttendances,
  getAttendanceById,
  updateAttendance,
  deleteAttendance,
} from "../controllers/attendance.controller.js";

const router = Router();

router.use(verifyJWT);

router.route("/").post(createAttendance).get(getAllAttendances);
router
  .route("/:id")
  .get(getAttendanceById)
  .patch(updateAttendance)
  .delete(deleteAttendance);

export default router;