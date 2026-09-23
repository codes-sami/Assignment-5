import { use } from "react";
import type { TechType } from "../type"
import TechCard from "./TechCard";

export interface TechListProps {
    techPromise: Promise<TechType[]>;
}

export default function TechList({ techPromise }: TechListProps) {
    const techs = use(techPromise);
    
    return(
        <>
        <div>
            {
                techs.map(tech => {
                    return <TechCard key={tech.id} tech={tech}></TechCard>
                })
            }
        </div>
        </>
    ) 
}