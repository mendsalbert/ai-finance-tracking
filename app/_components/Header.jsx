"use client"
import React from 'react'
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { useUser,UserButton } from "@clerk/nextjs";
import Link from 'next/link';
function Header() {

  const {user,isSignedIn}=useUser();
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
        <Image src={'./logo.svg'}
        alt='logo'
        width={160}
        height={100}
        />
       {isSignedIn?
        <UserButton/> : 
        <div className='flex gap-3 items-center'>
          <Link href={'/dashboard'}>
            <Button variant="outline">Dashboard</Button>
            </Link>
        <Link href={'/sign-in'}>
          <Button>Get Started</Button>
        </Link>
        </div>
      }
       
    </div>
  )
}

export default Header