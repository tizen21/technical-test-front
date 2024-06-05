import Image from "next/image";
import { Eye } from "lucide-react";

interface Movie {
  title: string;
  rating: number;
  year: number;
  poster: string;
  genre: string;
  director: string;
  cast: string[];
  plot: string;
}

interface MovieCardProps {
  movie: Movie;
  isPriority?: boolean;
}

export const MovieCard = ({ movie, isPriority = false }: MovieCardProps) => {
  return (
    <div className="flex flex-col rounded-sm  items-center p-4 m-4 max-md:gap-4 border shadow transition-colors bg-gray-300 hover:border-gray-300 hover:bg-gray-100 cursor-pointer lg:flex-row lg:grid-flow-row text-nowrap">
      <Image
        src={movie.poster}
        alt={movie.title}
        width={120}
        height={170}
        className=""
        priority={isPriority}
      />
      <div className="flex flex-col justify-center overflow-hidden lg:w-2/3">
        <h2 className="text-xl font-bold uppercase m-2">{movie.title}</h2>
        <div className="flex space-x-2 font-light justify-center overflow-hidden w-fit truncate">
          <span className="year bg-yellow-300 text-black text-sm px-2 py-1 rounded">
            {movie.year}
          </span>
          <span className="rating bg-yellow-300 text-black text-sm px-2 py-1 rounded">
            {movie.rating}
          </span>
          <span className="genre bg-yellow-300 text-black text-sm px-2 py-1 rounded">
            {movie.genre}
          </span>
        </div>
        <div className="flex flex-col lg:flex-row m-2 w-full">
          <div className="flex flex-col items-center space-x-2 lg:flex-row overflow-auto">
            <span className="">Directed by:</span>
            <p className="font-bold truncate">{movie.director}</p>
          </div>
        </div>
      </div>
      {/* <div className="bg-yellow-300 border-2 border-black">
        <Eye size={32} />
      </div> */}
    </div>
  );
};
