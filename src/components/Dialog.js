import { ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Dialog = ({ content, display, setDialogShow }) => {
    return (
        // overlay container
        <div className={`${display ? 'block' : 'hidden'} fixed -top-10 right-0 bottom-0 left-0 h-[105vh] w-[100vw] bg-slate-900 bg-opacity-80  z-30`}>
            {/* content container */}
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-50 p-4 rounded-lg md:p-12 bg-white min-w-[90vw] md:min-w-fit'>
                <X onClick={() => setDialogShow(false)} size={32} cursor={'pointer'} className='absolute top-2 right-2 p-1 bg-gray-200 rounded-full h-[24px] md:h-[32px]'></X>
                <div className='flex gap-y-4 flex-col justify-center items-left mt-4'>
                    {content?.map(item => {
                        return (
                            <div className='flex items-center gap-x-2 text-gray-900 text-lg md:text-xl'>
                                <ChevronRight size={24} className=' self-start'></ChevronRight>
                                <span>{item}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Dialog;