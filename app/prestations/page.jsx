import React from 'react'
import SubHero from './../components/about/SubHero'
import PricingPack from '../components/prestation/PricingPack'
import PricingDetails from '../components/prestation/PricingDetails'
import PricingEbook from '../components/prestation/PricingEbook'

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
    </>
  )
}

export default page
