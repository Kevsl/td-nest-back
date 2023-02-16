/*
  Warnings:

  - The primary key for the `meeting` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `meeting` table. All the data in the column will be lost.
  - The required column `id_meeting` was added to the `meeting` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "meeting" DROP CONSTRAINT "meeting_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_meeting" TEXT NOT NULL,
ADD CONSTRAINT "meeting_pkey" PRIMARY KEY ("id_meeting");
