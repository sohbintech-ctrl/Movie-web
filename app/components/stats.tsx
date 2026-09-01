export default function Stats() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-xl bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">Movies Found</p>
        <p className="mt-1 text-2xl font-bold text-gray-900">0</p>
      </div>

      <div className="rounded-xl bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">My Watchlist</p>
        <p className="mt-1 text-2xl font-bold text-gray-900">0</p>
      </div>

      <div className="rounded-xl bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">Watched</p>
        <p className="mt-1 text-2xl font-bold text-gray-900">0</p>
      </div>
    </div>
  );
}
