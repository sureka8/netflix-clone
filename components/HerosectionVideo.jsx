import { InfoIcon, PlayCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function HerosectionVideo({ movieId,overview,title,videoSource,imageString}){
    return(
        <div className="h-[55vh] lg:h-[60vh] flex items-center justify-start w-full">
        <video 
        poster={imageString}
        autoPlay
       muted
      loop
     src={videoSource}
     className="w-full absolute top-14 left-0 h-[60vh] object-cover -z-10 brightness-[60%]">
        
        </video>
        <div className=" absolute w-full lg:w-1/2 px-5 lg:px-14">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">{title}</h1>
            <p className="text-white text-sm md:text-lg mt-5 line-clamp-3">{overview}</p>
            <div className="flex gap-x-4 mt-5">
                <Button className="text-lg font-medium"> <PlayCircle  className="mr-2 h-6 w-6"/>Play</Button>
                <Button className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white"><InfoIcon className="mr-2 h-6 w-6"/>More Info</Button>
            </div>
        </div>
        

    </div>
    )
}