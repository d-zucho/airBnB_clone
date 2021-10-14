import Image from 'next/image'

function MediumCard({ img, title }) {
  return (
    <div className="mb-10 cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-60 w-60 mb-2">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-md">{title}</h3>
    </div>
  )
}

export default MediumCard
