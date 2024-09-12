import React from 'react'

export default function Header() {
    return (
        <div className='flex flex-row space-x-4 w-full justify-end px-10 '>
            <div className='flex flex-row space-x-4 text-white font-semibold'> 

                <a 
                    href='/privacypolicy.html'
                    className='rounded-full bg-[#20444c] shadow-xl px-4 p-3 hover:scale-95 transition duration-700'>
                    Privacy policy
                </a>
                <a 
                    href='/deletedata.html'
                    className='rounded-full bg-[#20444c] shadow-xl px-4 p-3 hover:scale-95 transition duration-700'>
                    Delete your data
                </a>
                {/* <div className='rounded-full bg-[#20444c] shadow-xl px-4 p-3 hover:scale-95 transition duration-700' >
                    About
                </div> */}

            </div>
        </div>
    )
}
