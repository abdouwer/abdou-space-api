
import type { Blogs, News } from "@/utils/types";
import { CircleArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const InformationPageCard = ({ information }: { information: News | Blogs}) => {
	const { url, image_url, title, published_at, news_site, summary } = information;

	return (
		<div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-4 shadow-lg shadow-blue-900/30 rounded-lg">
			<div className="p-2 overflow-hidden lg:col-span-1 h-[300px] md:h-[400px] lg:h-full">
				<Link to={url} target="_blank">
					<img src={image_url} alt="main-img" className="h-full w-full object-cover" />
				</Link>
			</div>
			<div className="p-2 overflow-hidden lg:col-span-3 h-[300px] md:h-[200px] lg:h-full">
				<p className="text-2xl font-bold text-blue-900">{title}</p>
				<p>{published_at.split("T")[0]}</p>
				<p className="flex items-center text-orange-900">
					<span>{news_site}</span>
					<span>|</span>
					<span className="flex gap-x-2">
						Read from source
						<Link to={url} target="_blank">
							<CircleArrowRight
								color="var(--clr-violet)"
								className="hover:scale-150 transition-all"
							/>
						</Link>
					</span>
				</p>
				<p className="mt-4">{summary}</p>
			</div>
		</div>
	);
};
export default InformationPageCard;