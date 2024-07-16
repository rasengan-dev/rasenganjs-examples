import Input from "@/components/atoms/Input";
import NavItem from "@/components/atoms/NavItem";
import CardContainer from "@/components/molecules/CardContainer";
import { PageComponent } from "rasengan";

const Atoms: PageComponent = () => {
	return (
		<section className=''>
			{/* Inputs */}
			<CardContainer title='Simple Inputs'>
				<section className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4'>
					<Input placeholder='Input without label and icon' fullWidth />
					<Input placeholder='Input with icon' fullWidth>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width={20}
							height={20}
							fill={"none"}
						>
							<path
								d='M7.78256 17.1112C6.68218 17.743 3.79706 19.0331 5.55429 20.6474C6.41269 21.436 7.36872 22 8.57068 22H15.4293C16.6313 22 17.5873 21.436 18.4457 20.6474C20.2029 19.0331 17.3178 17.743 16.2174 17.1112C13.6371 15.6296 10.3629 15.6296 7.78256 17.1112Z'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M15.5 10C15.5 11.933 13.933 13.5 12 13.5C10.067 13.5 8.5 11.933 8.5 10C8.5 8.067 10.067 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10Z'
								stroke='currentColor'
								strokeWidth='1.5'
							/>
							<path
								d='M2.854 16C2.30501 14.7664 2 13.401 2 11.9646C2 6.46129 6.47715 2 12 2C17.5228 2 22 6.46129 22 11.9646C22 13.401 21.695 14.7664 21.146 16'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
							/>
						</svg>
					</Input>
					<Input
						placeholder='Input with icon'
						className='border-warning-400'
						fullWidth
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width={20}
							height={20}
							fill={"none"}
						>
							<path
								d='M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinejoin='round'
							/>
						</svg>
					</Input>
					<Input
						placeholder='Input with icon'
						className='border-success-400'
						fullWidth
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width={20}
							height={20}
							fill={"none"}
						>
							<path
								d='M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinejoin='round'
							/>
						</svg>
					</Input>
				</section>
			</CardContainer>

			<CardContainer title='Sidebar buttons'>
				<section className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
					<NavItem title='Dashboard'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width={20}
							height={20}
							fill={"none"}
						>
							<path
								d='M12.0002 18L12.0002 15'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
							/>
							<path
								d='M2.35157 13.2135C1.99855 10.9162 1.82204 9.76763 2.25635 8.74938C2.69065 7.73112 3.65421 7.03443 5.58132 5.64106L7.02117 4.6C9.41847 2.86667 10.6171 2 12.0002 2C13.3832 2 14.5819 2.86667 16.9792 4.6L18.419 5.64106C20.3462 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6488 13.2135L21.3478 15.1724C20.8473 18.4289 20.5971 20.0572 19.4292 21.0286C18.2613 22 16.5538 22 13.139 22H10.8614C7.44652 22 5.73909 22 4.57118 21.0286C3.40327 20.0572 3.15305 18.4289 2.65261 15.1724L2.35157 13.2135Z'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinejoin='round'
							/>
						</svg>
					</NavItem>
					<NavItem title='Atoms'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width={20}
							height={20}
							fill={"none"}
						>
							<circle
								cx='12'
								cy='12'
								r='4'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M22 9H21.99M2.00995 9H2M12.005 22H11.995'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M7.55556 21C4.47364 19.4999 2.37683 16.5285 2 13.1273M16.4444 21C19.5264 19.4999 21.6232 16.5285 22 13.1273M5.55555 4.25658C9.23956 1.24781 14.5382 1.24781 18.2222 4.25658'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</NavItem>
					<NavItem title='Dashboard' active>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width={20}
							height={20}
							fill={"none"}
						>
							<path
								d='M12.0002 18L12.0002 15'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
							/>
							<path
								d='M2.35157 13.2135C1.99855 10.9162 1.82204 9.76763 2.25635 8.74938C2.69065 7.73112 3.65421 7.03443 5.58132 5.64106L7.02117 4.6C9.41847 2.86667 10.6171 2 12.0002 2C13.3832 2 14.5819 2.86667 16.9792 4.6L18.419 5.64106C20.3462 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6488 13.2135L21.3478 15.1724C20.8473 18.4289 20.5971 20.0572 19.4292 21.0286C18.2613 22 16.5538 22 13.139 22H10.8614C7.44652 22 5.73909 22 4.57118 21.0286C3.40327 20.0572 3.15305 18.4289 2.65261 15.1724L2.35157 13.2135Z'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinejoin='round'
							/>
						</svg>
					</NavItem>
					<NavItem title='Atoms' active>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width={20}
							height={20}
							fill={"none"}
						>
							<circle
								cx='12'
								cy='12'
								r='4'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M22 9H21.99M2.00995 9H2M12.005 22H11.995'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M7.55556 21C4.47364 19.4999 2.37683 16.5285 2 13.1273M16.4444 21C19.5264 19.4999 21.6232 16.5285 22 13.1273M5.55555 4.25658C9.23956 1.24781 14.5382 1.24781 18.2222 4.25658'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</NavItem>
				</section>
			</CardContainer>
		</section>
	);
};

Atoms.path = "/ui/atoms";
Atoms.metadata = {
	title: "Atoms | Rasengan.js",
	description: "Atoms page",
};

export default Atoms;
