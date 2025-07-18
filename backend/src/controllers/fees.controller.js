
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import prisma from "../db/prisma.js"; // Import Prisma Client

const createFee = asyncHandler(async (req, res) => {
  const { userId, amount, status, dueDate } = req.body;

  if ([userId, amount, status, dueDate].some((field) => field === undefined || field === null || (typeof field === 'string' && field.trim() === ""))) {
    throw new ApiError(400, "All fields are required");
  }

  const fee = await prisma.fees.create({
    data: {
      userId,
      amount,
      status,
      dueDate: new Date(dueDate),
    },
  });

  return res
    .status(201)
    .json(new ApiResponse(201, fee, "Fee created successfully"));
});

const getAllFees = asyncHandler(async (req, res) => {
  const fees = await prisma.fees.findMany();
  return res
    .status(200)
    .json(new ApiResponse(200, fees, "Fees retrieved successfully"));
});

const getFeeById = asyncHandler(async (req, res) => {
  const fee = await prisma.fees.findUnique({
    where: { id: req.params.id },
  });
  if (!fee) {
    throw new ApiError(404, "Fee not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, fee, "Fee retrieved successfully"));
});

const updateFee = asyncHandler(async (req, res) => {
  const fee = await prisma.fees.update({
    where: { id: req.params.id },
    data: req.body,
  });
  if (!fee) {
    throw new ApiError(404, "Fee not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, fee, "Fee updated successfully"));
});

const deleteFee = asyncHandler(async (req, res) => {
  const fee = await prisma.fees.delete({
    where: { id: req.params.id },
  });
  if (!fee) {
    throw new ApiError(404, "Fee not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Fee deleted successfully"));
});

export { createFee, getAllFees, getFeeById, updateFee, deleteFee };
