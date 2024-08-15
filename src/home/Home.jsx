import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Resister from './Resister'
import LocationSprade from './LocationSprade'
import AppSection from './AppSection'
import Sponsor from './Sponsor'
import AboutUs from './AboutUs'

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeCategory />
      <CategoryShowCase />
      <Resister />
      <LocationSprade />
      <AboutUs />
      <AppSection />
      <Sponsor />
    </div>
  )
}

export default Home;