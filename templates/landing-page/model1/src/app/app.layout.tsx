import React from "react";
import { Outlet, LayoutComponent } from "rasengan";
// import { adaptPath } from "rasengan";

/** @type {import('tailwindcss').Config} */
// export default {
//   content: adaptPath(["./src/**/*.{ts,tsx,js,jsx}"]),
//   theme: {
//     extend: {
//       colors: {
//         primary: "#2A7FFF",
//       },
//       fontFamily: {
//         urbanist: ['Urbanist', 'sans-serif'],
//         comfortaa: ['Comfortaa', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// };


const AppLayout: LayoutComponent = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

AppLayout.path = "/";

export default AppLayout;