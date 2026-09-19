export default function StudyTools() {
  return (
    <section className="bg-white px-6 py-16">
      <p className="text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-red-700 mb-2">
        Study Tools
      </p>
      <h2 className="text-center text-xl sm:text-2xl font-extrabold text-gray-900 mb-12">
        The Good News
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-3">
        {/* The Good News */}
        
          <a href="/know-jesus"
          className="border border-gray-200 p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow"
        >
          <img
            src="/what-is-the-gospel.jpg"
            alt="What is the Gospel?"
            className="w-full max-w-[220px] h-40 object-cover mb-6"
          />
          <p className="text-sm text-gray-800">The Good News</p>
        </a>

        {/* Gospel Aid */}
        
          <a href="/bridge-to-life.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-200 p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow"
        >
          <img
            src="/notebook.jpg"
            alt="Gospel Aid notebook diagram"
            className="w-full max-w-[220px] h-40 object-cover mb-6"
          />
          <p className="text-sm text-gray-800 mb-2">Gospel Aid</p>
          <p className="text-sm text-gray-600">
            Free download of Bridge to Life
          </p>
        </a>

        {/* YouTube Channel */}
        
          <a href="https://www.youtube.com/@Firebrandgospel"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-200 p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow"
        >
          <img
            src="/congregation-service.jpg"
            alt="Congregation gathered for service"
            className="w-full h-56 object-cover mb-6"
          />
          <p className="text-sm text-gray-800">Our YouTube Channel</p>
        </a>
      </div>
    </section>
  );
}