/*
  Warnings:

  - The primary key for the `meeting` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `contact_meeting` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the column `end_meeting` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the column `id_meeting` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the column `start_meeting` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the column `title_meeting` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `meeting` table. All the data in the column will be lost.
  - Added the required column `end` to the `meeting` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `meeting` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `start` to the `meeting` table without a default value. This is not possible if the table is not empty.
  - Made the column `utilisateur_id` on table `meeting` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "meeting" DROP CONSTRAINT "meeting_pkey",
DROP COLUMN "contact_meeting",
DROP COLUMN "createdAt",
DROP COLUMN "end_meeting",
DROP COLUMN "id_meeting",
DROP COLUMN "start_meeting",
DROP COLUMN "title_meeting",
DROP COLUMN "updatedAt",
ADD COLUMN     "contact" TEXT,
ADD COLUMN     "end" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "start" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "title" TEXT,
ALTER COLUMN "utilisateur_id" SET NOT NULL,
ADD CONSTRAINT "meeting_pkey" PRIMARY KEY ("id");
