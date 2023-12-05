import Image from 'next/image';
import React from 'react';

const MyPic = ({ section }) => {
    return (
        <div className="relative w-[280px] h-[320px] mx-auto">
            <Image src={'/me.jpg'} width={280} height={320} className='relative z-10 w-[240px] border-8 border-transparent h-[280px] mx-auto md:h-[320px] md:w-[280px]'></Image>
            <div className={`absolute top-5 md:top-10 ${section === 'hero' ? 'md:left-10' : 'md:right-10'} w-[280px] h-[280px] md:h-[320px] border-8 z-0 border-transparent bg-gray-200`}></div>
        </div>
    );
};

export default MyPic;