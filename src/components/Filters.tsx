
import { Form, Link } from "react-router-dom";
import { Button } from "./ui/button";
import FormInput from "./FormInput";
import type { ReactNode } from "react";

const Filters = ({ term, mode }: { term: string | undefined; mode: string }): ReactNode => {
	return (
		<Form className="my-6 py-2 flex flex-col gap-2 p-2">
			<FormInput
				type="search"
				label="Search for"
				name="term"
				defaultValue={term}
				placeholder="example 'nasa' 'starship'"
			/>
			<div className="self-end flex gap-2">
				<Button type="submit" size="lg">
					Search
				</Button>
				<Button type="button" variant="outline" size="lg">
					<Link to={mode}>Reset</Link>
				</Button>
			</div>
		</Form>
	);
};
export default Filters;