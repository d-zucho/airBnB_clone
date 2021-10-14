import Image from 'next/image'

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 hover:shadow-md transform transition duration-150 ease-out border border-opacity-50">
      {/* Left side with Image */}
      <div className="relative h-16 w-16 pr-2">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      {/* Right Side with Info */}
      <div>
        <h2 className="text-base md:text-lg">{location}</h2>
        <h3 className="text-xs text-gray-500">{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
