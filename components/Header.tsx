"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavChild = { label: string; href: string; external?: boolean };
type NavItem = { label: string; href?: string; children?: NavChild[] };

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "Our President", href: "/our-president" },
      { label: "What We Believe", href: "/what-we-believe" },
      { label: "Know Jesus", href: "/know-jesus" },
    ],
  },
  {
    label: "Missions",
    children: [
      { label: "Contact Us", href: "/contact-us" },
      { label: "Our Ministry Sites", href: "https://www.tolichurches.org", external: true },
    ],
  },
  {
    label: "Our Work",
    href: "/our-work",
    children: [
      { label: "The Real Men Conference", href: "/real-men-conference" },
    ],
  },
];

const dropdownLinkClass =
  "block px-4 py-2 text-sm text-gray-200 hover:text-orange-400 transition-colors";

const navLinkClass =
  "relative pb-1 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-amber-400 after:to-red-500 after:transition-all hover:after:w-full";

function ChildLink({
  child,
  className,
}: {
  child: NavChild;
  className: string;
}) {
  if (child.external) {
    return (
      
        <a href={child.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {child.label}
      </a>
    );
  }
  return (
    <Link href={child.href} className={className}>
      {child.label}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const pathname = usePathname();

  // Close the mobile menu after navigating to a new page.
  useEffect(() => {
    setOpen(false);
    setOpenSub(null);
  }, [pathname]);

  // Stop the page behind the open menu from scrolling.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[#0d0705] shadow-lg">
      {/* Top utility bar */}
      <div className="bg-gradient-to-r from-red-900 via-orange-800 to-red-900 px-6 py-1.5 text-center">
        <p className="text-[11px] uppercase tracking-widest text-amber-100 sm:text-xs">
          Reaching the World with His Fire!
        </p>
      </div>

      {/* Main nav */}
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6"
      >
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Firebrand International Gospel Missions Logo"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0"
            priority
          />
          <span className="font-sans text-sm font-extrabold uppercase leading-tight tracking-wide sm:text-lg">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Firebrand
            </span>{" "}
            <span className="text-gray-100">International Gospel Missions</span>
          </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 text-sm font-bold uppercase tracking-wide text-gray-100 md:flex">
          {NAV.map((item) => (
            <li key={item.label} className="group relative">
              {item.href ? (
                <Link href={item.href} className={navLinkClass}>
                  {item.label}
                </Link>
              ) : (
                <button type="button" className={`cursor-pointer ${navLinkClass}`}>
                  {item.label}
                </button>
              )}

              {item.children && (
                <ul className="absolute left-0 top-full z-20 hidden w-56 flex-col border-t-2 border-orange-500 bg-[#150c08] py-2 normal-case shadow-xl group-focus-within:flex group-hover:flex">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <ChildLink child={child} className={dropdownLinkClass} />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger button (phones) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-md hover:bg-white/10 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-orange-400 transition ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-orange-400 transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-orange-400 transition ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100vh-7rem)] overflow-y-auto border-t-2 border-orange-500 bg-[#150c08] md:hidden"
        >
          <ul className="px-4 py-2 text-gray-100">
            {NAV.map((item) => (
              <li
                key={item.label}
                className="border-b border-white/10 last:border-0"
              >
                <div className="flex items-center justify-between">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex-1 py-4 text-lg font-bold uppercase tracking-wide"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenSub(openSub === item.label ? null : item.label)
                      }
                      className="flex-1 py-4 text-left text-lg font-bold uppercase tracking-wide"
                    >
                      {item.label}
                    </button>
                  )}

                  {item.children && (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenSub(openSub === item.label ? null : item.label)
                      }
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={openSub === item.label}
                      className="px-3 py-4 text-orange-400"
                    >
                      <span
                        aria-hidden
                        className={`inline-block text-sm transition-transform ${
                          openSub === item.label ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                  )}
                </div>

                {item.children && openSub === item.label && (
                  <ul className="pb-3 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <ChildLink
                          child={child}
                          className="block py-3 text-base text-gray-200 hover:text-orange-400"
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}