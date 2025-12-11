import { Link } from "react-router-dom";

const NewsLink = () => {
	return (
		<article className="w-full h-[40vh] news">
			<div className="align-element text-white p-2 mt-20">
				<p className="font-bold text-4xl capitalize">All News</p>
				<button type="button" className="mt-8 slider-btn">
					<Link to="/news">Explore</Link>
				</button>
			</div>
		</article>
	);
};
export default NewsLink;