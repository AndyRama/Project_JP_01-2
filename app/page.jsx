import Hero from "./components/Hero"
import CardDescriptionL from "./components/CardDescriptionL"
import RecentBlog from "./components/RecentBlog"
import Subscribe from "./components/Subscribe"

export default function Home() {
  return (
    <>
      <Hero className="pt-32 md:pt-22 pb-0 lg-pb:10" />
      <CardDescriptionL className=" pt-14 pb-15" />
      <RecentBlog className="pt-14 pb-15 lg:pb-32"/>
      <Subscribe className="py-16 pt-64 -mt-48 lg:py-32"/>
    </>
  )
}
