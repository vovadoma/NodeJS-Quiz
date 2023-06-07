/*
  Warnings:

  - You are about to drop the column `notes` on the `Option` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Option" DROP COLUMN "notes",
ADD COLUMN     "options" TEXT;
