import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Resister from './Resister'
import LocationSprade from './LocationSprade'
import About from './About'
import AppSection from './AppSection'
import Sponsor from './Sponsor'

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeCategory />
      <CategoryShowCase />
      <Resister />
      <LocationSprade />
      <About />
      <AppSection />
      <Sponsor />
    </div>
  )
}

export default Home;