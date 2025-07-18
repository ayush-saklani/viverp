
import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

// router.use(verifyJWT);

// router.route("/").post(createExam).get(getAllExams);
// router.route("/:id").get(getExamById).patch(updateExam).delete(deleteExam);

export default router;
