import React from 'react'
import SubHero from '../components/about/SubHero'
import Subscribe from '../components/Subscribe'


const aboutPage = () => {
  return (
    <>
      <SubHero className="pt-52 pb-24" />
      <Subscribe className="py-5 lg:py-32 bg-orange-300"/>
    </>
  )
}

export default aboutPage
