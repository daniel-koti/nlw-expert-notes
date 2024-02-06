import { ReactNode } from 'react'

interface DotBackgroundLayoutProps {
  children: ReactNode
}

export function DotBackgroundLayout({ children }: DotBackgroundLayoutProps) {
  return (
    <div className="h-screen w-full  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {children}
    </div>
  )
}
