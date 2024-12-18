"use client"
import React,{useState,useEffect} from 'react';
import { GiWorld } from "react-icons/gi";

const Trendynow = () => {
    const movies = [
        {
            id:1,
            image:'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABURx9AyfogBvfeXdgb-y2fRt2u3DGsQQBsmMJniLhF2s8UIN9qIZTnpfFJ0wvKLfH3W1D_JBVDYG_571TUksiotC71p6J8deNJ2092AqZBrDcgacxn4-59k4lKEVv6mFW17acE_2jXiBAXeqe7VT.webp?r=a96',
        },
        {
            id:2,
            image:"https://occ-0-64-58.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABauZpol0O0zNMFuadyEQWPVr0I-5C1pN_tH3l_X9RO33N96VW9_HESI3qy7srsBNndS3XBooIGu8nziPiLMTcoo_rBZ-kfr-jd3OdryEvNTvoR6zYQgkZHMxLt1SHX4o6XSfHlllEv53KBAOUwHt.webp?r=096"
        },
        {
            id:3,
            image:'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABUnlypHxcWhFE8kHPjhbp-R_A2H69cU6SfgeAKDKXJUlP4fMfDaLTrADqIfPYJTIBbgEz24Kd0_pM9_vxCYBY8l1tiq_YpmJw8HZB3l662xK-d_1kEXItWOJHyoTPc-A_J4QZfPcofaKgy6-IuVovNnul4tTu99C7ZHTx6rSEiTqFVN6ZF-QVK26lOCkAQ6l2KI8mXRGla1YZIo8.webp?r=f67'
        },
        {
            id:4,
            image:"https://occ-0-64-58.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABZRKpnGsCOt35ksFOh3hC2g6vDYUGD3_cY6MF6jtJluJLh3rn_4Yqs_nksqgWCa-iKAYS6n0UboRnrUa8SlwVjh3JIOzoZkM8XUIiYuphINU0CfasmVbhvd25K12hy4A7-bdx9MJfliaikyLdObCaDF9rqNlLshxpFgAFXrUctS95n_mOFv_GFx0s3bob0CgVU3JAGN5XeGGFR1n.webp?r=6b8"
        },
        {
            id:5,
            image:'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABceQoUFC8Hpxq7HQXM2SWcPSOFc6LhrBI5lew02dn8wa4vWFcZl1oKy0iCbSJwre2FIIAzWsPhkimzmoD7hAwK1uJ82BhyReoUoDbheYoA3m2VryFLz89WO8UCMghmhJ_dx4ywqWf37G1UP0jQbCbzzw1MZmOZVfbZlBq0dLmQ.webp?r=5dc'
        },
        {
            id:6,
            image:'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABX_rvuHZa6e9sKhxN2Xz9DRJS3zy4c8YRSTRjRaLfOnn1sG9ext0_oFwJhbbE4NEBeXvPY3qBNuDkXT-Fh4SF4njNQtQPNlzhioxjr8AuXXzqLJ80vX68OMq83JqZ94tJ41jk3sVQ14MSL3NMCGw.webp?r=ed9'
        },
        {
            id:7,
            image:'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABXGp_-CvETUhhksE_-ybsBHyLqn9eetnDQyTiQbgk9I2OBgQa1LwVK4f4gJuEJpvFjwNsfO5ANewgATdbgRGqQyajhHjkmp41PwZQiypLOPpvl3MVW1fjUswfN7niiNoxXUJyTBGNGTEWk_dSGSDrdPPrci7p7xmOkJSSA9FCsZz6SGHntM_aHgBj95E0mNmNCt6vUXhm2XXA7kjJbJL3Xvr0yV8e8gngJLjAA.webp?r=9b3'
        },
        {
            id:8,
            image:'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABZHIa7nzUohVL9EamB4rQhM00PHZt65Xi-EhkA9XBgXG9OKu3VfTi4_aeqmAZzqAdPHnxjNkDAzkZ8yDso6Ys6WNKpj_zvGCBohpFNLwbqvlCX0lB8tQP-9w4rsiMdxe6PSnRKUE4Hh29DDla7MN.webp?r=b1a'
        },
        {
            id:9,
            image:'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABQfTR9ggKr_yneE96F2LRSSaYzu-ne7D4-7leDpB8OuR6R4aRXZEH5u4zqRI_punAQRv-0K0EWAbuNu4i5BkMYllg1RyFbPvZKS0nO3e-0Z5IoCjHodBgjREWONI-RPGNB4p_hhLCppU0DwcO2l_aRNQyZ82533e06yt_uzLFA.webp?r=f77'
        },
        {
            id:10,
            image:'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/-klpX4b1RECP-oGX3Uvz90PrgHE/AAAABeC1N8k28QMqp06bmWrde83J_2hFg5mrtaT-MG0e6sGxiOuA_2_N0W3LxZTu-44Q23qoxnzT7NjBVFqz-9u00UPb05Y1ztQGrTm5w9xnVEuoN9gwfEAskc5LRGYF_clfsFZGhXvFvj7LmN6ex6eYlgN0tNHN3zxJNGMF00xH88eiy-u20ragAqhwVoV33udIf_gV5BzJ6v-IAQyT.webp?r=129'
        }
    ]
    const [itemsToShow, setItemsToShow] = useState(7);
    useEffect(() => {
      // Set itemsToShow based on window size on the client
      const updateItemsToShow = () => {
        setItemsToShow(window.innerWidth < 768 ? 3 : 7);
      };
  
      // Run on component mount
      updateItemsToShow();
  
      // Add resize event listener
      window.addEventListener("resize", updateItemsToShow);
  
      // Cleanup listener on component unmount
      return () => {
        window.removeEventListener("resize", updateItemsToShow);
      };
    }, [])
    const [selectItem, setSelectItem] = useState(movies[0]);
    const [selectID, setSelectID] = useState(movies[0].id);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };
    
    const handleNext = () => {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, movies.length - itemsToShow));
    };
    const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= movies.length - itemsToShow;

    return (
        <div className='h-auto text-white z-10 relative py-10'>
            <div className='flex items-center justify-between'>
                <p className='text-4xl font-bold'>Trending Now</p>
                <div className='flex space-x-8'>
                    <select className='bg-black text-white rounded-full w-56 py-2 px-3 border border-white'>
                        <option>Sri Lanka</option>
                        <option>Global</option>
                    </select>
                    <select className='bg-black text-white rounded-full w-56 py-2 px-3 border border-white'>
                        <option>Movies</option>
                        <option>Tv Shows</option>
                    </select>
                </div>
            </div>
            {/* slider start */}
            <div className="flex items-center justify-center space-x-3  mt-10">
            <button
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-300  text-3xl h-20"
          onClick={handlePrev}
          disabled={isPrevDisabled}
        >
          &#8249;
        </button>
        <div className="flex overflow-hidden space-x-5 lg:space-x-8 w-full h-72 ">
          {movies.slice(
        currentIndex,
        currentIndex + itemsToShow // Display 2 items for small screens
      ).map((movie) => (
        <div
        key={movie.id}
        className='h-72 w-44 bg-cover bg-center rounded-lg'
        style={{
            backgroundImage: `url(${movie.image})`,
        }}
    >
        {/* Optionally add content inside the div */}
    </div>
          ))}
        </div>
        <button
          className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-300 h-20 text-3xl"
          onClick={handleNext}
          disabled={isNextDisabled}
        >
          &#8250;
        </button>
            </div>
           
        </div>
    );
};

export default Trendynow;
