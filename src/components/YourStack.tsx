import type { TechType } from "../type"

export interface YourStackProps {
    selectedTech: TechType[];
}

export default function YourStack({selectedTech}:YourStackProps) {
    
    return(
        <>
        <div className="bg-blue-400 mt-44.5">
            <h2>{selectedTech.length} Stack Selected</h2>
            {
                selectedTech.map(tech=>
                    <div key={tech.id}>
                        {tech.name}
                    </div>
                )
            }
        </div>
        </>
    ) 
}