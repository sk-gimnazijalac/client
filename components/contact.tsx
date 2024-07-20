import Image from 'next/image'
import KnightIcon from '../public/chess-knight-white.svg'
import RookIcon from '../public/chess-rook-white.svg'
import PawnIcon from '../public/chess-pawn.svg'
import { ReactNode } from 'react'
const Contact = () => {
  return (
    <section className="text-color text-center bg-contact p-24">
      <div className="relative">
        <h1 className="my-6 text-black text-center lg:text-left font-bold">
          Kontakt informacije
        </h1>
      </div>
      <div className="flex flex-col md:flex-row my-16 gap-8 items-center justify-center md:flex-wrap">
        <ContactCard
          icon={RookIcon}
          title="Rukovodstvo:"
          bgColor="black"
          textColor="white"
        >
          <h4 className="font-bold mb-2">Predsednik:</h4>
          <h4 className="mb-6">Ivan Tot - 0692705990</h4>
          <h4 className="font-bold">Sekretar:</h4>
          <h4>Martin Hlozan - 062558083</h4>
        </ContactCard>

        <ContactCard
          icon={PawnIcon}
          title="Email adrese:"
          bgColor="white"
          textColor="black"
        >
          <h4 className="font-bold mb-2">Sahovski klub Gimnazijalac:</h4>
          <h4 className="mb-6"> gimnazijalacinfo@gmail.com</h4>
          <h4 className="font-bold">Gimnazija:</h4>
          <h4>info@gimnazijabp.edu.rs</h4>
        </ContactCard>

        <ContactCard
          icon={KnightIcon}
          title="Linkovi:"
          bgColor="black"
          textColor="white"
        >
          <a
            className="font-bold mb-8 underline hover:text-zinc-600 inline-block"
            href="https://lichess.org/team/gimnazijalac"
            target="_blank"
            rel="noreferrer"
          >
            <h4>Lichess</h4>
          </a>
          <br />
          <a
            className="font-bold mb-8 underline hover:text-zinc-600 inline-block"
            href="https://www.facebook.com/%C5%A0ah-klub-Gimnazijalac-979024278831201"
            target="_blank"
            rel="noreferrer"
          >
            <h4>Facebook</h4>
          </a>
        </ContactCard>
      </div>
      <div className="my-12 text-black  lg:mx-32" />
    </section>
  )
}

const ContactCard = (props: {
  children: ReactNode
  icon: string
  title: string
  bgColor: 'black' | 'white'
  textColor: 'black' | 'white'
}) => {
  const { children, icon, title, bgColor, textColor } = props
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-2xl relative transform transition duration-500 hover:scale-110">
      <div
        className={`px-6 pt-16 h-[420px] min-w-[300px] bg-${bgColor} text-${textColor} hover:text-[#a55d08]`}
      >
        <Image width={35} height={35} priority src={icon} alt="" />
        <h3 className="font-bold mb-6">{title}</h3>
        {children}
      </div>
    </div>
  )
}

export default Contact
