import React, { useEffect, useState } from 'react';
import { Collapse } from '@mui/material';
import SignUpComponent from '../components/SignUpComponent';
import { Link } from 'react-scroll';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Home = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setOpen(true), 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className=' bg-gradient-to-t from-[#76b5c5]'>

			<div className='flex flex-col xl:flex-row  justify-center xl:py-14 space-y-5 xl:space-y-0 w-full '>
				<div className='w-full xl:w-1/2 space-y-5 p-3 2xl:place-self-center'>

					<Collapse in={open} orientation='vertical' timeout={2000}>
						{/* <div className='text-xl font-sans mx-1 self-center xl:w-4/5 space-y-5'>
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
						</div> */}
						<div className='text-xl font-sans px-3 xl:p-0 self-center xl:w-4/5 space-y-4'>
							<p className='text-3xl font-bold'>No plans this weekend?</p>
							<p className='text-2xl'>Meet Linkzy, the #1 app for connecting with others, scheduling events, and building lasting friendships!</p>
							<p className='text-2xl'>
								We're still building Linkzy, but early access is open! 
								Sign up now and be the first to connect.
							</p>
						</div>
					</Collapse>

					<SignUpComponent />
					<div className=' w-3/4 flex justify-start items-center px-3 xl:p-0'>

						<Link className='rounded-full shadow-xl font-semibold h-11 w-11 flex justify-center items-center animate-pulse bg-cyan-500 hover:scale-95 hover:cursor-pointer transition duration-700'
							to="secondscroll"
							smooth={true}
							duration={900}
						// style={{ width: '10' }}
						>
							<ArrowDownwardIcon
								fontSize='medium'
							/>
						</Link>
						<p className='px-4 font-bold'>
							Why Linkzy?
						</p>
					</div>

				</div>

				<div className='flex flex-col xl:space-x-2 xl:flex-row justify-center rounded-xl p-2 '>
					{['/static/appImages/screenshot1.png', '/static/appImages/screenshot2.png', '/static/appImages/screenshot3.png'].map((src, index) => (
						<img key={index} src={src} className='xl:h-96 w-full 2xl:h-[500px] rounded-lg hover:scale-95 transition duration-700' />
					))}
				</div>
			</div>

		</div>
	);
};

export default Home;
