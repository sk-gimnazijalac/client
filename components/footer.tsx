import Logo from '../public/logo.jpg'
import Image from 'next/image'
import Registration from './registration'

export default function Footer() {
  return (
    <footer className="bg-black py-8 md:px-28 px-12">
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="flex justify-center gap-6 flex-col md:flex-row">
          <div className="relative w-32 md:w-40 h-32 md:h-40 my-auto footer-logo-container md:mx-0 mx-auto">
            <Image
              alt="Footer logo"
              src={Logo.src}
              layout="fill"
              objectFit="fill"
              quality={100}
            />
          </div>
          <div className="flex justify-center md:gap-6">
            <div className="flex flex-col justify-center gap-2">
              <p className="text-color-header-footer mb-2 text-2xl">
                Šah Klub Gimnazijalac
              </p>

              <div className="flex gap-2">
                <Image
                  src="/email-white.svg"
                  alt="email"
                  width={20}
                  height={20}
                />
                <p className="text-color-header-footer">
                  gimnazijalacinfo@gmail.com
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/home-white.svg"
                  alt="email"
                  width={20}
                  height={20}
                />
                <p className="text-color-header-footer">
                  Trg bratstva jedinstva 23, 21400 Backa Palanka, Srbija
                </p>
              </div>

              <div className="flex gap-2">
                <Image
                  src="/facebook-white.svg"
                  alt="email"
                  width={20}
                  height={20}
                />
                <p className="text-color-header-footer">
                  <a href="https://www.facebook.com/p/%C5%A0ah-klub-Gimnazijalac-100064801324007/" className="cursor-pointer">
                    Facebook stranica
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Registration />
      </div>
      <div className="flex justify-center w-full pt-6">
        <p className="text-color-header-footer mb-2">
          Copyright @{new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
