import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

const main = async () => {
  const board = await prisma.board.upsert({
    where: { id: "starter-board" },
    update: {},
    create: {
      id: "starter-board",
      name: "Starter Board",
      tasks: {
        create: [
          { title: "Plan board columns", description: "Define To Do, In Progress, and Done." },
          { title: "Create first task", description: "Use Prisma Client from server-side code." },
          { title: "Open Prisma Studio", done: true },
        ],
      },
    },
  });

  console.log(`Seeded board: ${board.name}`);
};

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
