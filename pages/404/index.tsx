import { NextPage } from 'next'
import Error404 from '../../components/404'
import Layout from '../../components/layout'

const Custom404: NextPage = () => {
  return (
    <Layout>
      <Error404 />
    </Layout>
  )
}

export default Custom404
