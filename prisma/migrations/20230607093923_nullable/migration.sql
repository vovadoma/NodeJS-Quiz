-- AlterTable
ALTER TABLE "Option" ALTER COLUMN "notes" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Question" ALTER COLUMN "notes" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Quiz" ALTER COLUMN "notes" DROP NOT NULL;
