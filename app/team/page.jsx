import React from 'react'
import SubHero from '../components/about/SubHero'
import Subscribe from '../components/Subscribe'


const Page = () => {
  return (
    <>
      <SubHero className="pt-32" title="Le coeur de la team" />
      <Subscribe className="py-16 pt-32 lg:py-32" />
    </>
  )
}

export default Page
