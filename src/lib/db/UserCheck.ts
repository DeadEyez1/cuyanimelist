"use server"
import { revalidatePath } from "next/cache";
import prisma from "../prisma";
import { ICollection } from "../types";

export async function UserCollectionHandler(value: ICollection) {
  const collected = await prisma.collection.findFirst({
    where: { user_email: value.user_email, anime_mal_id: value.anime_mal_id }
  })

  if (collected) {
    await prisma.collection.delete({ where: { anime_mal_id: collected.anime_mal_id } })
    revalidatePath("/users/collection");
    revalidatePath(`/anime/${value.anime_mal_id}`);
    return { success: "Successfully removed from your collection!" };
  }

  await prisma.collection.create({ data: { ...value } })
  revalidatePath(`/anime/${value.anime_mal_id}`);
  revalidatePath('/users/comment')
  return { success: "Successfully added to collection!" };
}