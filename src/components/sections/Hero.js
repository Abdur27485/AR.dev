import React from 'react';
import SectionContainer from '../SectionContainer';
import Image from 'next/image';
import { Facebook, Github, Linkedin, MapPin } from 'lucide-react';
import MyPic from '../MyPic';

const Hero = () => {
    return (
        <SectionContainer>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-12'>
                <div className='col-span-1'>
                    <MyPic section={'hero'}></MyPic>
                </div>
                <div className='col-span-1'>
                    <h2 className='text-4xl md:text-6xl md:font-bold font-semibold text-gray-900 mb-8 md:mb-2'>Hi, I’m Abdur Rahman</h2>
                    <p className='text-base text-gray-600 mb-12'>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                    <div className='mb-12 space-y-2'>
                        <p className='flex items-center gap-2 text-gray-600 text-base'>
                            <MapPin />
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
                    <div className='flex gap-1 items-center text-2xl'>
                        <Github />
                        <Facebook />
                        <Linkedin />
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default Hero;