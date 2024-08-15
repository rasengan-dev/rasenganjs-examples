import { RouterComponent, defineRouter } from 'rasengan';
import AppLayout from '@/app/root/layouts/app.layout';
import AuthRouter from '@/app/auth/auth.router';
import Home from '@/app/root/pages/home.page';
import About from '@/app/root/pages/about.page';
import Contact from '@/app/root/pages/contact.page';
import Pricing from '@/app/root/pages/pricing.page';

class AppRouter extends RouterComponent {}

export default defineRouter({
  imports: [AuthRouter],
  layout: AppLayout,
  pages: [Home, About, Contact, Pricing],
})(AppRouter);
