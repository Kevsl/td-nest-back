/*
  Warnings:

  - You are about to drop the `bookmarks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `journee` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[tel]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "stat" INTEGER,
ADD COLUMN     "tel" TEXT;

-- DropTable
DROP TABLE "bookmarks";

-- DropTable
DROP TABLE "journee";

-- CreateTable
CREATE TABLE "meeting" (
    "id_meeting" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title_meeting" TEXT,
    "contact_meeting" TEXT,
    "start_meeting" TIMESTAMP(3) NOT NULL,
    "end_meeting" TIMESTAMP(3) NOT NULL,
    "utilisateur_id" TEXT,

    CONSTRAINT "meeting_pkey" PRIMARY KEY ("id_meeting")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_tel_key" ON "users"("tel");
