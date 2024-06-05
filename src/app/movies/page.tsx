"use client";

import { useEffect, useState } from "react";
import { MovieCard } from "@/Components/MovieCard";

interface Movie {
  title: string;
  rating: number;
  year: number;
  poster: string;
  director: string;
  cast: string;
  plot: string;
}

export const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Récupération des filmss via l'API
    const fetchMovies = async () => {
      const response = await fetch("/api/movies");
      const data = await response.json();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <div
      className="lg:grid md:grid-cols-2 w-full h-fit bg-right-top bg-fixed lg:pl-40"
      style={{ backgroundImage: "url('/images/background.webp')" }}
    >
      {movies.map((movie, index) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
};
