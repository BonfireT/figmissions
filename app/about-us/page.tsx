export const metadata = {
  title: "About Us - Firebrand International Gospel Missions",
  description:
    "Learn about Firebrand International Gospel Missions (FIGM) - our name, our history, and our core functions.",
};

const coreFunctions = [
  {
    title: "Evangelism",
    body: "We stress that the number one motivation in our Christian life is to reach the globe with the Gospel of Jesus Christ.",
  },
  {
    title: "Discipleship and Church Planting",
    body: "Cross cultural missions and church planting is at the heart of F.I.G.M's ministry. Leaders are discipled, trained and sent out. Then a chain reaction begins amongst their own people that reaches across their nation and out to the world. We practice multiplication via discipleship.",
  },
  {
    title: "Revival, Healing, Signs and Wonders",
    body: "Our passion and mandate includes turning the hearts of the people back to God. We hold revival meetings all over the globe.",
  },
  {
    title: "Community Development",
    body: "We seek to minister to the whole person no matter their economic status. Our desire is that the poor experience economic, physical, social and most importantly spiritual transformation.",
  },
  {
    title: "Ministerial Training",
    body: "We hold schools of evangelism, schools of leadership and Pastor's training to build up people who are called into the five-fold ministry. Most Firebrand International Gospel missionaries seek to teach others via life and words.",
  },
];

export default function AboutUsPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-red-700">
          Join Us
        </p>
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Apostle John &amp; Rev Stella Ebegbuna
        </h1>

        <div className="flex justify-center mb-10">
          <img
            src="/dsc-2435.jpg"
            alt="Apostle John and Rev Stella Ebegbuna"
            className="w-full max-w-md object-cover rounded-md"
          />
        </div>

        <div className="text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Our Name</h2>
          <p className="mb-4">
            The name Firebrand International Gospel Missions comes from
            Zechariah 3:2, &quot;Is not this a brand plucked out of the
            fire?&quot; This confirms the call to rescue those who are
            heading for the fire, plucking them out and bringing them into
            the Kingdom of God.
          </p>

          <img
            src="/fire_orig.jpg"
            alt="Fire"
            className="float-left mr-6 mb-4 w-full max-w-[220px] object-cover"
          />

          <p className="mb-4">
            <strong className="text-red-700">International:</strong> The
            mandate of Jesus is to preach the gospel to every creature, and
            we are convinced that we are to go where the unsaved people are
            (Matthew 26:19, Acts 1:8). Firebrand International Gospel
            Missions (F.I.G.M) is fully committed to seeking, training and
            releasing laborers into every village, town, city and nation for
            the work of the Kingdom of God.
          </p>
          <p className="mb-4">
            The harvest truly is ripe and the laborers are ever so few.
            Nations are opening up for the gospel and Africa has now become a
            sending continent. Europe, America, Asia, and beyond are now
            waiting for God&apos;s firebrands from Africa to arise and shine.
          </p>

          <div className="clear-both" />

          <p className="mb-8">
            <strong className="text-red-700">Gospel Missions:</strong> we aim
            at reaching the whole globe with the gospel, initiating
            charismatic, word-based church planting movements around the
            world. Our basic building block for church planting must be
            evangelism, which unfolds into a church that is ingeniously led,
            culture transforming and reproducing. Our prayerful desire is for
            a release of laborers into the field with a heart to see cities
            and societies changed through the gospel of Jesus Christ and the
            power of the Holy Spirit.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Our History
          </h2>

          <img
            src="/classroom_orig.jpg"
            alt="Bible college classroom"
            className="float-right ml-6 mb-4 w-full max-w-[220px] object-cover"
          />

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
          <p className="mb-4">
            After receiving this mandate, Apostle John Ebegbuna submitted the
            vision to the pastor of the church where he was raised and
            enrolled in a Bible College. Two years later, after being
            released to go and do the work, he moved into the field by
            faith, holding evangelistic crusades and preaching in churches,
            buses, villages, and along the highways and byways.
          </p>

          <div className="clear-both" />

          <p className="mb-8">
            He met his wife, Rev Stella Ebegbuna, a fiery soul winner and
            church planter, in 1992, and they married in 1994 and began
            using their gifts together. Since then, Firebrand International
            Gospel Missions (FIGM) has been trusting their sickle to
            different nations and continents, and now has evangelists and
            missionaries under this umbrella doing exploits for Jesus.
          </p>

          <div className="flex justify-center gap-4 flex-wrap mb-10">
            <img
              src="/20220922-165552_orig.jpg"
              alt="Ministry work"
              className="w-full max-w-[260px] object-cover rounded-md"
            />
            <img
              src="/img-1106_orig.jpg"
              alt="Ministry work"
              className="w-full max-w-[260px] object-cover rounded-md"
            />
          </div>

          <div className="pt-8 border-t border-gray-200 space-y-8">
            <h2 className="text-xl font-bold text-gray-900">
              Core Functions of Firebrand International Gospel Missions
              (FIGM)
            </h2>
            {coreFunctions.map((fn) => (
              <div key={fn.title}>
                <h3 className="text-lg font-semibold text-red-700 mb-2">
                  {fn.title}
                </h3>
                <p>{fn.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}