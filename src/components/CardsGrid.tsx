import type { BlogResponse, NewsResponse } from "@/utils/types";
import type { ReactNode } from "react";
import InformationPageCard from "./InformationPageCard";

const CardsGrid = ({ objects }: { objects: NewsResponse | BlogResponse }): ReactNode => {
  return (
    <div className="grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px] mb-12"> 
        {objects.results.map((item, index) => (
            <InformationPageCard information={item} key={index} />
        ))}
    </div>
  )
}

export default CardsGrid;