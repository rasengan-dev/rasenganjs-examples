import { useState } from 'react';
import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import Input from '@/components/atoms/Input';
import Image from '@rasenganjs/image';
import {
  CirclePasswordIcon,
  Mail01Icon,
  UserIcon,
  ViewOffIcon,
  ViewIcon,
  ArrowLeft04Icon,
} from 'hugeicons-react';
import { Link, PageComponent } from 'rasengan';

//import image
import signup from '@/assets/signup.png';
import { useTheme } from '@rasenganjs/theme';

const SignUp: PageComponent = () => {
  const { isDark } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`md:flex flex justify-center items-center shadow-xl w-full h-screen min-h-[700px] overflow-hidden ${
        isDark
          ? 'bg-rasengan-dark-background text-rasengan-dark-text'
          : 'bg-rasengan-light-background text-rasengan-light-text'
      }}`}
    >
      <div className="hidden md:flex w-max h-screen md:w-1/2 py-10 px-10 items-center justify-center">
        <Image
          src={signup}
          alt="signup image"
          className="h-screen"
          width={'100%'}
        />
      </div>
      <div className="w-max md:w-1/2 py-10 px-5 md:px-10">
        <div className="text-right mb-8">
          <Link to="/">
            <Button
              text="Back to Home"
              className={`bg-transparent flex items-center w-auto gap-2 ml-auto ${
                isDark ? 'text-rasengan-dark-text' : 'text-gray-600'
              }`}
            >
              <ArrowLeft04Icon size={18} color={'var(--rasengan-light-text)'} />
            </Button>
          </Link>
        </div>

        <div className="text-center mb-10">
          <h1
            className={`font-bold text-3xl text-gray-900 ${
              isDark
                ? 'text-rasengan-dark-text/100'
                : 'text-rasengan-light-text'
            }`}
          >
            Sign Up
          </h1>
          <p
            className={`${
              isDark
                ? 'text-rasengan-dark-text/100'
                : 'text-rasengan-light-text/200'
            }`}
          >
            Enter your information to sign up
          </p>
        </div>
        <div>
          <div className="flex flex-wrap -mx-3">
            <Input
              label="First Name"
              icon={<UserIcon size={20} className="text-gray-400 text-lg" />}
              type="text"
              placeholder="John"
              containerClassName="md:w-1/2"
            />
            <Input
              label="Last Name"
              icon={<UserIcon size={20} className="text-gray-400 text-lg" />}
              type="text"
              placeholder="Doe"
              containerClassName="md:w-1/2"
            />
          </div>
          <div className="flex flex-wrap -mx-3">
            <Input
              label="Email"
              icon={<Mail01Icon size={20} className="text-gray-400 text-lg" />}
              type="email"
              placeholder="johndoe@example.com"
            />
          </div>
          <div className="flex flex-wrap -mx-3 relative">
            <Input
              label="Password"
              icon={
                <CirclePasswordIcon
                  size={20}
                  className="text-gray-400 text-lg"
                />
              }
              rightIcon={
                showPassword ? (
                  <ViewIcon
                    size={20}
                    className="text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <ViewOffIcon
                    size={20}
                    className="text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )
              }
              type={showPassword ? 'text' : 'password'}
              placeholder="************"
            />
          </div>
          <div className="flex flex-wrap -mx-3">
            <Button
              text="Sign Up"
              className="block w-full max-w-xs mx-auto bg-rasengan-light-primary hover:bg-rasengan-dark-primary focus:bg-rasengan-light-primary text-white rounded-lg px-3 py-3 font-semibold"
            />
          </div>
          <div className="flex text-center mt-2 h-4 items-center justify-center">
            <Typography
              text="Already have an account?"
              className={`px-1 ${
                isDark ? 'text-rasengan-dark-text' : 'text-gray-600'
              }`}
            />
            <Link to="/auth/sign-in" className="text-[#2a7fff] hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
SignUp.path = '/sign-up';
SignUp.metadata = {
  title: 'Sign Up',
  description: 'Sign Up Page',
};

export default SignUp;
