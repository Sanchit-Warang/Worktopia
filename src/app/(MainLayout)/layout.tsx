'use client'
import SideBar from '@/components/SideBar'
import SideBarBottom from '@/components/ui/SideBarBottom'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex mx-auto md:w-[90vw] content  w-full">
        <SideBar />
        {children}
      </div>
      <SideBarBottom />
    </>
  )
}

export default MainLayout
