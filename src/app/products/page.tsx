"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ProductPage() {
  return (
    <div className="flex bg-[#131313] min-h-screen flex-col pt-5 px-7 lg:px-20 md:pt-14 md:ml-64 pb-10">
      <p className="font-[100] text-6xl mb-5">awr products</p>
      <span className="line inline-block w-[140px] h-[2px] bg-[#d3d3d3] mt-0 mb-8"></span>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="card w-full md:w-96 bg-black font-light shadow-xl"
      >
        <figure>
          <Image
            src="https://res.cloudinary.com/dm03cwhat/image/upload/v1700233973/risoles-banner_kpjpvf.jpg"
            alt="Shoes"
            width={400}
            height={400}
            className="w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-light">Risoles Omah Gembul</h2>
          <p className="text-sm pb-4">
            Crispy outer layer, lusciously soft with a burst of cheesy goodness
            inside. Indulge in our homemade cheese-filled risoles for the
            perfect hunger fix! Order now to experience the delightful burst of
            flavors and the irresistible melt-in-your-mouth filling!
          </p>
          <div className="card-actions justify-end">
            <Link
              href="https://www.instagram.com/risoles.omahgembul/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
            >
              <button className="btn font-light lowercase ">Order Now</button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
