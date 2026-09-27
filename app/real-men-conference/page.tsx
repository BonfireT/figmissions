export const metadata = {
  title: "The Real Men Conference Nigeria - Firebrand International Gospel Missions",
  description:
    "The Real Men's Conference - an annual interdenominational, multigenerational Christian conference for men in Nigeria, hosted by Apostle John Ebegbuna.",
};

const photos = [
  "dsc-3645_orig.jpg",
  "dsc-3434_orig.jpg",
  "dsc-3559_orig.jpg",
  "dsc-3657_orig.jpg",
  "dsc-3509_orig.jpg",
];

export default function RealMenConferencePage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          The Real Men Conference
        </h1>
        <p className="mb-8 text-sm font-bold uppercase tracking-widest text-red-700">
          Host: Apostle John Ebegbuna
        </p>

        <p className="mx-auto mb-10 max-w-2xl text-sm sm:text-base leading-relaxed">
          <span className="font-semibold text-gray-900">
            Real Men&apos;s Conference
          </span>{" "}
          &mdash; an annual interdenominational, multigenerational Christian
          conference for men in Nigeria.
        </p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {photos.map((img) => (
            <img
              key={img}
              src={`/${img}`}
              alt="Real Men's Conference"
              className="aspect-square w-full rounded-md object-cover"
            />
          ))}
        </div>
      </section>
    </main>
  );
}