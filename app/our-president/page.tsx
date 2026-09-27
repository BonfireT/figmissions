export const metadata = {
  title: "Our History - Firebrand International Gospel Missions",
  description:
    "Meet Apostle John Ebegbuna, founding President of Firebrand International Gospel Missions.",
};

const highlights = [
  "Evangelism and Rural Missions",
  "Discipleship and Church Planting",
  "Real Men Conferences",
];

export default function OurPresidentPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h1 className="mb-1 text-3xl font-bold text-gray-900">
          Apostle John Ebegbuna
        </h1>
        <p className="mb-8 text-sm font-bold uppercase tracking-widest text-red-700">
          (Our Founding President)
        </p>

        <div className="flex justify-center mb-8">
          <img
            src="/98a02b78-2f6c-482e-92d7-275858b0936d_orig.jpeg"
            alt="Apostle John Ebegbuna"
            className="w-full max-w-md object-cover rounded-md"
          />
        </div>

        <blockquote className="mb-8 border-l-4 border-red-700 pl-4 italic text-gray-700">
          &quot;And this Gospel of the kingdom will be preached in the whole
          world as a testimony to all nations, and then the end will
          come.&quot;
          <span className="mt-1 block text-sm not-italic text-gray-500">
            Matthew 24:14
          </span>
        </blockquote>

        <div className="text-sm sm:text-base leading-relaxed">
          <img
            src="/picture-021_orig.jpg"
            alt="Apostle John Ebegbuna ministering"
            className="float-left mr-6 mb-4 w-full max-w-[220px] object-cover"
          />

          <p className="mb-4">
            Apostle John Ebegbuna is the President of Firebrand International
            Gospel Missions, an international mission organization. He is
            also the General Overseer of Tree of Life International
            Churches, which he launched in 1994 with a handful of people.
          </p>
          <p className="mb-4">
            In 1991, the founding President of Firebrand International
            Gospel Missions, Apostle John Ebegbuna, had a revelation of a
            blind and dying world. He saw millions of people, both Christians
            and non-Christians, moving on a road that ends in destruction,
            and received a mandate by the Lord to call them back to the
            right way (Matthew 7:13-15, 21-23).
          </p>
          <p className="mb-4">
            In Isaiah 6:8 the voice of the Lord cried out, &quot;Whom shall I
            send, and who will go for us?&quot; Like Isaiah, we at Firebrand
            International Gospel Missions have heard His voice and are
            responding, &quot;Here we are, send us.&quot;
          </p>

          <div className="clear-both" />

          <img
            src="/picture-013_orig.jpg"
            alt="Apostle John Ebegbuna preaching"
            className="float-right ml-6 mb-4 w-full max-w-[220px] object-cover"
          />

          <p className="mb-4">
            After receiving this mandate, Apostle John Ebegbuna submitted the
            vision to the pastor of the church where he was raised and
            enrolled in a Bible College. Two years later, after being
            released to go and do the work, he moved into the field by
            faith, holding evangelistic crusades and preaching in churches,
            buses, villages, and along the highways and byways.
          </p>
          <p className="mb-4">
            He met his wife, Rev Stella Ebegbuna, a fiery soul winner and
            church planter, in 1992, and they married in 1994 and began
            using their gifts together. Since then, Firebrand International
            Gospel Missions (FIGM) has been trusting their sickle to
            different nations and continents, and now has evangelists and
            missionaries under this umbrella doing exploits for Jesus.
          </p>

          <div className="clear-both" />

          <p className="mb-8">
            He has traveled nationally and internationally to hold
            conferences and conduct mission ventures such as church planting
            among different unreached peoples of the earth.
          </p>

          <div className="flex justify-center mb-10">
            <img
              src="/dsc-3661_orig.jpg"
              alt="Apostle John Ebegbuna on a mission trip"
              className="w-full max-w-md object-cover rounded-md"
            />
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Areas of Ministry
        </h2>
        <ul className="grid gap-3 sm:grid-cols-3">
          {highlights.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-center text-sm font-semibold text-gray-800"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}