import Link from 'next/link'
import { useState } from 'react'
import Links from '../public/database/navbar-data/navbar-data.json'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="shadow-md w-full fixed top-0 left-0 z-20 ">
      <div className="nav-background-color md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <Link href="/">
            <span className="text-xl text-color-header-footer mr-1 uppercase font-mono">
              Š.K. Gimnazijalac
            </span>
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-color-header-footer absolute right-8 top-3 cursor-pointer md:hidden"
        >
          {open ? <button>&#x2715;</button> : <button>&#x2630;</button>}
        </div>

        <ul
          className={` md:flex md:items-center nav-background-color md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  shadow-lg md:shadow-none ${
            open ? 'top-12 h-screen ' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-4 text-xl md:my-0 my-7">
              <Link key={link.name} href={`${link.link}`}>
                <a className="text-color-header-footer hover:text-gray-400 duration-500">
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
