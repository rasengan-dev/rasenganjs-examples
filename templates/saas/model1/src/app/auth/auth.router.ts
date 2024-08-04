import { RouterComponent, defineRouter } from 'rasengan';
import AuthLayout from './layouts/auth.layout';
import SignIn from './pages/signin.page';
import SignUp from './pages/signup.page';

class AuthRouter extends RouterComponent {}

export default defineRouter({
  layout: AuthLayout,
  pages: [SignIn, SignUp],
})(AuthRouter);
