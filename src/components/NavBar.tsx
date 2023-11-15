import Link from "next/link"
import Image from "next/image"

export default function NavBar() {
  return (
    <div className="navbar px-3 lg:px-[65px] bg-[#000] text-base-content md:hidden ">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-lg">
          <span>
            <Image src={"/g.png"} width={40} height={40} alt="Guriel"></Image>
          </span>
          uriel
        </Link>
      </div>
      <div className="flex-none z-10">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className="pl-14 hover:bg-black">
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link href="/">Dashboard</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/inbox">Inbox</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}
