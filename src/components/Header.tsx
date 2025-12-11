import { Link } from "react-router-dom";
import spaceImg from "../assets/imgs/api-svgrepo-com.svg";
import type { ReactNode } from "react";
const Header = () : ReactNode => {
    return (
        <header className="bg-slate-900">
            <div className="align-element grid grid-cols-2 md:grid-xol-3 p-2">
                <Link to="/" className="justify-self-start">
                    <h1 className="mars-font txt-lg pt-2 tracking-[0.8rem] text-white">api fun</h1>
                </Link>
                <Link to="/" className="justify-self-end self-center md:justify-self-center">
                    <img src={spaceImg} alt="logo-top" className="h-12 w-12 object-cover" />
                </Link>
            </div>
        </header>
    );
  
}

export default Header