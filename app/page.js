"use client"
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { FiActivity } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import Trendynow from '../components/Trendynow'
import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
export default function HeroSection() {

  const [selectQA,setselectQA] = useState(null)

  const Question = [
      {
          id:1,
          ques:"What is Netflix?",
          ans:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"

      },
      {
          id:2,
          ques:"How Much does netflix cost ?",
          ans:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts."
      },
      {
          id:3,
          ques:"Where can I watch?",
          ans:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
      },
      {
          id:4,
          ques:"How do I cancel?",
          ans:"Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."

      },
      {
          id:5,
          ques:"What can I watch on Netflix?",
          ans:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."


      }

  ]
  
  const handleClick = (id) =>{
      if(selectQA === id){
          setselectQA(null)
      }else{
          setselectQA(id)
      }
  }
  return (
    <div className="relative min-h-auto bg-black lg:px-20 px-5 ">
      {/* Full-Screen Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-md"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/158a0e2a-cca4-40f5-86b8-11ea2a281b06/web_tall_panel/LK-en-20241202-TRIFECTA-perspective_240bab8a-2871-4802-a783-e7c710350777_large.jpg')",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-98"></div>
      {/* logo and sign in */}
<div className="relative z-10 py-5 flex items-center justify-between ">
  <p className="text-4xl text-red">Logo</p>
  <Link href={'/login'}> <div className="bg-white rounded-full font-bold text-black w-auto px-3 py-1">  Sign In</div></Link>
</div>
      {/* Content with Background Image */}
      <div
  className="w-full h-[30rem] relative z-10 flex flex-col items-center justify-end text-center text-white px-6 md:px-12 max-w-auto bg-cover bg-center rounded-lg"
  style={{
    backgroundImage:
      "url('https://assets.nflxext.com/ffe/siteui/vlv3/158a0e2a-cca4-40f5-86b8-11ea2a281b06/web_tall_panel/LK-en-20241202-TRIFECTA-perspective_240bab8a-2871-4802-a783-e7c710350777_large.jpg')",
  }}
>
  {/* Gradient and Blur effect */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/0 backdrop-blur-none"></div>

  {/* Content */}
  <div className="relative z-10 w-full text-white px-6 md:px-12">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 px-4 py-2 rounded-md">
      Unlimited movies, TV <br /> shows, and more
    </h1>
    <p className="text-lg md:text-xl mb-8 px-4 py-2 rounded-md">
      Starts at USD 2.99. Cancel anytime.
    </p>
  </div>
</div>
{/* get started */}
<div className="relative z-10 flex flex-col py-10 items-center justify-center">
  <p>Ready to watch?Enter your email to create or restart your membership</p>
  <div className="mt-5 flex space-x-3">
    <input type="text" placeholder="Email Address " className="bg-black rounded-full py-3 border border-white w-72 px-5" />
    <button className="bg-btnred rounded-full py-3 w-56 flex items-center space-x-8 text-2xl font-bold px-3"><p>Get Started</p> <IoIosArrowForward /> </button>
  </div>
</div>
<Trendynow   />
{/* more reason to join */}
<div className="py-10 z-10 relative ">
  <p className="text-4xl font-bold text-white">More Reasons to join </p>
  <div className="grid grid-cols-4 gap-10 h-40 mt-5">
    <div className="bg-[#272829] w-full h-full rounded-md p-5 ">
      <p className="text-white text-lg font-semibold">Stories tailored to your taste</p>
      <div className="flex items-end"></div>
    </div>
    <div className="bg-[#272829] w-full h-full rounded-md p-5 ">
      <p className="text-white text-lg font-semibold">Cancel or switch plans anytime</p>
      <div className="flex items-end"></div>
    </div>
    <div className="bg-[#272829] w-full h-full rounded-md p-5 ">
      <p className="text-white text-lg font-semibold">A place just for kids</p>
      <div className="flex items-end"></div>
    </div> <div className="bg-[#272829] w-full h-full rounded-md p-5 ">
      <p className="text-white text-lg font-semibold">For your phone, tablet, laptop and TV</p>
      <div className="flex items-end"></div>
    </div>
  </div>
</div>

{/* frequently asked questions */}
<div className=' w-full z-10 relative text-white pb-10'>
      {Question.map((Q) =>(
          <div
          key={Q.id}
          className="mt-2 rounded-md p-2"
        >
          <div
             onClick={() => handleClick(Q.id)}
            className={`md:h-16 h-auto px-3 py-4 flex md:space-x-3 space-x-1 justify-between cursor-pointer rounded-md  ${selectQA === Q.id? 'bg-gray-800':'bg-[#272829] '} `}
         
          >
            <div className="flex items-center md:px-5 px-2 ">
              <p className="md:text-xl md:font-semibold">{Q.ques}</p>
            </div>
            <div className={`h-full flex items-center text-4xl  ${selectQA === Q.id ? 'text-darkgreen':' text-gold'}  px-3`}>
            {selectQA=== Q.id ?  <CiCircleMinus /> :<CiCirclePlus />}
            </div>
          </div>
          {selectQA === Q.id && (
            <div className="mt-5 px-5 bg-[#272829] py-5 rounded-md">
              <p>{Q.ans}</p>
            </div>
          )}
        </div>
      ))}
      </div>
{/* footer section */}
<div className=" z-10 relative h-96 ">
  <div className="flex flex-col items-center justify-center">
  <div className="py-2 bg-btnred px-5 rounded-full w-48 text-center text-xl font-bold">Get Started</div>
  <p className="text-white">Create or restart your membership</p>

  </div>
  <Footer />

</div>
    </div>
  );
}
