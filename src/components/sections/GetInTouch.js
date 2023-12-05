import React from 'react';
import SectionContainer from '../SectionContainer';
import Tag from '../Tag';
import { Copy, Facebook, Github, LinkedinIcon, Mail, Phone } from 'lucide-react';

const GetInTouch = () => {
    return (
        <SectionContainer>
            <div className='flex justify-center items- mb-12'>
                <Tag text={'Get In Touch'} />
            </div>
            <div className='flex flex-col items-center text-gray-600 md:gap-y-[18px]'>
                <div className='flex items-center gap-5'>
                    <Mail size={24} />
                    <span className='text-[18px] md:text-4xl font-semibold text-gray-900'>abdurrahman27485@gmail.com</span>
                    <Copy size={24} onClick={() => navigator.clipboard.writeText('abdurrahman27485@gmail.com')} />
                </div>
                <div className='flex items-center gap-5'>
                    <Phone size={24} />
                    <span className='text-[18px] md:text-4xl font-semibold text-gray-900'>+880 01332638970</span>
                    <Copy onClick={() => navigator.clipboard.writeText('01332638970')} size={24} />
                </div>
            </div>
            <div className='flex flex-col items-center md:gap-y-[18px] mt-12 text-gray-600'>
                <p className='text-base'>You may also find me on these platforms!</p>
                <div className='flex gap-4'>
                    <Github size={24} />
                    <Facebook size={24} />
                    <LinkedinIcon size={24} />
                </div>
            </div>
        </SectionContainer>
    );
};

export default GetInTouch;