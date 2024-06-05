import { MovieCard } from "@/Components/MovieCard";
import { Header } from "../Components/Header";
import { MoviesPage } from "./movies/page";

export default function Home() {
  return (
    <main className="flex flex-col max-lg:text-center overflow-auto lg:flex-row bg-gray-300">
      <Header />
      <MoviesPage />
    </main>
  );
}
