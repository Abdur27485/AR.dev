import React, { useState } from 'react';
import SectionContainer from '../SectionContainer';
import Tag from '../Tag';
import { Copy, Facebook, Github, LinkedinIcon, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Alert from '../Alert';

const GetInTouch = () => {
    const [alert, setAlert] = useState(false);

    const alertTrigger = (value) => {
        setAlert(true);
        navigator.clipboard.writeText(value === 'email' ? 'abdurrahman27485@gmail.com' : '01332638970')
        console.log('outside:', alert)
        setTimeout(() => {
            setAlert(false);
            console.log('inside:', alert)
        }, 1000)
    }
    return (
        <SectionContainer>
            <Alert display={alert}></Alert>
            <div className='flex justify-center items- mb-12 p-4'>
                <Tag text={'Get In Touch'} />
            </div>
            <div className='flex flex-col items-center text-gray-600 md:gap-y-[18px]'>
                <div className='flex items-center gap-[12px]'>
                    <Mail size={24} />
                    <span className='text-[14px] sm:text-4xl font-semibold text-gray-900'>abdurrahman27485@gmail.com</span>
                    <Copy cursor={'pointer'} size={24} onClick={() => alertTrigger('email')} />
                </div>
                <div className='flex items-center gap-5'>
                    <Phone size={24} />
                    <span className='text-[14px] sm:text-4xl font-semibold text-gray-900'>+880 01332638970</span>
                    <Copy cursor={'pointer'} onClick={() => alertTrigger('')} size={24} />
                </div>
            </div>
            <div className='flex flex-col items-center gap-y-4 md:gap-y-[18px] mt-12 text-gray-600'>
                <p className='text-[14px] sm:text-2xl'>You may also find me on these platforms!</p>
                <div className='flex gap-4 flex-nowrap'>
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
        </SectionContainer>
    );
};

export default GetInTouch;