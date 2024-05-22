import React from 'react'
import SubHero from '../components/about/SubHero'
import Subscribe from '../components/Subscribe'
import Story from '../components/about/Story'

const Page = () => {
  return (
    <>
      <SubHero
        className="pt-32"
        title="Le Coeur de la team"
        subTitle="nos valeurs"
      />
      <Story />
      <Subscribe className="py-16 pt-32 lg:py-32" />
    </>
  )
}

export default Page
