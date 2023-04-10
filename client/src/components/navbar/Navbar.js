import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Profile from './Profile.js'
import style from './navbar.module.css'

const Navbar = () => {
  return (
      <nav className={`${style.nav} flex items-center justify-between sticky`}>
        <Link href="google" className="flex gap-2 align-middle">
        <Image
        className={`${style.logo}`}
        src="/cipher_logo.png"
        width={36}
        height={36}
        />
        <h1 className="text-white text-2xl ">CipherSchools</h1>
        </Link>
        <Profile/>
      </nav>
  )
}

export default Navbar