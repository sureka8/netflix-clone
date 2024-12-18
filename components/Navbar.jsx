"use client"
import { Search } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const pathName = usePathname()
    const links = [
        {
            id:1,
            name:'Home',
            href:'/home'
        },
        {
            id:2,
            name:'TV Shows',
            href:'/home/show'
        },
        {
            id:3,
            name:'Movies',
            href:'/home/movie'
        },
        {
            id:4,
            name:'News&Popular',
            href:'/home/recent'
        },
        {
            id:5,
            name:'My List',
            href:'/home/mylist'
        }
    ]
  return (
    <div>
        {/* for desktopview */}
    <div className='hidden md:flex items-center mt-2 w-full   justify-between px-5 md:px-14'>
        <div className='flex items-center'>
        <div className='text-btnred text-3xl font-bold'>logo</div>
  <ul className='flex flex-row ml-24 space-x-5'>
    {
        links.map((link) =>(
            <div key={link.id}>
    {pathName === link.href ? <li className='text-white font-semibold underline text-sm'>
        <Link href={link.href}>{link.name}</Link>
    </li> : <li className='text-gray-300 font-normal text-sm'>
    <Link href={link.href}>{link.name}</Link>
    </li> }
            </div>
        

        ))
    }

  </ul>

        </div>
 <div className='flex items-center gap-x-8'>
    <Search />
 </div>
    </div>
    {/* for mobile view */}
    </div>
  )
}

export default Navbar