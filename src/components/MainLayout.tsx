

import { useState } from "react";
import type { TechType } from "../type";
import TechList from "./TechList";
import YourStack from "./YourStack";

interface MainLayoutProps {
   techPromise: Promise<TechType[]>;
}

export default function MainLayout({ techPromise }: MainLayoutProps) {

    const [selectedTech, setSelectedTech] = useState<TechType[]>([]);

    const handleAddToStack = (tech:TechType) => {
        setSelectedTech([...selectedTech,tech]);
    }
    
    return(
        <>
        <div>
            <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="col-span-3">
                <TechList  selectedTech={selectedTech} techPromise={techPromise} handleAddToStack={handleAddToStack}/>
            </div>
            <YourStack selectedTech={selectedTech}/>

        </div>
        </div>
        </>
    );
}

