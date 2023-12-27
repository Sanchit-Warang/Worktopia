'use client'

const MainContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] w-full border-x-1 border-borderr">{children}</div>
  )
}

export default MainContentWrapper
