import React from 'react'
import Image from 'next/image'


const products = [
  {
    name: 'Smartphone X Pro',
    image: '/images/Smartphone X Pro.webp',
    price: '$999.90',
    stock: 150,
    date: '6/23/2024',
    status: 'Active',
  },
  {
    name: 'Wireless Earbuds Ultra',
    image: '/images/Wireless Earbuds Ultra.webp',
    price: '$642.90',
    stock: 563,
    date: '6/13/2021',
    status: 'Active',
  },
  {
    name: 'Smart Home Hub',
    image: '/images/Smart Home Hub.webp',
    price: '$329.90',
    stock: 221,
    date: '06/04/2023',
    status: 'Active',
  },
  {
    name: "4K Ultra HD Smart TV",
    image: "/images/4K Ultra HD Smart TV.webp",
    price: "$435.90",
    stock: 545,
    date: "6/30/2022",
    status: "Active",
  },
  {
    name: "Gaming Laptop Pro",
    image: "/images/Gaming Laptop Pro.webp",
    price: "$123.90",
    stock: 651,
    date: "6/16/2024",
    status: "Active",
  },
  {
    name: "VR Headset Plus",
    image: "/images/VR Headset Plus.webp",
    price: "$787.90",
    stock: 100,
    date: "09/10/2024",
    status: "Active",
  },
  {
    name: "Smartwatch Elite",
    image: "/images/Smartwatch Elite.webp",
    price: "$190.90",
    stock: 890,
    date: "5/18/2024",
    status: "Active",
  },
  {
    name: "Bluetooth Speaker Max",
    image: "/images/Bluetooth Speaker Max.webp",
    price: "$89.90",
    stock: 10,
    date: "8/10/2024",
    status: "Active",
  },
  {
    name: "Portable Charger Super",
    image: "/images/Portable Charger Super.webp",
    price: "$190.90",
    stock: 67,
    date: "8/12/2024",
    status: "Active",
  },
  {
    name: "Smart Thermostat Pro",
    image: "/images/Smart Thermostat Pro.webp",
    price: "$200.90",
    stock: 200,
    date: "9/29/2024",
    status: "Active",
  }
];


const ProductCategory = () => {
  return (
    <>  
        
        <div className='flex items-center justify-between w-full'>
          <div className='inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground'>
              <button className='inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium'>All</button>
              <button className='inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium'>Active</button>
              <button className='inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium'>Draft</button>
              <button className='inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium'>Archived</button>
          </div>
          <div className='flex item-centergap-2 gap-2'>
            <button className='inline-flex items-center border gap-1 bg-white px-3 py-1 rounded'>
              <Image src="/images/export.svg" alt="export" width={14} height={14}></Image>
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap text-sm font-medium">Export</span>
            </button>

            <button className='add_product inline-flex items-center gap-1 bg-dark-blue text-white px-3 py-1 rounded'>
              <Image src="/images/add-product.svg" alt="export" width={14} height={14}></Image>
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap text-sm font-medium">Add Product</span>
            </button>
          </div>
        </div>


        <div className='mt-2 rounded-lg border shadow-sm bg-white'>
          <div className=''>
            <div className='flex flex-col p-6'>
              <h3 className='text-2xl font-semibold'>Products</h3>
              <p className='text-sm text-muted-foreground font-normal mt-1'>Manage your products and view their sales performance.</p>
            </div>
          </div>
          <div className='p-6 pt-0'>
            <table className='w-full'>
              <thead>
                <tr className='border-b transition-colors hover:bg-muted'>
                  <th className='px-4 h-12 text-left font-semibold text-sm text-muted-foreground'></th>
                  <th className='px-4 h-12 text-left font-semibold text-sm text-muted-foreground'>Name</th>
                  <th className='px-4 h-12 text-left font-semibold text-sm text-muted-foreground'>Status</th>
                  <th className='px-4 h-12 text-left font-semibold text-sm text-muted-foreground'>Price</th>
                  <th className='px-4 h-12 text-left font-semibold text-sm text-muted-foreground'>Total Sales</th>
                  <th className='px-4 h-12 text-left font-semibold text-sm text-muted-foreground'>Created at</th>
                  <th className='px-4 h-12 text-left font-semibold text-sm text-muted-foreground'></th>
                </tr>
              </thead>
              <tbody>
                
                {products.map((product, index) => ( 
                  <tr className='border-b transition-colors hover:bg-muted'>
                    <td className='p-4 align-middle text-sm'>
                      <Image className='aspect-square rounded-md object-cover' src={product.image} alt="Smartphone X Pro" height={64} width={64}></Image>
                    </td>
                    <td className='p-4 align-middle text-sm font-semibold'>{product.name}</td>
                    <td className='p-4 align-middle text-sm'>
                      <div className='inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold'>Active</div>
                    </td>
                    <td className='p-4 align-middle text-sm'>{product.price}</td>
                    <td className='p-4 align-middle text-sm'>{product.stock}</td>
                    <td className='p-4 align-middle text-sm'>{product.date}</td>
                    <td className='p-4 align-middle'>
                      <button className='inline-flex items-center justify-center text-sm font-medium'>
                        <Image src="images/three-dot.svg" alt="three-dit" height={16} width={16}></Image>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className='p-6 pt-0'>
            <form action="" className='flex items-center w-full justify-between'>
              <div className='text-sm text-muted-foreground'>Showing <strong>6-10</strong> of <strong>10</strong> Products</div>
              <div className='flex'>
                <button className='flex px-2 items-center text-sm whitespace-nowrap'>
                  <Image className="mr-1" src="images/left-arrow.svg" alt="left-arrow" width={16} height={16}></Image>
                  <span>Prev</span>
                </button>
                <button className='flex px-2 items-center text-sm whitespace-nowrap'>
                  <span>Next</span>
                  <Image className="ml-1" src="images/right-arrows.svg" alt="left-arrow" width={16} height={16}></Image>
                </button>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default ProductCategory
