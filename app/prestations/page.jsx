import React from 'react'
import SubHero from './../components/about/SubHero'
import PricingPack from '../components/prestation/PricingPack'
import PricingDetails from '../components/prestation/PricingDetails'

export const metadata = {
  title: 'Terms - Unlcoaching by Jeremy Prat',
}
const page = () => {
  return (
    <>
      <SubHero className="pt-32" title="Prestations" />
      <PricingPack />
      <PricingDetails />
    </>
  )
}

export default page
