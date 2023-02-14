/*
  Warnings:

  - Changed the type of `infractions_mois` on the `mois` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "mois" DROP COLUMN "infractions_mois",
ADD COLUMN     "infractions_mois" INTEGER NOT NULL;
