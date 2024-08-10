import Link from "next/link";
import { db } from "../server/db/index";
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
export const dynamic = "force-dynamic";
export async function Images() {
  const images = await db.query.images.findMany();
  return (
    <>
      {images.map((image, index) => (
        <div key={index} className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="aspect-square overflow-hidden">
            <img
              src={image.url}
              alt={image.url}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ))}
    </>
  );
}
export default async function HomePage() {
  return (
    <main className="flex flex-wrap">
      <SignedOut>Please sign in</SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
