import React, { ReactElement, useState, useEffect } from "react";
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Loader from "../components/loading/Loader";
import Story from "../components/story/Story";


export default function Home():ReactElement {
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2800)
  },[])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {
          loading ? (
            <Loader />
          ) : (
            <>
            <Navbar />
            <Hero />
            <Story />
            </>
          )
        }
      </main>
    </>
  )
}
