/*
  Warnings:

  - A unique constraint covering the columns `[user_email,anime_mal_id]` on the table `Collection` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Collection_user_email_anime_mal_id_key` ON `Collection`(`user_email`, `anime_mal_id`);
