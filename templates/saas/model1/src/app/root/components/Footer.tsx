import AppLogo from '@/components/atoms/AppLogo';
import Typography from '@/components/atoms/Typography';
import { useTheme } from '@rasenganjs/theme';

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer
      className={`${isDark ? 'border-rasengan-dark-border bg-rasengan-dark-background text-rasengan-dark-text' : 'border-rasengan-light-border bg-rasengan-light-background text-rasengan-light-text'} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-t-[1px] w-full max-w-[1500px] mx-auto px-10 lg:px-40 py-10`}
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          {/* <Typography text="Rasengan" weight="bold" className="text-2xl" /> */}
          <AppLogo size='small' />
          <Typography text="2024 @ Rasengan" />
          <Typography text="All rights reserved" />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <Typography text="Company" weight="bold" className="text-lg" />

        <div className="flex flex-col gap-2">
          <Typography text="About" />
          <Typography text="Blog" />
          <Typography text="Careers" />
          <Typography text="Contact" />
          <Typography text="Help Center" />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <Typography text="Legal" weight="bold" className="text-lg" />

        <div className="flex flex-col gap-2">
          <Typography text="Cookies Policy" />
          <Typography text="Privacy Policy" />
          <Typography text="Terms of Service" />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <Typography text="Socials" weight="bold" className="text-lg" />

        <div className="flex flex-col gap-2">
          <Typography text="Facebook" />
          <Typography text="Instagram" />
          <Typography text="Twitter" />
          <Typography text="LinkedIn" />
        </div>
      </div>
    </footer>
  );
}
