'use client'
import { useState } from 'react'
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import Button from './UI/Button'
import PopupMenu from './UI/PopupMenu'

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  const toggleMenu = () => {
    setVisible((prevVisible) => !prevVisible)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <nav className="flexBetween max-container padding-container z-30 py-5 sticky top-0 w-full shadow bg-white opacity-[100%] lg:relative lg:shadow-none">
      <Link href="/">
        <Image
          src="/hilink-logo.svg"
          alt="logo"
          width={74}
          height={74}
          className="opacity-100"
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-black-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          icon="/user.svg"
          title="Login"
          variant="btn_dark_green"
        />
      </div>
      <button onClick={toggleMenu}>
        {!visible ? (
          <Image
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
          />
        ) : (
          <Image
            src="/close.svg"
            alt="close"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden text-black"
          />
        )}
      </button>
      {visible && <PopupMenu onClose={onClose} />}
    </nav>
  )
}

export default Navbar
