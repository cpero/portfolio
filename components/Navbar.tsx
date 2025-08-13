import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100 sticky top-0 z-50 mx-auto shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            aria-label="Open navigation menu"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
            <li>
              <Link href="#experience">Experience</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#resume">Resume</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="#content" className="btn btn-ghost p-0 text-xl lg:px-4">
          Cody Pero
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#resume">Resume</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <ThemeToggle />
        <Link href="#contact" className="btn btn-primary">
          Contact Me
        </Link>
      </div>
    </nav>
  );
}
