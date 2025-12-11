import type { BlogsResponseWithParams, NewsResponseWithParams } from "@/utils/types"
import type { ReactNode } from "react";

const Overview = ({ objects }: { objects: NewsResponseWithParams | BlogsResponseWithParams  }): ReactNode => {
    const number: number = objects.response.count;
    return (
         <div className="my-6 text-xl text-blue-900 p-2">{number} matches</div>
    )
}

export default Overview