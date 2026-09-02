export default function SearchBar({setSearch,search}:any) {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      className="w-full rounded-lg border bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2"
    />
  );
}
