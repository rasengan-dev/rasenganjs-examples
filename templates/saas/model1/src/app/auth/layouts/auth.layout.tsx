import React from "react";
import { Outlet, LayoutComponent } from "rasengan";

const AuthLayout: LayoutComponent = () => {
	return (
		<React.Fragment>
			<Outlet />
		</React.Fragment>
	);
};

AuthLayout.path = "/auth";

export default AuthLayout;
