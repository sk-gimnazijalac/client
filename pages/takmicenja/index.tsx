import Head from 'next/head'
import Layout from '../../components/layout'
import { NextPage } from 'next'
import competions from './../../public/database/competition-page-data/competition.json'

import Image from 'next/image'

const Takmicenja: NextPage = () => {
  return (
    <>
      <Head>
        <title>Takmičenja</title>
      </Head>
      <main className="app-background-color">
        <Layout>
          {competions.map((competition) => {
            return (
              <div className="my-12 text-color text-center lg:mx-36 mx-6">
                <div className="bg-white min-h-[200px] rounded-md shadow-xl p-12">
                  <div className="text-color relative">
                    <div className="w-full flex justify-center">
                      <div className="bg-orange p-2 rounded-full flex align-center w-12 h-12">
                        <Image
                          src={'/medal-white.svg'}
                          alt="icon"
                          height={45}
                          width={45}
                        />
                      </div>
                    </div>
                    <h1 className="my-2">{competition.name}</h1>
                    <p className="my-4">{competition.description}</p>
                  </div>

                  <Links links={competition.links} />

                  <div className="flex md:flex-row flex-col justify-center align-center">
                    {competition.teams?.map((team) => (
                      <div className="flex flex-col md:w-1/2">
                        <h2>{team.name}:</h2>
                        <Links links={team.links} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </Layout>
      </main>
    </>
  )
}

const Links = (props: {
  links: {
    href: string
    text?: string
  }[]
}) => {
  const { links } = props

  return (
    <div className="text-color flex flex-col lg:flex-row flex-wrap gap-4 mx-auto my-0 w-3/4 mb-4 justify-center items-center">
      {links.map((link: { href: string; text?: string }) => (
        <a
          className="underline hover:text-zinc-600"
          href={link.href}
          rel="noreferrer"
          target="_blank"
        >
          {link.text ? link.text : link.href}
        </a>
      ))}
    </div>
  )
}

export default Takmicenja
