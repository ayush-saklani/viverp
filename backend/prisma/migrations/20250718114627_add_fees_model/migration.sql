-- CreateEnum
CREATE TYPE "FeesStatus" AS ENUM ('Paid', 'Unpaid');

-- CreateTable
CREATE TABLE "Fees" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" "FeesStatus" NOT NULL,
    "dueDate" DATE NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fees_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Fees" ADD CONSTRAINT "Fees_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
