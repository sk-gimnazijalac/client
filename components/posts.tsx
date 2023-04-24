import Image from 'next/image'
import Link from 'next/link'
import posts from '../public/database/landing-page-posts/posts.json'

export default function Posts() {
  return (
    <div className="flex flex-col md:flex-row my-16 gap-6 items-center justify-center md:flex-wrap">
      {posts.map((value) => {
        return (
          <div
            className="max-w-sm rounded overflow-hidden shadow-2xl lg:h-[550px] relative card-bg-color"
            key={`posts-wrapper-${value.key}`}
          >
            <div className="relative h-[200px] lg:min-h-[300px]">
              <Image
                src={value.src}
                alt="Chess post"
                loading="lazy"
                layout="fill"
                objectFit="cover"
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
  )
}
