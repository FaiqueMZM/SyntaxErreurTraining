import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const users = await prisma.user.findMany({
        where: {
            age: 18,
        },
        orderBy: {
            name: "desc",
        },
    });

    console.log(users.length);
}

main()
    .catch((e) => {
        console.error(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
