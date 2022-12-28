/*
  Warnings:

  - You are about to drop the column `catID` on the `Word` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Word" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "audio" TEXT NOT NULL,
    "image" TEXT NOT NULL
);
INSERT INTO "new_Word" ("audio", "id", "image", "title") SELECT "audio", "id", "image", "title" FROM "Word";
DROP TABLE "Word";
ALTER TABLE "new_Word" RENAME TO "Word";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
