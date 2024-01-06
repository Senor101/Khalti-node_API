-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "description" TEXT DEFAULT 'A good Product',
ADD COLUMN     "image" TEXT DEFAULT 'https://picsum.photos/200/300';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';
