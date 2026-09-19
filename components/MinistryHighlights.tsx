export default function MinistryHighlights() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-3 sm:items-start">
        {/* Rural Missions */}
        <div className="flex flex-col items-center text-center">
          <p className="mb-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-red-700">
            Rural Missions
          </p>
          <a href="/our-work" className="w-full">
            <img
              src="/rural-missions.jpg"
              alt="Rural missions gathering"
              className="w-full h-64 object-cover"
            />
          </a>
        </div>

        {/* Our Founding President */}
        <div className="flex flex-col items-center text-center">
          <p className="mb-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-red-700">
            Our Founding President
          </p>
          <a href="/our-president" className="w-full">
            <img
              src="/founding-president.jpg"
              alt="Apostle John Ebegbuna"
              className="w-full h-80 object-cover"
            />
          </a>
        </div>

        {/* Real Men Conferences */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/real-men-conference.jpg"
            alt="Real Men Conference group photo"
            className="w-full h-64 object-cover mb-4"
          />
          <p className="mb-2 text-sm sm:text-base">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-red-700">
              Real Men
            </span>{" "}
            <span className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-gray-900">
              Conferences
            </span>
          </p>
          <p className="text-sm sm:text-base text-gray-700 max-w-xs">
            We hold Real Men Conferences to mobilize men into God&apos;s
            service.
          </p>
        </div>
      </div>
    </section>
  );
}