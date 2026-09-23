import type { TechType } from "../type";

export interface YourStackProps {
  selectedTech: TechType[];
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}

export default function YourStack({
  selectedTech,
  handleRemoveFromStack,
  handleRemoveAll,
}: YourStackProps) {
  return (
    <div className="mt-44.5">
      
      <div className="mb-4">
        <h2 className="text-xl font-bold">Your Stack</h2>

      </div>

      
      {selectedTech.length === 0 ? (
        <div className="border border-gray-200 rounded-lg p-6 text-center">
          <p className="text-gray-500">No technologies selected</p>

          
        </div>
      ) : (
        
        <div className="flex flex-col gap-3">
          {selectedTech.map((tech) => (
            <div
              key={tech.id}
              className="border border-gray-200 rounded-lg p-3 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 object-contain"
                />

                <div>
                  <h3 className="font-semibold">{tech.name}</h3>

                  <p className="text-sm text-gray-500">{tech.category}</p>
                </div>
              </div>

              <button
                onClick={() => handleRemoveFromStack(tech.id)}
                className="text-gray-400 hover:text-red-500 text-xl"
              >
                 x
              </button>
            </div>
          ))}

          
          <button
            onClick={handleRemoveAll}
            className="mt-2 text-sm text-red-500 hover:text-red-600"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}
