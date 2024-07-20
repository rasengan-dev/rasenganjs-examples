import Button from '@/components/atoms/Button';
import NavItem from '@/components/atoms/NavItem';
import ThemeToggler from '@/components/atoms/ThemeToggler';
import Typography from '@/components/atoms/Typography';
import { useLocation } from 'rasengan';
import { useState } from 'react';
import { Cancel01Icon, Menu11Icon } from 'hugeicons-react';
import { Link } from 'rasengan';
import { useTheme } from '@rasenganjs/theme';

export default function Navbar() {
  const { pathname } = useLocation();
  const { isDark } = useTheme();
  const [displayMobileNav, setDisplayMobileNav] = useState<boolean>(false);

  const isActive = (path: string) => pathname === path;
  const toogleMobileNav = () => {
    setDisplayMobileNav((prev) => !prev);
  };

  return (
    <header
      className={`w-full  relative z-50 max-w-[1500px] mx-auto px-7  lg:px-40 py-5 lg:py-8 flex items-center justify-between ${isDark ? 'bg-rasengan-dark-background' : 'bg-rasengan-light-background'} `}
    >
      <div
        className={`flex  items-center gap-8 ${isDark ? 'text-rasengan-dark-text' : 'text-rasengan-light-text'}`}
      >
        <Typography
          text="Rasengan"
          weight="bold"
          className="text-2xl lg:text-3xl"
        />

        <nav className={`hidden lg:flex items-center gap-8 ml-10 `}>
          <NavItem text="Home" href="/" isActive={isActive('/')} />
          <NavItem
            text="Pricing"
            href="/pricing"
            isActive={isActive('/pricing')}
          />
          <NavItem
            text="About us"
            href="/about-us"
            isActive={isActive('/about-us')}
          />
          <NavItem
            text="Contact"
            href="/contact"
            isActive={isActive('/contact')}
          />
        </nav>
        {/* Mobile Nabar */}

        <nav
          className={`absolute -z-10 left-0 ${displayMobileNav ? 'top-[100%]' : '-top-[500%] '} flex lg:hidden flex-col w-full md:flex-row justify-between py-7  px-10 md:px-6  md:pt-16  backdrop-sepia-0 bg-gray-200/30 backdrop-blur-md shadow-md  transition-all duration-500 ease-in-out `}
          onClick={() =>
            setTimeout(() => {
              toogleMobileNav();
            }, 500)
          }
        >
          <div className="flex flex-col md:flex-row gap-3">
            <NavItem text="Home" href="/" isActive={isActive('/')} />
            <NavItem
              text="Pricing"
              href="/pricing"
              isActive={isActive('/pricing')}
            />
            <NavItem
              text="About us"
              href="/about-us"
              isActive={isActive('/about-us')}
            />
            <NavItem
              text="Contact"
              href="/contact"
              isActive={isActive('/contact')}
            />{' '}
          </div>
          <div className="flex flex-col md:flex-row items-baseline gap-2 mt-5 md:mt-0 md:">
            <Link to="/auth/sign-in">
              <Button
                text="Log in"
                className={`bg-transparent   border-[1px] border-gray-300 w-[6rem] ${isDark ? 'text-rasengan-dark-text' : 'text-rasengan-light-text'} `}
              />
            </Link>
            <Link to="/auth/sign-up">
              <Button
                text="Sign up"
                className="bg-rasengan-light-primary text-white border border-rasengan-light-primary  w-[6rem] "
              />
            </Link>
          </div>
        </nav>
      </div>

      <div className=" hidden lg:flex items-center gap-1">
        <Link to="/auth/sign-in">
          <Button
            text="Log in"
            className={`bg-transparent w-[6rem] ${isDark ? 'text-rasengan-dark-text' : 'text-rasengan-light-text'} `}
          />
        </Link>
        <Link to="/auth/sign-up">
          <Button
            text="Sign up"
            className="bg-rasengan-light-primary text-white  w-[6rem]"
          />
        </Link>

        <ThemeToggler />
      </div>

      <div className="flex lg:hidden items-center gap-1">
        <ThemeToggler />
        {displayMobileNav ? (
          <Cancel01Icon
            size={18}
            className={`${isDark ? 'text-rasengan-dark-text' : 'text-rasengan-light-text'}`}
            onClick={toogleMobileNav}
          />
        ) : (
          <Menu11Icon
            size={18}
            className={`${isDark ? 'text-rasengan-dark-text' : 'text-rasengan-light-text'}`}
            onClick={toogleMobileNav}
          />
        )}
      </div>
    </header>
  );
}
