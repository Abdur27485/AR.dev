import { Inter } from 'next/font/google'
import './globals.css'
import { Theme } from '@radix-ui/themes'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abdur Rahman - Frontend Developer',
  description: 'A MERN Stack Developer With expertise in Frontend Technologies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Theme>
          {children}
        </Theme>

      </body>
    </html>
  )
}
