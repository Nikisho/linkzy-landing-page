import React, { useEffect, useState } from 'react';
import { Collapse } from '@mui/material';
import SignUpComponent from '../components/SignUpComponent';
import { Link } from 'react-scroll';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {
	GooglePlayButton,
	AppStoreButton,
} from "react-mobile-app-button";
const Home = () => {
	const [open, setOpen] = useState(false);
	const IOSUrl = 'https://apps.apple.com/us/app/linkzy/id6720764102';
	const AndroidUrl = 'https://play.google.com/store/apps/details?id=com.linkzy';
	useEffect(() => {
		const timer = setTimeout(() => setOpen(true), 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className=' bg-gradient-to-t from-[#76b5c5]'>

			<div className='flex flex-col xl:flex-row  justify-center xl:py-5 space-y-5 xl:space-y-0 w-full '>
				<div className='w-full xl:w-1/2 space-y-5 p-3 2xl:place-self-center xl:pl-10 pt-10'>

					<Collapse in={open} orientation='vertical' timeout={2000}>
						<div className='text-xl font-sans px-3 xl:p-0 self-center xl:w-full space-y-4'>
							<p className='text-3xl font-bold'>No plans this weekend?</p>
							<p className='text-2xl'>Meet Linkzy, the #1 app for connecting with others, scheduling events, and building lasting friendships!</p>
							<p className='text-2xl'>
								Download Linkzy and start making meaningful connections today.
							</p>
						</div>
						<div className='flex my-8 items-center space-y-3 flex-col xl:flex-row xl:space-x-5 xl:space-y-0'>
							<AppStoreButton
								url={IOSUrl}
								theme={"dark"}
								width={200}
								className={"w-full"}
							/>
							<GooglePlayButton
								url={AndroidUrl}
								theme={"dark"}
								width={200}
								className={""}
							/>
						</div>
					</Collapse>
					{/* <SignUpComponent /> */}
					<div className=' w-3/4 flex justify-start items-center px-3 xl:p-0'>

						<Link className='rounded-full shadow-xl font-semibold h-11 w-11 flex justify-center items-center animate-pulse bg-cyan-500 hover:scale-95 hover:cursor-pointer transition duration-700'
							to="secondscroll"
							smooth={true}
							duration={900}
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

				<div className='flex flex-col xl:flex-row  justify-center rounded-xl xl:w-1/2 max-h-screen  '>
					{/* {['/static/appImages/screenshot1.png', '/static/appImages/screenshot2.png', '/static/appImages/screenshot3.png'].map((src, index) => (
						<img key={index} src={src} className='xl:h-96 w-full 2xl:h-[500px] rounded-lg hover:scale-95 transition duration-700' />
					))} */}
					<img
						src='/static/appImages/linkzyFrames.png'
						className='h-[80%] '
					/>
				</div>
			</div>

		</div>
	);
};

export default Home;
