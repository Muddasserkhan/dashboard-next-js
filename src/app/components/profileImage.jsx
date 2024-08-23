"use client"; // Add this directive at the top
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const ProfileImage = () => {

  const [menuToggle, setMenuToggle] = useState(false);

  const handleToggle = () => {
    setMenuToggle(!menuToggle);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      setMenuToggle(false); // Close the menu
    };

    // Add event listener
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts or when menuToggle changes
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative'>
      <button
        onClick={handleToggle}
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 overflow-hidden rounded-full"
        type="button"
      >
        <Image src="/images/placeholder-user.png" alt='User' width={36} height={36} />
      </button>
      <div className={`absolute -left-20 bg-white p-2 rounded-lg border text-sm shadow-sm w-28 ${menuToggle ? 'block' : 'hidden'}`}>
        <ul>
          <li className='text-dark-blue font-semibold p-1 border-b'>
            <Link href="#" className='w-full'>My Account</Link>
          </li>
          <li className='text-dark-blue font-normal px-2 py-1.5 hover:bg-muted-foreground/20 rounded'>
            <Link href="#">Setting</Link>
          </li>
          <li className='text-dark-blue font-normal px-2 py-1.5 hover:bg-muted-foreground/20 rounded'>
            <Link href="#">Support</Link>
          </li>
          <li className='text-dark-blue font-normal px-2 py-1 border-t hover:bg-muted-foreground/20 rounded'>
            <Link href="#">Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileImage
