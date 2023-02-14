/*
  Warnings:

  - You are about to drop the column `fin` on the `journee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "journee" DROP COLUMN "fin",
ADD COLUMN     "fin_journee" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
