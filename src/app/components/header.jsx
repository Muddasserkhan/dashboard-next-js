import React from 'react'
import Image from 'next/image'
import SearchForm from './searchForm'
import ProfileImage from './profileImage'


const Header = () => {
  return (
    <>
      <header className="sticky p-2 top-0 z-30 flex justify-between h-10 items-center gap-4 px-6 bg-muted">
        <div className="breadcrumb">
            <ol className="flex flex-wrap items-center h-15 gap-4 break-words text-sm sm:gap-2.5">
                <li className="inline-flex items-center gap-1.5">
                    <a className="" href="#">Dashboard</a>
                </li>
                <li className="">
                    <Image src="/images/right-arrow.svg" alt="right-arrow" width={20} height={20}></Image>
                </li>
                <li className="inline-flex items-center gap-1.5">
                    <a className="" href="#">Products</a>
                </li>
                <li className="">
                  <Image src="/images/right-arrow.svg" alt="right-arrow" width={20} height={20}></Image>
                    
                </li>
                <li className="inline-flex items-center gap-1.5">
                    <a className="" href="#">All Products</a>
                </li>
            </ol>
        </div>
        <div className='flex gap-5'>
          <SearchForm />
          <ProfileImage />
        </div>
      </header>
    </>
  )
}

export default Header
