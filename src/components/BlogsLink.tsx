import { Link } from "react-router-dom";

const BlogsLink = () => {
	return (
		<article className="w-full h-[40vh] blogs">
			<div className="align-element text-white p-2 mt-20">
				<p className="font-bold text-4xl capitalize">All blogs</p>
				<button type="button" className="mt-8 slider-btn">
					<Link to="/blogs">Explore</Link>
				</button>
			</div>
		</article>
	);
};
export default BlogsLink;