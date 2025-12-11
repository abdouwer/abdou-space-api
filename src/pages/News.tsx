import { CardsGrid, Filters, Overview, PaginationContainer, Title } from "@/components";
import { snapiCustomFetch } from "@/utils/customFetch"
import { type FiltersParams, type NewsResponse, type NewsResponseWithParams } from "@/utils/types";
import { useLoaderData, type LoaderFunction } from "react-router-dom";
import { objectsPerPage } from "@/utils/constants";

const newsParams = {
    news_site_exclude: "SpacePolicyOnline.com", //exclure car il fourni de mauvaises photos
    limit: objectsPerPage,
    ordering: '-published_at',
};

export const newsPageLoader: LoaderFunction= async ({ request }): Promise<NewsResponseWithParams | null> => {
    try {
        const params: FiltersParams = Object.fromEntries([...new URL(request.url).searchParams.entries()])
        const formattedParams = {
            search: params.term ? params.term : "",
            offset: params.page ? objectsPerPage * (parseFloat(params.page) - 1) : 0,  // 20 element par page et le offset permet de dire par quel element commencer sur la page suivante
            ...newsParams 
        };

        const response = await snapiCustomFetch.get<NewsResponse>("", {
            params: formattedParams
        });

        return { response: response.data, params };
    } catch (error) {
        /* eslint-disable-next-line no-console */
        console.log(error)
        return null;
    }
}


const News = () => {
    const data =  useLoaderData() as NewsResponseWithParams ;
    const { response, params } = data;

    return (
        <section className="section">
            <Title text="All news" />
            <Filters term={params.term} mode="news" key={params.term} />
            <Overview objects={data} />
            <CardsGrid objects={response} />
            <PaginationContainer />
           
        </section>
    )
}

export default News