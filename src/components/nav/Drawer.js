import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { AlignCenter, Moon, Sun, X } from 'lucide-react';
import Link from 'next/link';

const Drawer = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <AlignCenter size={24} />
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                    <div className='p-4 flex justify-between items-center'>
                        <h3 className='font-bold text-2xl'>&lt;AR /&gt;</h3>
                    <Dialog.Close>
                    <div className='active:bg-gray-200 rounded-xl focus:bg-gray-200 p-[6px]' aria-label='Close'>
                            <X size={24} />
                        </div>
                    </Dialog.Close>
                    </div>

                    <div className='w-full h-0.5 bg-gray-200'></div>

                    <div className='p-4 flex justify-between items-center'>
                        <ul className='flex flex-col gap-y-4'>
                            <Link href={'#about'} className='text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600'>About</Link>
                            <Link href={'#work'} className='text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600'>Work</Link>
                            <Link href={'#contact'} className='text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600'>Contact</Link>
                        </ul>
                    </div>

                    {/* <div className='w-full h-0.5 bg-gray-200'></div> */}

                    {/* <div className='p-4 flex justify-between items-center'>
                        <p className='text-base text-gray-600'>Switch Theme</p>
                        <div className='p-[6px] active:bg-gray-300 rounded-xl focus:bg-gray-300 hover:bg-gray-200'>
                            {
                                darkMode ?
                                    <Sun size={24} onClick={() => setDarkMode(!darkMode)} />
                                    :
                                    <Moon size={24} onClick={() => setDarkMode(!darkMode)} />
                            }
                        </div>
                    </div> */}
                    <div className='my-4 mx-4 overflow-hidden'>
                        <button className='w-full rounded-xl bg-gray-900 text-center py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800'>Download Resume</button>
                    </div>

                    {/* <Dialog.Close asChild>
                        <button className="IconButton" aria-label="Close">
                            close
                        </button>
                    </Dialog.Close> */}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default Drawer;