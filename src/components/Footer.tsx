import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const Footer = (): ReactNode => {
	return (
		<footer className="bg-slate-900 text-white">
			<div className="align-element min-h-[15vh] flex flex-col justify-center items-center">
				<p className="my-2">-2025-</p>
				<p className="mars-font text-2xl my-4 text-center">Fun API, by Abdouramane</p>
				<p className="underline">Resources:</p>
				<p className="text-center">
					<Link to={"https://www.nasa.gov/"} target="_blank">
						Nasa
					</Link>
					|
					<Link to={"https://api.nasa.gov/"} target="_blank">
						Nasa API
					</Link>
					|
					<Link to={"https://www.spaceflightnewsapi.net/"} target="_blank">
						Spaceflight News API
					</Link>
				</p>
			</div>
		</footer>
	);
};
export default Footer;