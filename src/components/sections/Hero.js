import React from 'react';
import SectionContainer from '../SectionContainer';
import Image from 'next/image';
import { Facebook, Github, Linkedin, LinkedinIcon, MapPin } from 'lucide-react';
import MyPic from '../MyPic';
import Link from 'next/link';

const Hero = () => {
    return (
        <SectionContainer>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-12'>
                <div className='col-span-1'>
                    <MyPic section={'hero'}></MyPic>
                </div>
                <div className='col-span-1'>
                    <h2 className='text-4xl md:text-6xl md:font-bold font-semibold text-gray-900 mb-8 md:mb-2'>Hi, I’m Abdur Rahman</h2>
                    <p className='text-base text-gray-600 mb-12'>I'm a MERN stack developer with expertise in Frontend. I'm focused on creating visually appealing, responsive and user friendly websites that are fast and accessible. Even though I'm a beginner But I'm always eager to learn whenever there is a need.</p>
                    <div className='mb-12 space-y-2'>
                        <p className='flex items-center gap-2 text-gray-600 text-base'>
                            <MapPin className='text-gray-900' />
                            <span>Chittagong, Bangladesh</span>
                        </p>
                        <p className='flex items-center gap-2 text-gray-600 text-base'>
                            <div className='relative w-3 h-3 ml-1 mr-2'>
                                <span className='bg-emerald-500 animate-ping w-3 h-3 rounded-full absolute opacity-75'>
                                </span>
                                <span className='bg-emerald-500 w-3 h-3 rounded-full absolute'></span>
                            </div>
                            <span>Available for new projects.</span>
                        </p>
                    </div>
                    <div className='flex gap-2 items-center text-2xl'>
                        <Link href={'https://github.com/abdur27485'} target='_blank' className='p-4 rounded-xl bg-gray-100 hover:bg-opacity-50 shadow-gray-200 shadow-inner transition-all duration-100 cursor-pointer'>
                            <Github size={32} />
                        </Link>
                        <Link href={'https://www.linkedin.com/in/AR27485'} target='_blank' className='p-4 rounded-xl bg-gray-100 hover:bg-opacity-50 shadow-gray-200 shadow-inner transition-all duration-100 cursor-pointer'>
                            <LinkedinIcon size={32} />
                        </Link>
                        <Link href={'https://facebook.com/AR27485/'} target='_blank' className='p-4 rounded-xl bg-gray-100 hover:bg-opacity-50 shadow-inner shadow-gray-200 transition-all duration-100 cursor-pointer'>
                            <Facebook size={32} />
                        </Link>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default Hero;