import Logo from '../public/logo.jpg'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="text-center nav-background-color flex flex-col justify-between items-center">
      <div>
        <p className="p-2 text-color-header-footer">Šah Klub Gimnazijalac</p>
        <p className="text-color-header-footer">gimnazijalacinfo@gmail.com</p>
        <p className="text-color-header-footer p-2">
          Trg bratstva jedinstva 23, 21400 Backa Palanka, Srbija
        </p>
      </div>
      <div className="relative w-16 md:w-24 h-16 md:h-24 my-6 md:mb-12">
        <Image
          alt="Footer logo"
          src={Logo.src}
          layout="fill"
          objectFit="fill"
          quality={100}
        />
      </div>
      <p className="text-color-header-footer mb-2">
        Copyright @{new Date().getFullYear()}
      </p>
    </footer>
  )
}
