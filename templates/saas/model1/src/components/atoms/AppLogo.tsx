import Image from "@rasenganjs/image";

import logo1 from '@/assets/logo.svg';
import logo2 from '@/assets/logo-white.svg';
import { useTheme } from "@rasenganjs/theme";
import { useMemo } from "react";

interface AppLogoProps {
  size?: 'large' |'small';
}

export default function AppLogo({ size = 'large' }: AppLogoProps) {
  const { isDark } = useTheme();

  const logo = useMemo(() => {
    return isDark? logo2 : logo1;
  }, [isDark]);

  return (
    <Image 
      src={logo} 
      alt="Rasengan Logo" 
      width={size === 'large' ? 200 : 120} 
      height={"auto"}
    />
  )
}