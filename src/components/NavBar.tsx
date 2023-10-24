import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

export default function NavBar() {
  return (
    <div className="navbar bg-base-300 text-base-content">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-lg">
          Home
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <details>
              <summary>Others</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Skills</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </div>
  )
}
