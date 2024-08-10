import Link from "next/link";
import { db } from "../server/db/index";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany();
  console.log(images);
  return (
    <main className="flex flex-wrap">
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
    </main>
  );
}
