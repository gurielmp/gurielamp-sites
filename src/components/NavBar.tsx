import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import Image from "next/image"

export default function NavBar() {
  return (
    <div className="navbar px-3 lg:px-[65px] bg-[#000] text-base-content fixed top-0 left-0 right-0">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-lg">
          <span>
            <Image src={"/g.png"} width={40} height={40} alt="Guriel"></Image>
          </span>
          uriel
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
                  <a>Porfolio</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}
