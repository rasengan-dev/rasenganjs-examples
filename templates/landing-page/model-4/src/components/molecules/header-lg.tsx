import Image from "@rasenganjs/image";
import { Link } from "rasengan";

export function HeaderLg() {
  return (
    <header className="flex px-3 lg:px-32 h-16 items-center justify-between">
      <Link className="flex items-center gap-2" to="" target="_blank">
        <Image src="/public/logo.png" alt="logo" width={40} height={40} />
        <span className="font-bold">Enver</span>
      </Link>
    <nav className="w-[75%] flex justify-between items-center">
      <ul className="flex flex-row gap-12 text-lg">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Our projects</a></li>
        <li><a href="#">About us</a></li>
      </ul>
      <button className="relative text-lg h-11 group overflow-hidden w-40 flex items-center justify-center border-[1px] border-white rounded-md">
        <span
          className="absolute inset-0 duration-150 ease-in-out origin-left bg-white scale-x-0 group-hover:scale-x-100" 
        />
        <span className="relative group-hover:text-black duration-150">
          Contact Us
        </span>
      </button>
    </nav>
    </header>
  )
}