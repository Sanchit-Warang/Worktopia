'use client'
import { NextUIProvider } from '@nextui-org/react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextUIProvider>
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Provider store={store}>{children}</Provider>
        </NextThemesProvider>
      </NextUIProvider>
    </>
  )
}
