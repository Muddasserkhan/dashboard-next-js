import React from 'react'
import Header from '../components/header'
import Sidebar from '../components/sidebar'

const DashboardLayout = ({ children }) => {
  return (
    <div className=''>
        <Sidebar />
        <div className="flex flex-col sm:gap-4 sm:py-4 pl-55 bg-muted">
          <Header />
          <main className='flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0'>{children}</main>
        </div>
    </div>
  )
}

export default DashboardLayout
