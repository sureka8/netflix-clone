import Image from "next/image";
import React from "react";
import loginbg from '../../public/netflix-bg.jpg'
export default function AuthLayout({ children }) {
    return (
        <div className="h-screen w-screen flex flex-col md:items-center md:justify-center">
          <Image src={loginbg} 
          alt="login-bg-image" className="hidden sm:flex sm:object-cover -z-10 brightness-50"
          priority
          fill />
            {children}
        </div>
    );
}
