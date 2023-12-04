"use client"
import Drawer from '@/components/nav/Drawer'
import { Button } from '@radix-ui/themes'
import { Moon, Sun, Tally1 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <main className='mx-auto lg:mx-[80px]'>
      <header>
        <nav className='p-4 lg:py-4 lg:px-8'>
          <div className="flex justify-between items-center">
            <div>
              <h1 className='text-2xl lg:text-3xl font-bold text-gray-900'>&lt;AR /&gt;</h1>
            </div>
            {/* large screen navbar */}
            <div className='hidden md:flex items-center gap-6'>
              <ul className='flex gap-6'>
                <Link href={'#about'} className='text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600'>About</Link>
                <Link href={'#work'} className='text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600'>Work</Link>
                <Link href={'#contact'} className='text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600'>Contact</Link>
              </ul>
              <div className='h-6 w-0.5 bg-gray-100'></div>
              <ul className='flex gap-4 items-center'>
                {/* {
                  darkMode ?
                    <li onClick={() => setDarkMode(!darkMode)} className='p-[6px] active:bg-gray-300 rounded-xl focus:bg-gray-300'>
                      <Sun />
                    </li>
                    :
                    <li onClick={() => setDarkMode(!darkMode)} className='p-[6px] active:bg-gray-300 rounded-xl focus:bg-gray-300'>
                      <Moon />
                    </li>
                } */}
                <li>
                  <button className='inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800'>Download Resume</button>
                </li>
              </ul>
            </div>
            {/* small screen navbar */}
            <div className='md:hidden'>
              <Drawer darkMode={darkMode} setDarkMode={setDarkMode}></Drawer>
            </div>
          </div>
        </nav>
      </header>
    </main>
  )
}
