import { FaStar } from "react-icons/fa"
import type { TechType } from "../type"

export interface TechCardProps {
    tech: TechType
    handleAddToStack:(tech:TechType) => void;
     selectedTech:TechType[];
}

export default function TechCard({ tech,handleAddToStack, selectedTech }: TechCardProps) {
    
const isSelected = selectedTech.some(selected => selected.id === tech.id);

    return(
        <>
        <div>
            <div className=" flex flex-col space-y-4 p-6 border-[#F1F5F9] border-2 rounded-2xl">
                <div className="flex justify-between">
                    <img className="h-8" src={tech.icon} alt="" />
                    <div className="badge badge-soft badge-info">{tech.badge}</div>
                </div>
                <div className="flex flex-col gap-1.5">
                    <h2 className="text-[17px] font-bold">{tech.name}</h2>
                    <p className="text-[11px] text-[#64748B] font-normal">{tech.description}</p>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                    <p className="font-medium bg-[#F1F5F9] text-[#475569] rounded-sm px-3 py-1.5">{tech.category}</p>
                    <p>{tech.difficulty}</p>
                    <p className="flex gap-1 items-center font-semibold"><FaStar className="text-yellow-400" />{tech.rating}</p>
                </div>
                <button disabled={isSelected} onClick={()=> handleAddToStack(tech)} className=" disabled:bg-gray-400 text-white bg-black rounded-lg text-[12px] px-3 py-1.5 cursor-pointer">{isSelected? 'Added' : 'Add to Stack'}</button>
            </div>
        </div>
        </>
    )
}