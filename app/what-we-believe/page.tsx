export const metadata = {
  title: "What We Believe - Firebrand International Gospel Missions",
  description: "The statement of faith of Firebrand International Gospel Missions.",
};

const beliefs = [
  "The Bible is the inspired and only infallible and authoritative Word of God.",
  "There is one true God, eternally existent in three persons: God the Father, God the Son, and God the Holy Spirit.",
  "In the deity of our Lord Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His vicarious and atoning death, in His bodily resurrection, in His ascension to the right hand of the Father, in His personal, future return to the earth in power and glory to rule for a thousand years.",
  "In the blessed hope, the soon return of Christ to receive His bride at His coming.",
  "In the fall and sinfulness of man, and that the only means of being cleansed from sin is through repentance and faith in the precious blood of Christ.",
  "Regeneration by the Holy Spirit is absolutely essential to personal salvation.",
  "In Divine Healing of the human body provided through the redemptive work of Christ on the Cross, in answer to believing prayer.",
  "The Baptism of the Holy Spirit is given to believers who ask for it, with all the evidence manifested in the book of Acts.",
  "The Ministry of Jesus Christ is the universal, spiritual body of believers from every tribe, tongue, kindred and race of peoples, indwelt by God through the Holy Spirit and divinely empowered to fulfill the Great Commission on earth.",
  "In the sanctifying power of the Holy Spirit, by whose indwelling the Christian is enabled to live a holy life.",
  "Marriage was ordained by God and intended to be one man and one woman for a lifetime. All sexual activity or thoughts outside of marriage is sinful.",
  "God created humans in two genders: male and female. God intended all humans to function in the gender assigned to them upon creation within the womb.",
  "In the resurrection and final judgment of both the saved and the lost, the first to everlasting life and the second to everlasting damnation.",
  "In the new heavens and the new earth and the Holy Jerusalem, the city of God, descending out of heaven and filled with God's glory.",
];

export default function WhatWeBelievePage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-red-700">
          Reaching all for Christ
        </p>
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          What We Believe
        </h1>

        <div className="flex justify-center mb-10">
          <img
            src="/what-we-believe_orig.jpg"
            alt="What We Believe"
            className="w-full max-w-md object-cover rounded-md"
          />
        </div>

        <ul className="text-sm sm:text-base leading-relaxed space-y-4">
          {beliefs.map((belief, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1 text-red-700">&#8226;</span>
              <span>{belief}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}