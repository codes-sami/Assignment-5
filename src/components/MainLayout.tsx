import { useState } from "react";
import type { TechType } from "../type";
import TechList from "./TechList";
import YourStack from "./YourStack";
import { toast } from "react-toastify";

interface MainLayoutProps {
    techPromise: Promise<TechType[]>;
}

export default function MainLayout({ techPromise }: MainLayoutProps) {

    const [selectedTech, setSelectedTech] = useState<TechType[]>([]);

    const handleAddToStack = (tech: TechType) => {
        setSelectedTech([...selectedTech, tech]);
        toast.success(`${tech.name} added to your stack!`);
    };

    const handleRemoveFromStack = (id: string) => {
    const removedTech = selectedTech.find(tech => tech.id === id);

    setSelectedTech(
        selectedTech.filter(tech => tech.id !== id)
    );

    toast.error(`${removedTech?.name} removed from your stack!`);
};

    const handleRemoveAll = () => {
        setSelectedTech([]);
    };

    return (
        <>
            <div>
                <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto">

                    <div className="col-span-3">
                        <TechList
                            selectedTech={selectedTech}
                            techPromise={techPromise}
                            handleAddToStack={handleAddToStack}
                        />
                    </div>

                    <YourStack
                        selectedTech={selectedTech}
                        handleRemoveFromStack={handleRemoveFromStack}
                        handleRemoveAll={handleRemoveAll}
                    />

                </div>
            </div>
        </>
    );
}