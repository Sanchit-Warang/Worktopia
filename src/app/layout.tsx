// 'use client'
import './globals.css'
import { Providers } from './providers'
// import { useSelector } from 'react-redux';
// import { GlobalState } from '@/types/types';
import Navvbar from '@/components/Navvbar'
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import SideBar from '@/components/SideBar'
import SideBarBottom from '@/components/ui/SideBarBottom'

import { Exo_2 } from 'next/font/google'

const exo_2 = Exo_2({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Worktopia</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body
        className={`${exo_2.className} bg-background text-copy-light
      !scroll-smooth
    `}
      >
        <Providers>
          {/* <Navvbar modeToggle={modeToggle} mode={mode} /> */}
          {/* <div className="flex mx-auto md:w-[90vw] content  w-full">
            <SideBar /> */}
          <div className="h-[100vh] w-[100vw]">{children}</div>
          {/* <div className="h-[100vh] w-full border-x-1 border-borderr">
              {children}
            </div>
            <RightBar /> */}
          {/* </div> */}
          {/* <SideBarBottom /> */}
        </Providers>
      </body>
    </html>
  )
}
