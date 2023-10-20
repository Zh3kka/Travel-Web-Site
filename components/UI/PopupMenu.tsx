import { NAV_LINKS } from '@/constants'
import Link from 'next/link'

type PopupMenuProp = {
  onClose: () => void
}

const PopupMenu = ({ onClose }: PopupMenuProp) => {
  return (
    <div className="absolute top-[90%] right-4 bg-white border border-gray-10 px-4 py-5 shadow-xl rounded-2xl">
      <ul>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-20 text-black-500 flexCenter cursor-pointer pb-4 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default PopupMenu
