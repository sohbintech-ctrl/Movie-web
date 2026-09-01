export default function WatchlistCard() {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Movie Title</h3>

          <p className="mt-1 text-gray-600">Action • 2025</p>

          <p className="mt-2 text-sm text-gray-500">⭐ 8.5</p>

          <span className="mt-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
            Want to Watch
          </span>
        </div>

        <div className="flex gap-2 sm:items-center">
          <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm text-white">
            Edit
          </button>

          <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
