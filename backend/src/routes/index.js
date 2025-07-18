import { Router } from "express";
import userRouter from "./user.js";
import attendanceRouter from "./attendance.js";
import feesRouter from "./fees.js";
import examRouter from "./exam.js";

const router = Router();

router.use("/users", userRouter);
router.use("/attendance", attendanceRouter);
router.use("/fees", feesRouter);
router.use("/exams", examRouter);

export default router;