import React from 'react';
import { Outlet, LayoutComponent } from 'rasengan';
import Main from '../components/Main';

const AuthLayout: LayoutComponent = () => {
  return (
    <React.Fragment>
      <Main>
        <Outlet />
      </Main>
    </React.Fragment>
  );
};

AuthLayout.path = '/auth';

export default AuthLayout;
