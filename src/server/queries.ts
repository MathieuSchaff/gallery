import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {
  const userID = auth();
  if (!userID.userId) throw new Error("Unauthorized");
  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, userID.userId),
    orderBy: (model, { desc }) => [desc(model.id)],
  });
  return images;
}
