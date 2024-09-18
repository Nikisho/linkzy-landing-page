import React, { useEffect, useState } from 'react';
import { Collapse } from '@mui/material';
import SignUpComponent from '../components/SignUpComponent';

const Home = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setOpen(true), 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className='flex flex-col xl:flex-row items-center justify-center xl:py-14 space-y-5 xl:space-y-0 2xl:mt-20 2xl:mx-20'>
			<div className='w-full xl:w-1/2 space-y-5'>
				<h1 className='font-sans text-7xl mb-5 text-[#20444c]'>
					<strong>Linkzy</strong>
				</h1>

				<Collapse in={open} orientation='vertical' timeout={2000}>
					<div className='text-xl font-sans mx-1 self-center xl:w-4/5 space-y-5'>
						<p>
							As life gets busier, finding and maintaining close friendships can feel harder.
							Whether it’s drifting apart or missing out on plans, staying connected shouldn’t be a struggle.
						</p>
						<p>
							That’s where Linkzy comes in. We make it easy to{' '}
							<strong>stay in touch, organize events, and create lasting memories</strong>,
							so your friendships always remain a priority.
						</p>
						<p>Be part of our early community and get access before anyone else. Sign up now for early access!</p>
					</div>
				</Collapse>

				<SignUpComponent />
			</div>

			<div className='flex flex-col xl:flex-row justify-center bg-slate-200 rounded-xl xl:p-2'>
				{['/static/screenshot1.png', '/static/screenshot2.png', '/static/screenshot3.png'].map((src, index) => (
					<img key={index} src={src} className='w-full xl:h-96 rounded-lg' />
				))}
			</div>
		</div>
	);
};

export default Home;
