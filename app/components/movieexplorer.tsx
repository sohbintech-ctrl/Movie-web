import MovieCard from "./moviecard";

export default function MovieExplorer() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Discover Movies
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  );
}
