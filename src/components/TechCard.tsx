import { FaStar } from "react-icons/fa"
import type { TechType } from "../type"

export interface TechCardProps {
    tech: TechType
}

export default function TechCard({ tech }: TechCardProps) {
    
    return(
        <>
        <div>
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between">
                    <img className="h-6" src={tech.icon} alt="" />
                    <div className="badge badge-soft badge-info">Info</div>
                </div>
                <div>
                    <h2>{tech.name}</h2>
                    <p>{tech.description}</p>
                </div>
                <div>
                    <p>{tech.category}</p>
                    <p>{tech.difficulty}</p>
                    <p><FaStar />{tech.rating}</p>
                </div>
            </div>
        </div>
        </>
    )
}