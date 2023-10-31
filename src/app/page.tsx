import ThemeToggle from "@/components/ThemeToggle"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#101010] items-center px-20 pt-[110px]">
      <div className="mb-5">
        <h3 className="name text-6xl from-bold lowercase">Guriel AMP</h3>
        <span className="line inline-block w-[120px] h-[5px] bg-[#d3d3d3] mt-4 mb-8"></span>
        <p className="font-[100] text-4xl mb-2">React/NextJs Developer</p>
        <p className="font-light">
          a passionate Next.js developer with a keen eye for building web
          applications that are fast, functional, and user-friendly. I&rsquo;m
          excited to present my portfolio, where you can explore my journey
          through the world of web development and discover the projects that
          reflect my skills and expertise.
        </p>
      </div>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 gap-4 mb-4">
        <div className="card bg-black shadow-none shadow-slate-100">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl font-light">50+</h2>
            <p className="font-light text-sm">Completed Projects</p>
          </div>
        </div>
        <div className="card bg-black shadow-none shadow-slate-100">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl font-light">
              Webflow <br />
              Expert
            </h2>
          </div>
        </div>
        <div className="card bg-black shadow-none shadow-slate-100">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl font-light">40+</h2>
            <p className="font-light text-sm">Satisfied Clients</p>
          </div>
        </div>
        <div className="card bg-black shadow-none shadow-slate-100">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl font-light">
              6 <span className="text-sm">Years</span>
            </h2>
            <p className="font-light text-sm">Frontend Experience</p>
          </div>
        </div>
      </div>
    </main>
  )
}
