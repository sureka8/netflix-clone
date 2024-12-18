import Homevideoplayer from "@/components/Homevideo";
import MovieList from "@/components/MovieList";
import RecentlyAdded from "@/components/Recentlyadded";
import Tvshows from "@/components/Tvshows";

export default function Home(){
    return(
        <div>
            <Homevideoplayer />
            <div className="pb-5">
            <h1 className="text-3xl font-bold px-5 lg:px-14 mt-10 lg:mt-0"> Recently Added</h1>
            <MovieList category="recent" />
            <h1 className="text-3xl font-bold px-5 lg:px-14 mt-5 ">Movies</h1>
            <MovieList category="movie"/>
            <h1 className="text-3xl font-bold px-5 lg:px-14 mt-5 "> Tv shows</h1>
            <MovieList category="show"/>
            </div>
        </div>
    )
}