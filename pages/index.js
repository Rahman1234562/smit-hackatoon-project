import Head from 'next/head'
import NavOut from '../Components/NavOut'
import { HomePage } from '../Components/homepage'
import Navbar from '../Components/Navbar'



export default function Home() {
  return (
    <>
      <Head>
        <title>smit hackatoon project</title>
        <meta name="description" content="Create Your own blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavOut/>
      <br />
      <HomePage/>

    </>
  )
}
