-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'teacher', 'student');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female', 'Other');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "contactNumber" TEXT,
    "address" TEXT,
    "dateOfBirth" DATE,
    "gender" "Gender",
    "refreshToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeacherDetails" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT,
    "qualification" TEXT,
    "experience" TEXT,
    "subject" TEXT,
    "dateOfJoining" DATE,
    "salary" DOUBLE PRECISION,
    "userId" TEXT NOT NULL,

    CONSTRAINT "TeacherDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentDetails" (
    "id" TEXT NOT NULL,
    "rollNumber" TEXT,
    "grade" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "StudentDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "TeacherDetails_employeeId_key" ON "TeacherDetails"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "TeacherDetails_userId_key" ON "TeacherDetails"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "StudentDetails_rollNumber_key" ON "StudentDetails"("rollNumber");

-- CreateIndex
CREATE UNIQUE INDEX "StudentDetails_userId_key" ON "StudentDetails"("userId");

-- AddForeignKey
ALTER TABLE "TeacherDetails" ADD CONSTRAINT "TeacherDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentDetails" ADD CONSTRAINT "StudentDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
