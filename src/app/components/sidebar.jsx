import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const Sidebar = () => {
  return (
    <div className="fixed inset-y-0 hidden flex-col border-r bg-white sm:flex w-14">
        <div className="gray_icon_color flex flex-col items-center gap-4 px-2 sm:py-5">
            <Link href="" className="vercel_color bg-dark-blue group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
                <svg className="h-3 w-3 transition-all group-hover:scale-110" aria-label="Vercel logomark" height="64" role="img" viewBox="0 0 74 64"><path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" fill="currentColor"></path></svg>
                <span className="sr-only">Acme Inc</span>
            </Link>
            <Link href="" className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
                <Image src="/images/home.svg" alt="home" width={20} height={20}></Image>
                <span className="sr-only">Orders</span>
            </Link>
            <Link href="" className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
                <Image src="/images/dashboard.svg" alt="dashboard" width={20} height={20}></Image>
                <span className="sr-only">Dashboard</span>
            </Link>
            <Link href="" className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
                <Image src="/images/products.svg" alt="products" width={20} height={20}></Image>    
                <span className="sr-only">Products</span>
            </Link>
            <Link href="" className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
                <Image src="/images/customer.svg" alt="customer" width={20} height={20}></Image>
                <span className="sr-only">Customers</span>
            </Link>
            <Link href="" className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
                <Image src="/images/analytics.svg" alt="analytics" width={20} height={20}></Image>
                <span className="sr-only">Analytics</span>
            </Link>
        </div>
        <div className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <Link href="" className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
                <Image src="/images/setting.svg" alt="setting" width={20} height={20}></Image>
                <span className="sr-only">Settings</span>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar
