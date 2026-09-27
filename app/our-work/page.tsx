import Link from "next/link";

export const metadata = {
  title: "Our Mission Work - Firebrand International Gospel Missions",
  description:
    "Discover your place in Christ's mandate with Firebrand International Gospel Missions.",
};

const galleryImages = [
  "picture-080.jpg", "picture-081.jpg", "picture-082.jpg", "picture-083.jpg",
  "picture-084.jpg", "picture-085.jpg", "picture-086.jpg", "picture-087.jpg",
  "picture-088.jpg", "picture-089.jpg", "picture-090.jpg", "picture-091.jpg",
  "picture-022.jpg", "picture-023.jpg", "picture-024.jpg", "picture-025.jpg",
  "picture-026.jpg", "picture-027.jpg", "picture-028.jpg", "picture-029.jpg",
  "picture-030.jpg",
];

export default function OurWorkPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h1 className="mx-auto mb-6 max-w-2xl text-2xl sm:text-3xl font-bold leading-tight text-gray-900">
          Are you looking to take the next step in living your whole life as
          an example of Jesus?
        </h1>
        <p className="mb-10 text-sm sm:text-base">
          We want to help you discover your place in Christ&apos;s mandate!
        </p>

        <Link
          href="/contact-us"
          className="inline-block rounded-md bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-800"
        >
          Contact Us for more Information
        </Link>

        <p className="mt-16 mb-10 text-lg font-bold text-gray-900">
          We are committed to reaching{" "}
          <span className="text-red-700">UNREACHED</span> Peoples and Nations
        </p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {galleryImages.map((img) => (
            <img
              key={img}
              src={`/gallery/${img}`}
              alt="Firebrand mission field work"
              className="aspect-square w-full rounded-md object-cover"
            />
          ))}
        </div>
      </section>
    </main>
  );
}