import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { GiSpeedometer } from 'react-icons/gi'

function NavBar() {
  return (
    <nav className = 'w-screen text-white bg-cyan-400 flex justify-between items-center px-2 py-5'>
        <div className = ' flex items-end gap-1 text-sm md:text-md md:font-bold md:tracking-wider lg:text-lg lg:gap-2'>
            <GiSpeedometer className = 'text-2xl md:text-3xl lg:text-4xl' />
            <div>Haste</div>
        </div>
        <a className = 'cursor-pointer' href='https://github.com/iLoveHanekawa/haste'>
            <AiFillGithub className = 'text-2xl md:text-3xl lg:text-4xl' />
        </a>
    </nav>
  )
}

export default NavBar