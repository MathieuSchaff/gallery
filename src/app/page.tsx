import Link from "next/link";
import { db } from "../server/db/index";
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { desc } from "drizzle-orm";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
export const dynamic = "force-dynamic";
export async function Images() {
  const images = await getMyImages();
  return (
    // <>
    //   {images.map((image, index) => (
    //     <div key={index} className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
    //       <div className="aspect-square overflow-hidden">
    //         <Image
    //           src={image.url}
    //           alt={image.url}
    //           width={300}
    //           height={300}
    //           style={{ objectFit: "cover" }}
    //           className="h-full w-full object-cover"
    //         />
    //       </div>
    //     </div>
    //   ))}
    // </>
    <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="group relative w-full max-w-[300px] overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <div className="aspect-square">
            <Image
              src={image.url}
              alt={image.url}
              width={300}
              height={300}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-10"></div>
        </div>
      ))}
    </div>
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
