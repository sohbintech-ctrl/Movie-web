export default function MovieCard() {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm">
      <div className="flex h-72 items-center justify-center bg-gray-200">
        <span className="text-gray-500">Movie Poster</span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">Movie Title</h3>

        <p className="mt-1 text-sm text-gray-500">Action • 2025</p>

        <p className="mt-2 text-sm text-gray-600">⭐ 8.5</p>

        <button className="mt-4 w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white">
          Add to Watchlist
        </button>
      </div>
    </div>
  );
}
