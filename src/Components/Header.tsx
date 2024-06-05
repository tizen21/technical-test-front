import { Film } from "lucide-react";

export const Header = () => {
  return (
    <header className=" flex flex-col items-center justify-center py-4 bg-yellow-300 lg:h-screen lg:w-4/12 overflow-auto">
      <div className=" inline-flex gap-4 text-2xl font-semibold uppercase">
        <Film className="rounded-2xl" size={32} absoluteStrokeWidth={true} />
        <span>Movie Night</span>
      </div>
    </header>
  );
};
