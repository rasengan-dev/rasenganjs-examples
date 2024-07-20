import { useState } from "react";
import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import Input from "@/components/atoms/Input";
import Image from "@rasenganjs/image";
import { CirclePasswordIcon, Mail01Icon, ViewOffIcon, ViewIcon, ArrowLeft04Icon } from "hugeicons-react";
import { Link, PageComponent } from "rasengan";

//import image
import login from '@/assets/login.png'
import { useTheme } from "@rasenganjs/theme";

const SignIn: PageComponent = () => {
	const { isDark } = useTheme();
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div
			className={`md:flex flex justify-center items-center shadow-xl w-full h-screen min-h-[600px] overflow-hidden ${
				isDark
					? "bg-rasengan-dark-background text-rasengan-dark-text"
					: "bg-rasengan-light-background text-rasengan-light-text"
			}`}
		>
			<div className='w-max md:w-1/2 py-10 px-5 md:px-10'>
				<div className='text-right mb-4'>
					<Link to='/'>
						<Button
							text='Back to Home'
							className={`bg-transparent flex items-center w-auto gap-2 ${
								isDark ? "text-rasengan-dark-text" : "text-gray-600"
							}`}
						>
							<ArrowLeft04Icon size={18} color={"var(--rasengan-light-text)"} />
						</Button>
					</Link>
				</div>
				<div className='text-center mb-10'>
					<h1 className={`font-bold text-3xl ${
						isDark ? 'text-rasengan-dark-text/100' : 'text-rasengan-light-text'
					}`}>Sign In</h1>
					<p>Enter your information to sign in</p>
				</div>
				<div>
					<div className='flex flex-wrap -mx-3'>
						<Input
							label='Email'
							icon={<Mail01Icon className='text-gray-400 text-lg' />}
							type='email'
							placeholder='john.doe@example.com'
						/>
					</div>
					<div className='flex flex-wrap -mx-3'>
						<Input
							label='Password'
							icon={<CirclePasswordIcon className='text-gray-400 text-lg' />}
							rightIcon={
								showPassword ? (
									<ViewIcon
										className='text-gray-400'
										onClick={() => setShowPassword(!showPassword)}
									/>
								) : (
									<ViewOffIcon
										className='text-gray-400'
										onClick={() => setShowPassword(!showPassword)}
									/>
								)
							}
							type={showPassword ? "text" : "password"}
							placeholder='************'
						/>
						<div className='ml-3 mb-3'>
							<Link
								to='/auth/forgot-password'
								className='text-[#2a7fff] hover:underline'
							>
								Forgot Password?
							</Link>
						</div>
					</div>
					<div className='flex flex-wrap -mx-3'>
						<Button
							text='Sign In'
							className='block w-full max-w-xs mx-auto bg-rasengan-light-primary hover:bg-rasengan-dark-primary focus:bg-rasengan-light-primary text-white rounded-lg px-3 py-3 font-semibold'
						/>
					</div>
					<div className='flex text-center mt-2 h-4 items-center justify-center'>
						<Typography text='Do not have an account?' className='px-1' />
						<Link to='/auth/sign-up' className='text-[#2a7fff] hover:underline'>
							Sign Up
						</Link>
					</div>
				</div>
			</div>
			<div className='hidden md:flex w-max h-screen md:w-1/2 py-10 px-10 items-center justify-center'>
				<Image src={login} alt='signup image' className='h-screen' width={"100%"} />
			</div>
		</div>
	);
};

SignIn.path = "/sign-in";
SignIn.metadata = {
	title: "Sign In",
	description: "Sign In Page",
};

export default SignIn;
