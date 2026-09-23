import { use } from "react";
import type { TechType } from "../type"
import TechCard from "./TechCard";

export interface TechListProps {
    techPromise: Promise<TechType[]>;
    handleAddToStack:(tech:TechType) => void;
    selectedTech:TechType[];
}

export default function TechList({ techPromise,handleAddToStack,selectedTech }: TechListProps) {
    const techs = use(techPromise);
    
    return(
        <><div className="mt-15 mb-9">
            <h2 className="text-[34px] font-bold pb-2.5">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent ">Technologies</span></h2>
            <p className="font-normal text-[15px] text-[#64748B]">Pick one technology per category to build your ideal stack.</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
            {
                techs.map(tech => {
                    return <TechCard   selectedTech={selectedTech}handleAddToStack={handleAddToStack} key={tech.id} tech={tech}></TechCard>
                })
            }
        </div>
        </>
    ) 
}