import React from 'react';
import { Outlet, LayoutComponent } from 'rasengan';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import { useTheme } from '@rasenganjs/theme';

const AppLayout: LayoutComponent = () => {
  const { isDark } = useTheme();

  return (
    <section
      className={`${
        isDark
          ? 'bg-rasengan-dark-background text-rasengan-dark-text'
          : 'bg-rasengan-light-background text-rasengan-light-text'
      }`}
    >
      <Navbar />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </section>
  );
};

AppLayout.path = '/';

export default AppLayout;
