"use client";

import MovieExplorer from "./movieexplorer";
import Watchlist from "./watchlist";
import SearchBar from "./searchbar";
import Stats from "./stats";

export default function Dashboard() {
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
          <MovieExplorer />
        </div>

        <div className="mt-12">
          <Watchlist />
        </div>
      </div>
    </main>
  );
}
