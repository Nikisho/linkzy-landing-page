import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import ChatIcon from '@mui/icons-material/Chat';
import EventIcon from '@mui/icons-material/Event';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-scroll';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ThirdScroll() {
    const appBenefits = [
        {
            mainContent: "Organize Meetups & Create Lasting Memories",
            subContent: "Never miss out on a chance to bond with friends.",
            icon: <GroupsIcon fontSize='large' color='inherit' />
        },
        {
            mainContent: "Real-Time Chat ",
            subContent: "Stay connected with friends and plan on the go.",
            icon: <ChatIcon fontSize='large' color='inherit' />
        },
        {
            mainContent: "Discover events near you",
            subContent: "From coffee catch-ups to weekend adventures, there's always something happening",
            icon: <EventIcon fontSize='large' color='inherit' />
        },
        {
            mainContent: "Like & Comment on Events",
            subContent: "Engage with the community and make your voice heard.",
            icon: <FavoriteIcon fontSize='large' color='inherit' />
        },
    ]
    return (
        <div className='h-auto bg-[#76b5c5] flex flex-col justify-center xl:py-10'>
            <div className='bg-white h-full xl:h-2/3 2xl:h-1/2 flex flex-col xl:flex-row '>
                <div className='w-full xl:w-1/2 '>
                    <img
                        src='static/scrollImages/thirdscrollmainimage.jpg'
                    />
                </div>
                {/* Promotional Copy */}
                <div className='w-full xl:h-auto xl:w-2/3  flex flex-col justify-center px-5 py-5 xl:p-0'>
                    {appBenefits.map((object) => (
                        <div className='my-2 flex items-center space-x-5 xl:ml-8 '>
                            <div className='p-3 rounded-lg bg-[#76b5c5] shadow-lg '>
                                {object.icon}
                            </div>

                            <div>

                                <div className='text-2xl '>
                                    {object.mainContent}
                                </div>
                                <div className='text-xl'>
                                    {object.subContent}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <div className=' flex justify-center items-center '>
                <Link className=' my-4 rounded-full shadow-xl font-semibold h-11 w-auto px-5 space-x-2 flex items-center animate-pulse bg-white hover:scale-95 hover:cursor-pointer transition duration-700'
                    to="home"
                    smooth={true}
                    duration={700}
                >
                    <ArrowUpwardIcon
                        fontSize='medium'
                    /> 
                    <p>
                        Sign up
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default ThirdScroll