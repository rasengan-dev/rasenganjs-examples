import Image from "@rasenganjs/image";
import { Link } from "rasengan";
import { useState } from "react";

export function Header() {
  const [menuIsOpened, setMenuIsOpened] = useState(false)
  const toggleMenu = () => setMenuIsOpened(!menuIsOpened)

  return (
    <header className="flex px-3 lg:px-32 h-16 items-center justify-between">
      <Link className="flex items-center gap-2" to="" target="_blank">
        <Image src="/public/logo.png" alt="logo" width={40} height={40} />
        <span className="font-bold">Enver</span>
      </Link>
    <nav 
      className={`
        fixed z-10 bg-white text-black md:text-inherit h-dvh md:bg-transparent md:h-auto top-0 left-0 w-full md:w-[75%] md:static flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between p-10 md:p-0 md:items-center
        ${menuIsOpened ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} transition-transform
      `}
    >
      <ul className="flex flex-col md:flex-row gap-12 text-lg">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Our projects</a></li>
        <li><a href="#">About us</a></li>
      </ul>
      <button className="text-lg h-11 w-40 flex items-center justify-center border-[1px] border-black md:border-white rounded-md">
        Contact Us
      </button>
      <div onClick={toggleMenu} className="md:hidden absolute right-5 top-10 flex flex-col gap-2">
        <div className="w-9 h-1 rounded-3xl rotate-45 bg-black"></div>
        <div className="w-9 h-1 rounded-3xl -translate-y-3 -rotate-45 bg-black"></div>
      </div>
    </nav>
    <div onClick={toggleMenu} className="md:hidden flex flex-col items-end gap-1">
      <div className="w-8 h-1 rounded-3xl bg-white"></div>
      <div className="w-6 h-1 rounded-3xl bg-white"></div>
      <div className="w-4 h-1 rounded-3xl bg-white"></div>
    </div>
  </header>
  )
}