import React from 'react'
import SubHero from './../components/about/SubHero'
import PricingPack from '../components/prestation/PricingPack'
import PricingDetails from '../components/prestation/PricingDetails'
import PricingEbook from '../components/prestation/PricingEbook'
import Subscribe from '../components/Subscribe'

export const metadata = {
  title: 'Unlcoaching by Jeremy Prat',
}
const page = () => {
  return (
    <>
      <SubHero className="pt-32" title="Prestations" />
      <PricingPack />
      <PricingDetails />
      <PricingEbook />
      <SubHero className="pt-32" />
      <Subscribe className="py-16 pt-32 lg:py-32 " />
    </>
  )
}

export default page
