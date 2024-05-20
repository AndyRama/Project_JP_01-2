import React from 'react'
import Hero from '../components/about/SubHero'
import ContactForm from '../components/ContactForm'

const page = () => {
  return (
    <>
      <Hero className="pt-32 pb-24" title="Contact" subTitle=""/>
      <ContactForm />
    </>
  )
}

export default page
