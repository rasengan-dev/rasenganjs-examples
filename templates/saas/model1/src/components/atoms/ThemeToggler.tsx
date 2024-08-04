import { useTheme, ThemesType } from '@rasenganjs/theme';
import { Sun03Icon, Moon02Icon, ComputerIcon } from 'hugeicons-react';
import { useState } from 'react';
import Typography from './Typography';

const themes: { label: ThemesType; icon: JSX.Element }[] = [
  {
    label: 'light',
    icon: <Sun03Icon size={18} color={'#555'} />,
  },
  {
    label: 'dark',
    icon: <Moon02Icon size={18} color={'#555'} />,
  },
  {
    label: 'system',
    icon: <ComputerIcon size={18} color={'#555'} />,
  },
];

export default function ThemeToggler() {
  const { theme, setTheme, isDark } = useTheme();
  const [open, setOpen] = useState(false);

  const handleTheme = (theme: ThemesType) => {
    setTheme(theme);
    setOpen(false);
  };

  const getThemeIcon = (theme: ThemesType) => {
    switch (theme) {
      case 'light':
        return <Sun03Icon size={18} color={'#555'} />;
      case 'dark':
        return <Moon02Icon size={18} color={'#555'} />;
      case 'system':
        return <ComputerIcon size={18} color={'#555'} />;

      default:
        break;
    }
  };

  return (
    <div className="relative mx-4 px-4 lg:border-l-2 border-gray-300">
      <div onClick={() => setOpen((prev) => !prev)} className="cursor-pointer">
        {getThemeIcon(theme)}
      </div>
      <div
        className={`absolute ${
          !open ? 'hidden' : 'animate-slide-in'
        } top-8 left-1/2 -translate-x-1/2 mt-2 py-2 px-0 rounded-lg border-[1px] transition-all ${
          isDark
            ? 'text-rasengan-dark-text bg-rasenngan-dark-background border-rasengan-dark-border'
            : 'text-rasengan-light-text bg-rasenngan-light-background border-rasengan-light-border shadow-md'
        }`}
      >
        {themes.map((theme, index) => (
          <div
            key={index}
            className={`flex items-center my-1 cursor-pointer gap-3 px-4 transition-all duration-300 ${
              isDark ? 'hover:bg-[#222]' : 'hover:bg-gray-200'
            }`}
            onClick={() => handleTheme(theme.label)}
          >
            {theme.icon}
            <Typography text={theme.label} className="mx-1" />
          </div>
        ))}
      </div>
    </div>
  );
}
