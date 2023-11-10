"use client"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#101010] items-center px-7 lg:px-20 pt-[100px]">
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
      <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 gap-4 mb-4">
        <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 gap-4 mb-4">
          <motion.div
            initial={{ opacity: 0, x: -110 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 0.95 }}
            className="card bg-black shadow-none shadow-slate-100"
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title text-4xl font-light">20+</h2>
              <p className="font-light text-sm">Completed Projects</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 110 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="card bg-black shadow-none shadow-slate-100"
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title text-4xl font-light">
                Webflow <br />
                Expert
              </h2>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 110 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="card bg-black shadow-none shadow-slate-100"
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title text-4xl font-light">20+</h2>
              <p className="font-light text-sm">Satisfied Clients</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 110 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="card bg-black shadow-none shadow-slate-100"
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title text-4xl font-light">
                4 <span className="text-sm">Years</span>
              </h2>
              <p className="font-light text-sm">Frontend Experience</p>
            </div>
          </motion.div>
        </div>
        <div className="w-full grid lg:grid-cols-1 md:grid-cols-1 gap-4 mb-4">
          <motion.div
            initial={{ opacity: 0, x: 110 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="card bg-black shadow-none shadow-slate-100"
          >
            <div className="card-body">
              <h3 className="text-4xl font-light">as a nextjs developer</h3>
              <p className="font-light">
                Welcome to the world of Next.js development, where innovation
                meets seamless user experiences! As a Next.js developer,
                you&rsquo;re about to embark on a journey of building
                blazing-fast, server-rendered React applications. Let&rsquo;s
                dive into the exciting realm of frontend development, where your
                skills will shape the future of web applications.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
