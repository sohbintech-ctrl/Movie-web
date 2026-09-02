"use client";

import MovieExplorer from "./movieexplorer";
import Watchlist from "./watchlist";
import SearchBar from "./searchbar";
import Stats from "./stats";
import { useState } from "react";

export default function Dashboard() {
   const [watchMovies,setWatchMovies] = useState([]);


   const handleDelete=(id:any)=>{
   const deleteMovie=watchMovies.filter((watchMovie:any)=>{
    return watchMovie.id!==id;
    })
    setWatchMovies(deleteMovie);
   }
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Movie Watchlist
        </h1>

        <p className="mb-8 text-gray-600">
          Discover movies and save your favorites to your watchlist.
        </p>

        <Stats />

        <div className="mt-8">
          <SearchBar />
        </div>

        <div className="mt-10">
          <MovieExplorer setWatchMovies={setWatchMovies}/>
        </div>

        <div className="mt-12">
          <Watchlist watchMovies={watchMovies} handleDelete={handleDelete}/>
        </div>
      </div>
    </main>
  );
}
