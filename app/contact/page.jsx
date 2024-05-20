import React from 'react'
import SubHero from '../components/about/SubHero'
import ContactForm from '../components/contact/ContactForm'
import CardInfo from '../components/contact/CardInfo'

const page = () => {
  return (
    <>
      <SubHero className="pt-32 pb-24" title="Contact" subTitle=""/>
      <CardInfo/>
      <ContactForm />
    </>
  )
}

export default page
