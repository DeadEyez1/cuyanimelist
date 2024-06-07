"use server"
import { revalidatePath } from "next/cache";
import prisma from "../prisma";
import { commentSchema } from "../types";
import { z } from "zod";

export async function PostComment(value: z.infer<typeof commentSchema>) {
  const data = commentSchema.safeParse(value)

  if (!data.success) {
    let errorMessage = ""

    data.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.message
    })

    return {
      error: errorMessage
    }
  }


  await prisma.comment.create({
    data: { ...data.data }
  })


  revalidatePath(`/anime/${value.anime_mal_id}`);
  revalidatePath('/users/comment')
  return { success: "Successfully added a comment!" };
}