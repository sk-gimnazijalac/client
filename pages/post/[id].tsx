import Head from 'next/head'
import Layout from '../../components/layout'
import SinglePost from '../../components/single-post'
import { NextPage } from 'next'

const SinglePostPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <Layout>
        <SinglePost />
      </Layout>
    </>
  )
}

export default SinglePostPage
