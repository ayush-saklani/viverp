
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import prisma from "../db/prisma.js"; // Import Prisma Client

const createExam = asyncHandler(async (req, res) => {
  const { userId, subject, marks, grade } = req.body;

  if ([userId, subject, marks, grade].some((field) => field === undefined || field === null || (typeof field === 'string' && field.trim() === ""))) {
    throw new ApiError(400, "All fields are required");
  }

  const exam = await prisma.exam.create({
    data: {
      userId,
      subject,
      marks,
      grade,
    },
  });

  return res
    .status(201)
    .json(new ApiResponse(201, exam, "Exam created successfully"));
});

const getAllExams = asyncHandler(async (req, res) => {
  const exams = await prisma.exam.findMany();
  return res
    .status(200)
    .json(new ApiResponse(200, exams, "Exams retrieved successfully"));
});

const getExamById = asyncHandler(async (req, res) => {
  const exam = await prisma.exam.findUnique({
    where: { id: req.params.id },
  });
  if (!exam) {
    throw new ApiError(404, "Exam not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, exam, "Exam retrieved successfully"));
});

const updateExam = asyncHandler(async (req, res) => {
  const exam = await prisma.exam.update({
    where: { id: req.params.id },
    data: req.body,
  });
  if (!exam) {
    throw new ApiError(404, "Exam not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, exam, "Exam updated successfully"));
});

const deleteExam = asyncHandler(async (req, res) => {
  const exam = await prisma.exam.delete({
    where: { id: req.params.id },
  });
  if (!exam) {
    throw new ApiError(404, "Exam not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Exam deleted successfully"));
});

export { createExam, getAllExams, getExamById, updateExam, deleteExam };
