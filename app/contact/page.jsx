import React from 'react'
import SubHero from '../components/about/SubHero'
import ContactForm from '../components/contact/ContactForm'

const page = () => {
  return (
    <>
      <SubHero className="pt-32 pb-24" title="Contact" subTitle=""/>
      <ContactForm />
    </>
  )
}

export default page
