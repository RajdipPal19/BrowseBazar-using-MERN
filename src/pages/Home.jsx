import React from 'react'
import Hero from './Hero'
import Offer from './Offer'
import Popular from './Popular'
import NewCollection from './NewCollection'
import NewsLetter from './NewsLetter'
const Home = () => {
  return (
    <>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
      <NewsLetter/>
    </>
  )
}

export default Home