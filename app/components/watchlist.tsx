import WatchlistCard from "./watchlistcard";

export default function Watchlist({watchMovies}:any) {
//console.log(watchMovies);
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">My Watchlist</h2>

        <span className="text-sm text-gray-500">0 movies</span>
      </div>

      <div className="space-y-4">
        {
        watchMovies.map((watchMovie:any)=>{
           return <WatchlistCard watchMovie={watchMovie}/>;
        })
        }
      
      </div>
    </section>
  );
}
