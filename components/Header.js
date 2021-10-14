import Image from 'next/image'
import {
  SearchIcon,
  MenuIcon,
  GlobeAltIcon,
  UsersIcon,
  UserCircleIcon,
} from '@heroicons/react/solid'

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
      <div className="relative mr-2 flex items-center h-10 cursor-pointer my-auto">
        {/* using Nexths Img - which optimizes image as webP */}
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle */}

      <div className="relative flex w-full items-center">
        <input
          type="text"
          placeholder="Placeholder"
          className="py-2 px-2 md:px-3 md:py-3 text-sm placeholder-blueGray-300 text-gray-500 relative bg-white border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10 rounded-full md:text-base "
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full absolute right-1 mr-2 object-contain flex-shrink-0 p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline pl-4">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex border-2 p-2 rounded-full space-x-2 cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  )
}

export default Header
