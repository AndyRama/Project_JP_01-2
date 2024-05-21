import React from 'react'
import SubHero from './../components/about/SubHero'
import PricingPack from '../components/prestation/PricingPack'

export const metadata = {
  title: 'Prestations Unlcoaching',
}
const page = () => {
  return (
    <>
      <SubHero className="pt-32" title="Prestations" />
      <PricingPack />
    </>
  )
}

export default page
