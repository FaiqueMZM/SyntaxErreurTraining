import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.user.deleteMany();
    const users = await prisma.user.createMany({
        data: [
            {
                name: "Harry",
                email: "harrp@hogwarts.com",
                age: 18,
            },
            {
                name: "Ron",
                email: "ronW@hogwarts.com",
                age: 18,
            },
        ],
    });

    console.log(users);
}

main()
    .catch((e) => {
        console.error(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
