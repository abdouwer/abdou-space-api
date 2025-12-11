import type { ReactNode } from "react";

const Title = ({ text }: { text: string }): ReactNode => {
	return (
		<div>
			<h2 className="my-6 text-4xl capitalize text-yellow-700 p-2"><i className="fa-regular fa-newspaper"></i>  {text}</h2>
		</div>
	);
};
export default Title;