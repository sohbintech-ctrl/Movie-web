
export default function MovieCard({movie,setWatchMovies}:any) {
  const{title,vote_average,release_date,poster_path,id}=movie;
  //console.log(movie);
  const handleSubmit=(e:any)=>{
    e.preventDefault();
    const watchValue={
      title,
      vote_average,
      release_date,
      id
    }
    //console.log(watchValue);
    setWatchMovies((prev:any)=>[...prev,watchValue])

  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="flex h-72 items-center justify-center bg-gray-200">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

          <p className="mt-1 text-sm text-gray-500">
            Action • {release_date.slice(0, 4)}
          </p>

          <p className="mt-2 text-sm text-gray-600">⭐{vote_average}</p>

          <button className="mt-4 w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white">
            Add to Watchlist
          </button>
        </div>
      </div>
    </form>
  );
}
