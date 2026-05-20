import { prisma } from "../src/lib/prisma";

const main = async () => {
  await prisma.board.findFirst();
  console.log("✅ Connected.");
};

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
