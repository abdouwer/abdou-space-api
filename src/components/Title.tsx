import type { ReactNode } from "react";

const Title = ({ text }: { text: string }): ReactNode => {
	return (
		<div>
			<h3 className="my-6 text-4xl capitalize text-blue-900 p-2"><i className="fa-regular fa-newspaper"></i>  {text}</h3>
		</div>
	);
};
export default Title;