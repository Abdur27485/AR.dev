"use client"
import Hero from '@/components/Hero'
import Drawer from '@/components/nav/Drawer'
import Nav from '@/components/nav/Nav'
import { Button } from '@radix-ui/themes'
import { Moon, Sun, Tally1 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  // const [darkMode, setDarkMode] = useState(false)
  return (
    <main className='mx-auto lg:mx-[80px]'>
      <header>
        <Nav />
        <Hero />
      </header>
    </main>
  )
}
