import React from 'react'
import SubHero from '../components/about/SubHero'
import Posts from '../components/blog/Posts'
import Subscribe from '../components/Subscribe'

export const metadata = {
  title: "Blogs - Lemurian by Andy Ramaroson",
}

const page = () => {
  return (
    <>
      <SubHero className="pt-32 pb-24" title="Recent Updates" subTitle="My Blog"/>
      <Posts className="pt-0 pb-52" itemsPerPage={9}/>
      <Subscribe className="py-16 pt-64 lg:py-32 "/>
    </>

  )
}

export default page
