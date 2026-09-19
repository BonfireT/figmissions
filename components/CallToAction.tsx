export default function CallToAction() {
  return (
    <>
      {/* Tagline strip */}
      <section className="bg-white px-6 pt-10 pb-8">
        <p className="text-center text-base sm:text-lg font-bold text-gray-900">
          Crusades, Church planting, Ministers conferences, Children&apos;s
          outreaches etc
        </p>
        <div className="mx-auto mt-8 max-w-5xl border-t border-gray-200" />
      </section>

      {/* Are You Ready */}
      <section className="bg-[#ece7e0] px-6 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-gray-900 mb-8">
          Are You Ready?
        </h2>

        <p className="max-w-3xl mx-auto text-sm sm:text-base font-semibold text-gray-800 mb-8">
          &quot;Also I heard the voice of the Lord, saying, Whom shall I
          send, and who will go for us? Then said I, Here am I; send me.&quot;
          Isaiah 6:8
        </p>

        <p className="max-w-md mx-auto text-sm sm:text-base font-semibold text-gray-800 leading-relaxed mb-10">
          &quot;Go therefore and make disciples of all nations, baptizing
          them in the name of the Father and of the Son and of the Holy
          Spirit.&quot;
          <br />
          Matthew 28:19
        </p>

        
          <a href="/word-of-wisdom"
          className="inline-block border border-gray-500 px-6 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors"
        >
          Word of Wisdom
        </a>
      </section>
    </>
  );
}