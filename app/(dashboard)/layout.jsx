
import React from "react";

import Nanbar from '../../components/Navbar'
import Footer from "@/components/Footer";
export default function DasbordLayout({ children }) {
    return (
        <div >
         <Nanbar />
            {children}
            <div className="lg:px-14 px-5 py-5 lg:py-10">
            <Footer />
            </div>
        </div>
    );
}
