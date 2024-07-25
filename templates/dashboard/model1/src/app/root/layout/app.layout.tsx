import React from "react";
import { Outlet, LayoutComponent } from "rasengan";
import SideBar from "../components/SideBar";
import Main from "../components/Main";
import { Toaster } from "@/components/molecules/toast/toaster";

const AppLayout: LayoutComponent = () => {
	return (
		<section className='flex flex-row h-screen w-screen'>
			<SideBar />
			<Main>
				<Outlet />
			</Main>
			<Toaster />
		</section>
	);
};

AppLayout.path = "/";

export default AppLayout;
