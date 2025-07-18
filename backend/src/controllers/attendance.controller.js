
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import prisma from "../db/prisma.js"; // Import Prisma Client

const createAttendance = asyncHandler(async (req, res) => {
  const { userId, date, status } = req.body;

  if ([userId, date, status].some((field) => field === undefined || field === null || (typeof field === 'string' && field.trim() === ""))) {
    throw new ApiError(400, "All fields are required");
  }

  const attendance = await prisma.attendance.create({
    data: {
      userId,
      date: new Date(date),
      status,
    },
  });

  return res
    .status(201)
    .json(new ApiResponse(201, attendance, "Attendance created successfully"));
});

const getAllAttendances = asyncHandler(async (req, res) => {
  const attendances = await prisma.attendance.findMany();
  return res
    .status(200)
    .json(
      new ApiResponse(200, attendances, "Attendances retrieved successfully")
    );
});

const getAttendanceById = asyncHandler(async (req, res) => {
  const attendance = await prisma.attendance.findUnique({
    where: { id: req.params.id },
  });
  if (!attendance) {
    throw new ApiError(404, "Attendance not found");
  }
  return res
    .status(200)
    .json(
      new ApiResponse(200, attendance, "Attendance retrieved successfully")
    );
});

const updateAttendance = asyncHandler(async (req, res) => {
  const attendance = await prisma.attendance.update({
    where: { id: req.params.id },
    data: req.body,
  });
  if (!attendance) {
    throw new ApiError(404, "Attendance not found");
  }
  return res
    .status(200)
    .json(
      new ApiResponse(200, attendance, "Attendance updated successfully")
    );
});

const deleteAttendance = asyncHandler(async (req, res) => {
  const attendance = await prisma.attendance.delete({
    where: { id: req.params.id },
  });
  if (!attendance) {
    throw new ApiError(404, "Attendance not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Attendance deleted successfully"));
});

export {
  createAttendance,
  getAllAttendances,
  getAttendanceById,
  updateAttendance,
  deleteAttendance,
};
