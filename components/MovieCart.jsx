import { PlayCircle, ThumbsUp } from "lucide-react";
import PlayVideoModal from "./PlayVideoModal";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { SlLike } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";

// import VideoPlayer from "./VideoPlayer";
// import video1 from '../public/video/video1.mp4'
export default function MovieCart ({data}){
    const [open,setOpen]=useState(false)
    const router = useRouter()
    const handleClick = (movieId) =>{
     router.push(`/watch/${movieId}`)
    }
    return(
        <div >
           <Image
                      src={data.imageString}
                      alt="Movie"
                      width={500}
                      height={500}
                      className="top-0"
                    />
        {/* <button  className="-mt-14" onClick={() => setOpen(true)}>
          <PlayCircle className="h-10 w-10" />
        </button> */}
  
        {/* <div className="right-5 top-5 absolute z-10">
          {watchList ? (
            <form action={deleteFromWatchlist}>
              <input type="hidden" name="watchlistId" value={wachtListId} />
              <input type="hidden" name="pathname" value={pathName} />
              <Button variant="outline" size="icon">
                <Heart className="w-4 h-4 text-red-500" />
              </Button>
            </form>
          ) : (
            <form action={addTowatchlist}>
              <input type="hidden" name="movieId" value={movieId} />
              <input type="hidden" name="pathname" value={pathName} />
              <Button variant="outline" size="icon">
                <Heart className="w-4 h-4" />
              </Button>
            </form>
          )}
        </div> */}
  
        <div className="px-5 py-3 absolute bottom-3 left-0 w-full">

          <div className="flex items-center justify-between">
          <h1 className="font-bold text-lg line-clamp-1 text-white">{data.title}</h1>
            <p className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm">
              {data.age}+
            </p>
           
          </div>
           {/*
          <p className="line-clamp-1 text-xs text-gray-200 font-light">
            {data.overview}
          </p> */}
          <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            {/* Play Button */}
            <button onClick={() => handleClick(data.id)} className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-300 transition">
              ▶
            </button>
            {/* Other Buttons */}
            <button className=" text-white text-xl border border-slate-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-600 transition">
              +
            </button>
            <button className=" text-white text-lg border border-slate-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-600 transition">
             <SlLike />
            </button>
            </div>
            <button onClick={() => setOpen(true)} className=" text-white text-lg border border-slate-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-600 transition">
             <IoIosArrowDown />
            </button>
          </div>
        </div>
  
     <PlayVideoModal 
       data={data}
        state={open}
        changeState={setOpen}
        />
      
        
      </div>
    )
}