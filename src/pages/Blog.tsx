import { CardsGrid, Filters, Overview, PaginationContainer, Title } from "@/components";
import { objectsPerPage } from "@/utils/constants";
import { snapiBlogFetch } from "@/utils/customFetch"
import { type FiltersParams, type BlogResponse, type BlogsResponseWithParams } from "@/utils/types";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

const newsParams = {
    news_site_exclude: "SpacePolicyOnline.com", //exclure car il fourni de mauvaises photos
    limit: objectsPerPage,
    ordering: '-published_at',
};

export const blogsPageLoader: LoaderFunction= async ({ request }): Promise<BlogsResponseWithParams | null> => {
    try {
        const params: FiltersParams = Object.fromEntries([...new URL(request.url).searchParams.entries()])
        const formattedParams = {
            search: params.term ? params.term : "",
            offset: params.page ? objectsPerPage * (parseFloat(params.page) - 1) : 0,
            ...newsParams
        };

        const response = await snapiBlogFetch.get<BlogResponse>("", {
            params: formattedParams
        });

        return { response: response.data, params };
    } catch (error) {
        /* eslint-disable-next-line no-console */
        console.log(error)
        return null;
    }
}


const Blog = () => {
    const data =  useLoaderData() as BlogsResponseWithParams ;
    const { response, params } = data;

    return (
        <section className="section">
            <Title text="All blogs" />
            <Filters term={params.term} mode="blogs" key={params.term} />
            <Overview objects={data} />
            <CardsGrid objects={response} />
            <PaginationContainer />
        </section>
    )
}

export default Blog