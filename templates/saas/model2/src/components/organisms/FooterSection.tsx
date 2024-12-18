import {
  DribbbleIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import { Separator } from "../atom/separator";
import { Link } from "rasengan";
import { useMenuContext } from "@/hooks/guards/useMenuContext";

const FooterSection = () => {
  return (
    <footer
      id="footer"
      className="w-full bg-[#111204] lg:h-[600px] py-8 px-4 sm:p-16 lg:pt-80"
    >
      <div className="text-white md:w-[85%] mx-auto">
        <div className="flex flex-col sm:flex-row w-full sm:justify-between sm:items-center mb-14 gap-6">
          <div className="space-y-5">
            <p className="font-bold text-3xl">
              <span>Kro</span>
              <span className="text-[#B9FD50]">nix</span>
            </p>
            <p className="text-lg max-w-[311px]">
              Kronix - the leading digital agency based in the UK, working with
              top-tier clients, from start-ups to enterprises.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-6 hover:text-[#B9FD50]">
              <MailIcon className="size-6" />
              <span>info@kronix.com</span>
            </div>
            <div className="flex items-center gap-6 hover:text-[#B9FD50]">
              <PhoneIcon className="size-6" />
              <span>(001) 1231 3435</span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/facebook">
                <span className="sr-only">facebook</span>
                <FacebookIcon className="size-6 text-white hover:text-[#B9FD50]" />
              </Link>
              <Link to="/instagram">
                <span className="sr-only">instagram</span>
                <InstagramIcon className="size-6 text-white hover:text-[#B9FD50]" />
              </Link>
              <Link to="/linkedin">
                <span className="sr-only">linkedin</span>
                <LinkedinIcon className="size-6 text-white hover:text-[#B9FD50]" />
              </Link>
              <Link to="/dribbble">
                <span className="sr-only">dribbble</span>
                <DribbbleIcon className="size-6 text-white hover:text-[#B9FD50]" />
              </Link>
            </div>
          </div>
        </div>

        <Separator className="bg-[#404040]" />

        <div className="flex flex-wrap gap-4 w-full justify-center sm:justify-between items-center mt-3 sm:mt-7">
          <div>
            <FooterNav />
          </div>
          <div>
            <span>© 2024 Fenyep Wangue - All Right Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

const FooterNav = () => {
  const { navlinks } = useMenuContext();

  return (
    <ul className="flex flex-wrap items-center gap-8">
      {navlinks.map((elmt, index) => (
        <li key={index + elmt.label} className="hover:text-[#B9FD50]">
          <Link to={elmt.href}>{elmt.label}</Link>
        </li>
      ))}
    </ul>
  );
};
