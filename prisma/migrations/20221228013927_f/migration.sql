-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Word" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "audio" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "catID" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Word_catID_fkey" FOREIGN KEY ("catID") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Word" ("audio", "id", "image", "title") SELECT "audio", "id", "image", "title" FROM "Word";
DROP TABLE "Word";
ALTER TABLE "new_Word" RENAME TO "Word";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
