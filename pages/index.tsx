import type { NextPage } from 'next'
import Seo from '../components/seo'
import Posts from '../components/posts'
import Layout from '../components/layout'
import AboutUs from '../components/about-us'
import Contact from '../components/contact'
import HeroSection from '../components/hero-section'
import Registration from '../components/registration'

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo />
      <HeroSection />
      <Posts />
      <AboutUs />
      <Contact />
      <Registration />
    </Layout>
  )
}

export default Home
