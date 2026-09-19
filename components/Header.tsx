export default function Header() {
  const dropdownLinkClass =
    "block px-4 py-2 text-sm text-gray-200 hover:text-orange-400 transition-colors";

  const navLinkClass =
    "relative pb-1 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-amber-400 after:to-red-500 after:transition-all hover:after:w-full";

  return (
    <header className="sticky top-0 z-50 bg-[#0d0705] shadow-lg">
      {/* Top utility bar */}
      <div className="bg-gradient-to-r from-red-900 via-orange-800 to-red-900 text-center py-1.5 px-6">
        <p className="text-[11px] sm:text-xs tracking-widest uppercase text-amber-100">
          Reaching the World with His Fire!
        </p>
      </div>

      {/* Main nav */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Firebrand International Gospel Missions Logo"
            className="h-10 w-10"
          />
          <span className="font-sans text-base sm:text-lg font-extrabold uppercase tracking-wide">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Firebrand
            </span>{" "}
            <span className="text-gray-100">International Gospel Missions</span>
          </span>
        </a>

        <ul className="flex items-center gap-8 text-xs sm:text-sm font-bold uppercase tracking-wide text-gray-100">
          <li>
            <a href="/" className={navLinkClass}>
              Home
            </a>
          </li>

          <li className="group relative">
            <button className={`cursor-pointer ${navLinkClass}`}>About</button>
            <ul className="absolute left-0 top-full z-20 hidden w-56 flex-col border-t-2 border-orange-500 bg-[#150c08] py-2 shadow-xl group-hover:flex">
              <li><a href="/about-us" className={dropdownLinkClass}>About Us</a></li>
              <li><a href="/our-president" className={dropdownLinkClass}>Our President</a></li>
              <li><a href="/what-we-believe" className={dropdownLinkClass}>What We Believe</a></li>
              <li><a href="/know-jesus" className={dropdownLinkClass}>Know Jesus</a></li>
            </ul>
          </li>

          <li className="group relative">
            <button className={`cursor-pointer ${navLinkClass}`}>Missions</button>
            <ul className="absolute left-0 top-full z-20 hidden w-56 flex-col border-t-2 border-orange-500 bg-[#150c08] py-2 shadow-xl group-hover:flex">
              <li><a href="/contact-us" className={dropdownLinkClass}>Contact Us</a></li>
              <li>
                
                  <a href="https://www.tolichurches.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={dropdownLinkClass}
                >
                  Our Ministry Sites
                </a>
              </li>
            </ul>
          </li>

          <li className="group relative">
            <a href="/our-work" className={navLinkClass}>Our Work</a>
            <ul className="absolute left-0 top-full z-20 hidden w-56 flex-col border-t-2 border-orange-500 bg-[#150c08] py-2 shadow-xl group-hover:flex">
              <li><a href="/real-men-conference" className={dropdownLinkClass}>The Real Men Conference</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}