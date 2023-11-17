"use client"
import Link from "next/link"
import Image from "next/image"
import { useAppSelector } from "@/redux/store"
import { motion } from "framer-motion"

export default function NavBar() {
  const username = useAppSelector((state) => state.authReducer.value.username)
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)
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
        {isAuth && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="flex items-center text-xs font-light">
              Heiiiya,{" "}
              <span className="text-[#87c0cd] text-xl ml-2 capitalize">
                {username}
              </span>
            </h3>
          </motion.div>
        )}
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className="pl-2 hover:bg-black">
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
              <ul className="p-2 bg-base-100 top-6 right-0">
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/inbox">Inbox</Link>
                </li>
                <li>
                  <Link href="/auth/login">Login</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}
