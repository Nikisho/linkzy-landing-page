import React from 'react'

export default function Header() {
    return (
        <div className='flex flex-row space-x-4 w-full  xl:px-10  items-center py-4 px-3 '>
            <div className=''>

                <h1 className='hidden xl:flex font-sans text-5xl text-[#20444c]'>
                    <strong>Linkzy</strong>
                </h1>
            </div>
            <div className='flex flex-row space-x-4 items-center text-white font-semibold justify-end w-full'>

                <a
                    href='/privacypolicy.html'
                    className='rounded-full bg-[#20444c] shadow-xl px-4 p-2 hover:scale-95 transition duration-700'>
                    Privacy policy
                </a>
                <a
                    href='/deletedata.html'
                    className='rounded-full bg-[#20444c] shadow-xl px-4 p-2 hover:scale-95 transition duration-700'>
                    Delete your data
                </a>
                {/* <div className='rounded-full bg-[#20444c] shadow-xl px-4 p-3 hover:scale-95 transition duration-700' >
                    About
                </div> */}

            </div>
        </div>
    )
}
