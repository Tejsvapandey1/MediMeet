"use server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  console.log("Hello i am the user\n");

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
      include:{
        transactions:{
          where:{
            type: "CREDIT_PURCHASE",
            createdAt : {
              gte : new Date(new Date().getFullYear(),new Date().getMonth(),1)
            },
          },
          orderBy:{
            createdAt : "desc"
          },
          take : 1
        }
      }
    });

    if (loggedInUser) {
      // console.log(loggedInUser);
      return loggedInUser;
    }

    // console.log("logged in user" + loggedInUser);

    const name = `${user.firstName} ${user.lastName}`;
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name: name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
        transactions: {
          create: {
            type: "CREDIT_PURCHASE",
            packageId: "free_user",
            amount: 2,
          },
        },
      },
    });

    console.log("user created");
    return newUser;
  } catch (e) {
    console.error("checkUser failed", e);
  }
};
