import dotenv from "dotenv";
import { app } from "./app.js";
import prisma from "./db/prisma.js"; // Import Prisma Client

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running at port : ${PORT}`);
});

// Disconnect Prisma client when the application exits
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});