import Button from "@/components/atoms/Button";
import NavItem from "@/components/atoms/NavItem";
import Typography from "@/components/atoms/Typography";
import { useLocation } from "rasengan";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname === path;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className="w-full mx-auto px-8 lg:px-[130px] py-8 flex items-center justify-between bg-custom-gradient">
      <div className="flex items-center gap-8">
        <Typography
          text="Biccas"
          weight="bold"
          className="text-4xl text-primary"
        />
      </div>

      {/* hambuger svg */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-primary focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* hambuger svg */}

      <nav className="hidden md:flex  items-center gap-8 ml-10">
        <NavItem text="Home" href="/" isActive={isActive("/")} />
        <NavItem
          text="Products"
          href="#products"
          isActive={isActive("/products")}
        />
        <NavItem text="FAQ" href="#faq" isActive={isActive("/faq")} />
        <NavItem text="Blog" href="#blog" isActive={isActive("/blog")} />
        <NavItem
          text="About Us"
          href="#about-us"
          isActive={isActive("/about-us")}
        />
      </nav>

      <div className="hidden lg:flex items-center gap-2">
        <Button
          text="Log in"
          className="bg-transparent text-foreground text-[#A6A6A6]"
        />
        <Button text="Sign up" className="bg-primary text-primary-foreground" />
      </div>

      {/* mobile menu*/}
      <div
        className={`md:hidden absolute top-0 right-0 w-full bg-white p-5 transform transition-all delay-300 duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-4">
          <button
            onClick={toggleMenu}
            className="text-primary focus:outline-none w-full flex justify-end"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <NavItem text="Home" href="/" isActive={isActive("/")} onClick={toggleMenu} />
          <NavItem
            text="Products"
            href="#products"
            isActive={isActive("/products")}
            onClick={toggleMenu}
          />
          <NavItem text="FAQ" href="#faq" isActive={isActive("/faq")} onClick={toggleMenu} />
          <NavItem text="Blog" href="#blog" isActive={isActive("/blog")} onClick={toggleMenu} />
          <NavItem
            text="About Us"
            href="#about-us"
            isActive={isActive("/about-us")}
            onClick={toggleMenu}
          />
          <div className="flex w-full mt-4">
            <Button
              text="Log in"
              className="w-full bg-transparent text-foreground text-[#A6A6A6] mt-2"
            />
            <Button
              text="Sign up"
              className="p-2 w-full bg-primary text-primary-foreground mt-2"
            />
          </div>
        </nav>
      </div>
      {/* mobile menu*/}
    </header>
  );
}
