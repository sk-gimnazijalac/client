import Image from 'next/image'

const HeroSection = () => {
  return (
    <>
      <div className="hero w-width lg:h-192 h-96">
        <div className="w-full">
        <div className="justify-center lg:p-36 text-center lg:text-left p-16 flex flex-col">
          <h1 className="lg:text-7xl text-5xl">Gimnazijalac</h1>
          <h3 className="lg:w-1/2 italic lg:text-2xl text-md pt-4">
            Šah klub svih bivših, sadašnjih i budućih gimnazijalaca kao i
            ostalih ljubitelja šaha
          </h3>
        </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
