import prisma from "../../../../prisma/prisma.client";

export default async (user_id :string) : Promise <boolean> => {
    const userExists = await prisma.user.findUnique({
        where: {
            id: user_id
        }
    })
    if(userExists)
        return true;
    return false;
}