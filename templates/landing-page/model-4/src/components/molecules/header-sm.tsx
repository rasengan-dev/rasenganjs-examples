import Image from "@rasenganjs/image";
import { Link } from "rasengan";
import { AnimationEvent, useState } from "react";

export function HeaderSm() {
  const [showNav, setShowNav] = useState(false);
  const [displayInDom, setDisplayInDom] = useState(false)

  function handleAnimationEnd(e: AnimationEvent) {
    if(e.animationName == 'moveIn') return ;

    setDisplayInDom(false)
  }

  return (
    <>
      <header className="flex px-3 h-16 items-center justify-between">
        <Link className="flex items-center gap-2" to="" target="_blank">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <span className="font-bold">Enver</span>
        </Link>
        <div 
          onClick={() => {
            setDisplayInDom(true)
            setShowNav(true)
          }} 
          className="md:hidden flex flex-col items-end gap-1"
        >
          <div className="w-8 h-[2px] rounded-3xl bg-white"></div>
          <div className="w-6 h-[2px] rounded-3xl bg-white"></div>
          <div className="w-4 h-[2px] rounded-3xl bg-white"></div>
        </div>
      </header>
      {
        displayInDom && (
          <>
            <div
              className={`fixed inset-0 z-50 bg-black/30 ${showNav ? 'fade-in' : 'fade-out'}`} 
            />
            <nav
              onAnimationEnd={handleAnimationEnd} 
              className={`
                fixed z-50 top-0 bottom-0 right-0 w-3/5 bg-white p-10 flex flex-col gap-6
                ${showNav ? 'move-in' : 'move-out'}
              `}
            >
              <ul className="flex flex-col gap-6 text-lg text-black">
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Our projects</a></li>
                <li><a href="#">About us</a></li>
              </ul>
              <button className="text-lg text-black h-11 w-40 flex items-center justify-center border-[1px] border-black rounded-md">
                Contact Us
              </button>
              <div 
                onClick={() => setShowNav(false)}
                className="md:hidden absolute right-5 cursor-pointer top-10 flex flex-col gap-2"
              >
                <div className="w-6 h-[2px] absolute right-0 rounded-3xl rotate-45 bg-black"></div>
                <div className="w-6 h-[2px] absolute right-0 rounded-3xl -rotate-45 bg-black"></div>
              </div>
            </nav>
          </>
        )
      }
    </>
  )
}