import Image from 'next/image'
import React from 'react'

const ProfileImage = () => {
  return (
    <div>
      <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 overflow-hidden rounded-full" type="button">
        <Image src="/images/placeholder-user.png" alt='as' width={36} height={36}></Image>
      </button>
    </div>
  )
}

export default ProfileImage
