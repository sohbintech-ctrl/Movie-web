"use client";
import { useEffect, useState } from "react";
import MovieCard from "./moviecard";

export default function MovieExplorer({setWatchMovies,setMovies,filteredWatchMovies}:any){
  

  const fetchMovies=async()=>{
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    );
    const data=await response.json();
   // console.log(data.results);
    setMovies(data.results);
  } 

  useEffect(()=>{
  fetchMovies();
  },[]);

  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Discover Movies
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {
          filteredWatchMovies.map((movie:any)=>{
            return <MovieCard movie={movie} key={movie.id} setWatchMovies={setWatchMovies}/>;
          })
        }
       
       
      </div>
    </section>
  );
}
