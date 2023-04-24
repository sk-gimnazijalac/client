import Posts from '../public/database/all-posts/all-posts.json'
import { useRouter } from 'next/router'
import Custom404 from './404'
import Image from 'next/image'

export default function SinglePost() {
  const router = useRouter()
  let id = -1
  let postsIndex = -1
  if (router.query.id !== undefined) {
    id = +router.query.id
    postsIndex = id - 1
  }

  return Posts[postsIndex] ? (
    <div className="w-full h-auto lg:p-12 text-center">
      <h1 className="mb-6">{Posts[postsIndex].title}</h1>
      <div className="flex justify-center my-6">
        <h4 className="text-center w-2/3 font-semibold">
          {Posts[postsIndex].shortDescription}
        </h4>
      </div>

      <div className="flex flex-row gap-2 my-3 lg:gap-4 lg:gap-12 justify-center items-center">
        <p>Datum : {Posts[postsIndex].date}</p>
        <h2>|</h2>
        <p>Autor posta : {Posts[postsIndex].author}</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative w-[95vw] h-[300px] lg:h-[500px] lg:w-[800px] rounded-3xl">
          <Image
            priority
            alt="post image"
            src={Posts[postsIndex].src}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <p className="my-12 lg:my-0 lg:mx-36  p-2 lg:p-12 first-letter:text-4xl first-letter:font-bold">
        {Posts[postsIndex].description}
      </p>
    </div>
  ) : (
    <Custom404 />
  )
}
