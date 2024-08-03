import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/a5d6752c-601a-41c6-a79e-3c5e5325d10e-5s19bp.jpg",
  "https://utfs.io/f/52677835-2d83-4952-9f14-9b079b604c5b-1r1j2k.JPG",
  "https://utfs.io/f/95b56846-d940-4b11-a816-8575d8a4c112-d8rnt2.jpg",
];

const mocksImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main className="flex flex-wrap">
      {mocksImages.map((image, index) => (
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
