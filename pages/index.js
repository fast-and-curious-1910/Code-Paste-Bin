import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head> 
      <title>CodePasteBin</title>
      <link rel='icon' href='./favicon.ico'></link>
      </Head>

      <h1>
        Welcome to CodePasteBin !
      </h1>

      <p>
        Here you can share small text snips, or small code snips!
      </p>
    </>
  )
}
