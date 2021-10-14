import Image from 'next/image'

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[550px] xl:h-[600px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        className="object-cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-base md:text-lg">
          Not sure where to go? Perfect
        </p>

        <button className="bg-white text-purple-500 px-10 py-3 rounded-full shadow-md md:font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
