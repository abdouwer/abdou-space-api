import LinksDesktop from "./LinksDesktop"
import LinksMobile from "./LinksMobile"

 const Navbar = () => {
  return (
    <nav className="bg-slate-900 py-5">
        <div className="align-element">
            <LinksMobile />
            <LinksDesktop />
        </div>
    </nav>
  )
}

export default Navbar