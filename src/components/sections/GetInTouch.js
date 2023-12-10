import React from 'react';
import SectionContainer from '../SectionContainer';
import Tag from '../Tag';
import { Copy, Facebook, Github, LinkedinIcon, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const GetInTouch = () => {
    return (
        <SectionContainer>
            <div className='flex justify-center items- mb-12 p-4'>
                <Tag text={'Get In Touch'} />
            </div>
            <div className='flex flex-col items-center text-gray-600 md:gap-y-[18px]'>
                <div className='flex items-center gap-[12px]'>
                    <Mail size={24} />
                    <span className='text-[14px] md:text-4xl font-semibold text-gray-900'>abdurrahman27485@gmail.com</span>
                    <Copy size={24} onClick={() => navigator.clipboard.writeText('abdurrahman27485@gmail.com')} />
                </div>
                <div className='flex items-center gap-5'>
                    <Phone size={24} />
                    <span className='text-[14px] md:text-4xl font-semibold text-gray-900'>+880 01332638970</span>
                    <Copy onClick={() => navigator.clipboard.writeText('01332638970')} size={24} />
                </div>
            </div>
            <div className='flex flex-col items-center gap-y-4 md:gap-y-[18px] mt-12 text-gray-600'>
                <p className='text-[14px] md:text-2xl'>You may also find me on these platforms!</p>
                <div className='flex gap-4 flex-nowrap'>
                    <Link href={'https://www.linkedin.com/in/'} target='_blank' className='p-4 rounded-xl bg-gray-100 hover:bg-opacity-50 shadow-gray-200 shadow-inner transition-all duration-100 cursor-pointer'>
                        <Github size={32} />
                    </Link>
                    <Link href={'https://github.com/abdur27485'} target='_blank' className='p-4 rounded-xl bg-gray-100 hover:bg-opacity-50 shadow-gray-200 shadow-inner transition-all duration-100 cursor-pointer'>
                        <LinkedinIcon size={32} />
                    </Link>
                    <Link href={'https://web.facebook.com/AR27485/'} target='_blank' className='p-4 rounded-xl bg-gray-100 hover:bg-opacity-50 shadow-inner shadow-gray-200 transition-all duration-100 cursor-pointer'>
                        <Facebook size={32} />
                    </Link>

                </div>
            </div>
        </SectionContainer>
    );
};

export default GetInTouch;