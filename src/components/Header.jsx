import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            link: '/privacypolicy.html',
            text: 'Privacy policy'
        },
        {
            link: '/deletedata.html',
            text: 'Delete your data'
        },
        {
            link:'/contactus.html',
            text: 'Contact us'
        }
    ]
    return (
        <div className='flex flex-row space-x-4 w-full  xl:px-10  items-center py-4 px-3 '>
            <div className=''>

                <h1 className='hidden xl:flex font-bold font-sans text-5xl text-black'>
                    <strong>Linkzy</strong>
                </h1>
            </div>
            <div className='hidden xl:flex flex-row space-x-4 items-center text-white font-semibold justify-end w-full'>

                {
                    menuOptions.map((menuOption) => (
                        <a
                            href={menuOption.link}
                            className='rounded-full bg-black shadow-xl px-4 p-2 hover:scale-95 transition duration-700'
                        >
                            <p>
                                {menuOption.text}
                            </p>
                        </a>
                    ))
                }

            </div>
            <div className='text-[#20444c] hover:cursor p-1 shadow-lg rounded-lg flex xl:hidden'
                onClick={() => { setOpenMenu(!openMenu) }}
            >
                <MenuIcon
                    fontSize='large'
                    color='inherit'
                />
            </div>
            {/* Menu */}
            {
                openMenu && (
                    <div className='absolute left-1 top-14 py-3 bg-white w-1/2'>
                        {
                            menuOptions.map((menuOption) => (
                                <div className=' p-3 border '>
                                    <a href={menuOption.link}>{menuOption.text}</a>
                                </div>
                            ))
                        }
                    </div>
                )
            }

        </div>
    )
}
