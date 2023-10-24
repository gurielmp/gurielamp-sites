"use client"
import { useEffect } from "react"
import { themeChange } from "theme-change"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="mb-5">
        <h3 className="name text-[72px] from-bold uppercase mb-[5px]">
          Guriel AMP
        </h3>
        <span className="line inline-block w-[100px] h-[5px] bg-[#333] mb-[30px]"></span>
        <p className="font-[100] text-2xl mb-5">React/NextJs Developer</p>
      </div>
      <Image
        alt="under construction"
        src={"/under-construction.png"}
        width={200}
        height={200}
      ></Image>
    </main>
  )
}
