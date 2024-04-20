import React from 'react'
import { NavLink } from 'react-router-dom';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';


const Hero = () => {
    return (
        <section className='relative bg-hero bg-center bg-cover bg-no-repeat h-screen w-full'>
            <div className='max_padd_container relative top-32 xs:top-52'>
                <h1 className='h1 capitalize max-w-[37rem]'>
                    BrowseBazar
                </h1>
                <p className='text-gray-50 regular-16 mt-6 max-w-[33rem]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus perspiciatis sequi deleniti odit, porro eaque rerum illum reprehenderit aspernatur, quod tempora est neque esse, magnam dicta quos iure explicabo?</p>
                <div className='flexStart !items-center gap-x-4 my-10'>
                    <div className='!regular-24 flexCenter gap-x-3'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <div className='bold-16 sm:bold-20'>176k <span className='regular-16 sm::regular-20'>Excellent reviews</span></div>
                </div>
                <div className='max-xs:flex-col flex gap-2'>
                    <NavLink to={''} className={"btn_dark_rounded flexCenter"}>Shop Now</NavLink>
                    <NavLink to={''} className={"btn_dark_rounded flexCenter"}><MdOutlineLocalOffer className='text-2xl'/>Offers</NavLink>
                </div>

            </div>
        </section>
    )
}

export default Hero