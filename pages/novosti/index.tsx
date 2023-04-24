import Head from 'next/head'
import Layout from '../../components/layout'
import Link from 'next/link'
import posts from '../../public/database/all-posts/all-posts.json'
import { NextPage } from 'next'
import Image from 'next/image'

const Novosti: NextPage = () => {
  return (
    <>
      <Head>
        <title>Novosti</title>
      </Head>
      <main className="app-background-color">
        <Layout>
          <h1 className="text-center my-6">Sve novosti</h1>
          <div className="flex flex-col md:flex-row my-16 gap-6 items-center justify-center md:flex-wrap">
            {posts.map((value) => {
              return (
                <div
                  className="max-w-sm rounded overflow-hidden shadow-2xl lg:h-[550px] relative card-bg-color"
                  key={`posts-wrapper-${value.key}`}
                >
                  <div className="h-[200px] lg:min-h-[300px] relative">
                    <Image
                      layout="fill"
                      src={value.src}
                      alt="Chess post"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-6 py-4 lg:min-h-[200px]">
                    <div className="font-bold text-xl mb-2 text-color">
                      {value.title}
                    </div>
                    <p className="text-gray-700 text-base text-color">
                      {value.shortDescription}
                    </p>
                  </div>
                  <Link href={`/post/${value.key}`}>
                    <p className="px-6 py-2 lg:py-0 text-color cursor-pointer">
                      Procitaj vise -&gt;
                    </p>
                  </Link>
                </div>
              )
            })}
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Novosti
