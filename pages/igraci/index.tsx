import Head from 'next/head'
import { NextPage } from 'next'
import Layout from '../../components/layout'
import PlayersTableDesktop from '../../components/players-table-desktop'
import PlayersTableMobile from '../../components/players-table-mobile'

const Igraci: NextPage = () => {
  return (
    <>
      <Head>
        <title>Igrači</title>
      </Head>
      <main className="app-background-color">
        <Layout>
          <PlayersTableDesktop />
          <PlayersTableMobile />
        </Layout>
      </main>
    </>
  )
}

export default Igraci
