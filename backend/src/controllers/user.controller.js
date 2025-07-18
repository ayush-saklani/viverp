
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import prisma from "../db/prisma.js"; // Import Prisma Client
import bcrypt from "bcrypt"; // For password hashing and comparison
import jwt from "jsonwebtoken"; // For token generation

const registerUser = asyncHandler(async (req, res) => {
  const {
    fullName,
    email,
    password,
    role,
    contactNumber,
    address,
    dateOfBirth,
    gender,
    employeeId,
    qualification,
    experience,
    subject,
    dateOfJoining,
    salary,
    rollNumber,
    grade,
  } = req.body;

  if ([fullName, email, password, role].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All required fields are missing");
  }

  const existedUser = await prisma.user.findUnique({ where: { email } });

  if (existedUser) {
    throw new ApiError(409, "User with email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      fullName,
      email,
      password: hashedPassword,
      role,
      contactNumber,
      address,
      dateOfBirth,
      gender,
      ...(role === "teacher" && employeeId && {
        teacherDetails: {
          create: {
            employeeId,
            qualification,
            experience,
            subject,
            dateOfJoining,
            salary,
          },
        },
      }),
      ...(role === "student" && rollNumber && {
        studentDetails: {
          create: {
            rollNumber,
            grade,
          },
        },
      }),
    },
    select: {
      id: true,
      email: true,
      fullName: true,
      // Do not select password here for security
    },
  });

  if (!user) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, user, "User registered successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  // Re-implement password comparison using bcrypt
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  // Re-implement token generation using jsonwebtoken
  const accessToken = jwt.sign(
    {
      _id: user.id,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );

  const refreshToken = jwt.sign(
    {
      _id: user.id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );

  // Update refreshToken in the database
  await prisma.user.update({
    where: { id: user.id },
    data: { refreshToken: refreshToken },
  });

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: { ...user, password: undefined, refreshToken: undefined }, // Exclude sensitive fields
          accessToken,
          refreshToken,
        },
        "User logged in successfully"
      )
    );
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      fullName: true,
      role: true,
      contactNumber: true,
      address: true,
      dateOfBirth: true,
      gender: true,
      createdAt: true,
      updatedAt: true,
      teacherDetails: true,
      studentDetails: true,
    },
  });
  return res
    .status(200)
    .json(new ApiResponse(200, users, "Users retrieved successfully"));
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.params.id },
    include: {
      teacherDetails: true,
      studentDetails: true,
    },
  });
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  // Exclude sensitive fields before sending
  const userWithoutSensitiveData = { ...user, password: undefined, refreshToken: undefined };
  return res
    .status(200)
    .json(new ApiResponse(200, userWithoutSensitiveData, "User retrieved successfully"));
});

const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    fullName,
    email,
    contactNumber,
    address,
    dateOfBirth,
    gender,
    employeeId,
    qualification,
    experience,
    subject,
    dateOfJoining,
    salary,
    rollNumber,
    grade,
  } = req.body;

  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const updateData = {
    fullName: fullName || user.fullName,
    email: email || user.email,
    contactNumber: contactNumber || user.contactNumber,
    address: address || user.address,
    dateOfBirth: dateOfBirth || user.dateOfBirth,
    gender: gender || user.gender,
  };

  if (user.role === "teacher") {
    const teacherDetailsData = {
      employeeId: employeeId || user.teacherDetails?.employeeId,
      qualification: qualification || user.teacherDetails?.qualification,
      experience: experience || user.teacherDetails?.experience,
      subject: subject || user.teacherDetails?.subject,
      dateOfJoining: dateOfJoining || user.teacherDetails?.dateOfJoining,
      salary: salary || user.teacherDetails?.salary,
    };
    if (user.teacherDetails) {
      await prisma.teacherDetails.update({
        where: { userId: user.id },
        data: teacherDetailsData,
      });
    } else {
      await prisma.teacherDetails.create({
        data: { ...teacherDetailsData, userId: user.id },
      });
    }
  } else if (user.role === "student") {
    const studentDetailsData = {
      rollNumber: rollNumber || user.studentDetails?.rollNumber,
      grade: grade || user.studentDetails?.grade,
    };
    if (user.studentDetails) {
      await prisma.studentDetails.update({
        where: { userId: user.id },
        data: studentDetailsData,
      });
    } else {
      await prisma.studentDetails.create({
        data: { ...studentDetailsData, userId: user.id },
      });
    }
  }

  const updatedUser = await prisma.user.update({
    where: { id },
    data: updateData,
    include: {
      teacherDetails: true,
      studentDetails: true,
    },
  });

  // Exclude sensitive fields before sending
  const userWithoutSensitiveData = { ...updatedUser, password: undefined, refreshToken: undefined };

  return res
    .status(200)
    .json(new ApiResponse(200, userWithoutSensitiveData, "User updated successfully"));
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // Delete associated details first due to foreign key constraints
  await prisma.$transaction(async (prisma) => {
    if (user.role === "teacher") {
      await prisma.teacherDetails.deleteMany({ where: { userId: id } });
    } else if (user.role === "student") {
      await prisma.studentDetails.deleteMany({ where: { userId: id } });
    }
    await prisma.user.delete({ where: { id } });
  });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "User deleted successfully"));
});

export { registerUser, loginUser, getAllUsers, getUserById, updateUser, deleteUser };
