import Image from "next/image"
export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-black text-[#bebdbd]">
      <aside>
        <span className="p-4">
          <Image src={"/g.png"} width={50} height={50} alt="Guriel"></Image>
        </span>

        <p className="font-light">
          Guriel AMP <br />
          Frontend Developer since 2016
        </p>
        <p className="font-bold">Copyright © 2023 - All right reserved</p>
      </aside>
    </footer>
  )
}
