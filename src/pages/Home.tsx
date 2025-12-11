import { BlogsLink, NewsLink } from "@/components"

const Home = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-950 p-8">
        <BlogsLink />
        <NewsLink />
    </section> 
  )
}

export default Home