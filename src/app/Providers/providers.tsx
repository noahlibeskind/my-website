'use client'

import { Provider } from '@/components/ui/provider'
import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'

/**
 * @ref https://stackoverflow.com/questions/77026759/using-next-themes-for-dark-mode-generates-hydration-failed-error
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )
  }

  return (
    <ThemeProvider attribute="class">
      <Provider>{children}</Provider>
    </ThemeProvider>
  )
}
