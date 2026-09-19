export default function Hero() {
  return (
    <section className="relative h-[460px] w-full overflow-hidden">
      <img
        src="/hero-crusade.jpg"
        alt="Firebrand crusade gathering"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">
          Luke 4:17-19
        </p>
        <h1 className="font-sans text-3xl sm:text-5xl font-extrabold uppercase tracking-wide text-white drop-shadow-lg leading-tight">
          2026: Our Year of{" "}
          <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Divine Mandate
          </span>
        </h1>

        <div className="mt-8 h-px w-24 bg-gradient-to-r from-amber-400 to-red-500" />

        <h2 className="mt-8 font-sans text-lg sm:text-2xl font-bold uppercase tracking-widest text-gray-100">
          Firebrand International Gospel Missions
        </h2>
        <p className="mt-2 font-serif text-xl sm:text-2xl italic text-amber-300">
          Reaching the World with His Fire!
        </p>
      </div>
    </section>
  );
}