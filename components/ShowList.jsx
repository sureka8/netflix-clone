"use client"
import { useState, useEffect } from "react";
import MovieCart from "./MovieCart";
import Image from "next/image";
const ShowList = ({ category , subcategory,title}) => {
    console.log(category);
    console.log(subcategory);
    
  const [movies, setMovies] = useState([]);
  const [submovie,setSubmovie] = useState([])
  
  
  useEffect(() => {
    // Fetch movies from the JSON file
    fetch("/movies.json") // Adjust the path based on your project structure
      .then((response) => response.json())
      .then((data) => {
        // Filter movies by category
        const filteredMovies = data.filter((movie) => movie.category === category);
        setMovies(filteredMovies);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, [category]);

  useEffect(() => {
    if (movies.length > 0) {
      // Filter submovies only if movies are already loaded
      const subcategoryFilter = movies.filter(
        (movie) => movie.subcategory === subcategory
      );
      setSubmovie(subcategoryFilter);
    } else {
      setSubmovie([]); // Reset submovie when movies are not loaded
    }
  }, [movies, subcategory]);
  

  
  
  const [itemsToShow, setItemsToShow] = useState(4);
  useEffect(() => {
    // Set itemsToShow based on window size on the client
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth < 768 ? 2 : 4);
    };

    // Run on component mount
    updateItemsToShow();

    // Add resize event listener
    window.addEventListener("resize", updateItemsToShow);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, movies.length - itemsToShow)
    );
  };
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= movies.length - itemsToShow;
  return (
    <div className="py-10">
           <h1 className="text-3xl font-bold px-5 lg:px-14  lg:mt-0">{title}</h1>
 <div className="px-5 lg:px-10  flex items-center gap-x-5  mt-3 ">
          <button
            className="  text-5xl  "
            onClick={handlePrev}
            disabled={isPrevDisabled}
          >
            &#8249;
          </button>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-x-8 w-full h-full">
            {submovie
              .slice(
                currentIndex,
                currentIndex + itemsToShow // Display 2 items for small screens
              )
              .map((movie) => (
                <div key={movie.id} className="relative  h-48  lg:h-56 w-full">
                <Image
                  src={movie.imageString}
                  alt="Movie"
                  width={500}
                  height={400}
                  className="rounded-sm absolute w-full h-full object-cover hover:opacity-0"
                />
      
                <div className="h-[18rem] bg-zinc-800 relative z-10 w-full transform transition duration-500 hover:scale-110 opacity-0 hover:opacity-100 ease-in-out">
                  <div className=" z-10 w-full h-full rounded-lg flex items-start justify-start border">
                    {/* <Image
                      src={movie.imageString}
                      alt="Movie"
                      width={500}
                      height={600}
                      className="absolute w-full h-full -z-10 rounded-lg object-cover"
                    /> */}
                
                    <MovieCart  key={movie.id} data={movie} />
                    
               
                    
                  </div>
                </div>
              </div>
              ))}
          </div>
          <button
            className=" text-5xl "
            onClick={handleNext}
            disabled={isNextDisabled}
          >
            &#8250;
          </button>
        </div>
    </div>
     
  );
};

export default ShowList;
