"use client"
import Hero from '@/components/sections/Hero'
import Drawer from '@/components/nav/Drawer'
import Nav from '@/components/nav/Nav'
import { Button } from '@radix-ui/themes'
import { Moon, Sun, Tally1 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'

export default function Home() {
  // const [darkMode, setDarkMode] = useState(false)
  return (
    <main className='mx-auto'>
      <header>
        <Nav />
        <Hero />
        <About />
        <Skills />
      </header>
    </main>
  )
}
