import React from "react";
import Navbar from "../components/navbar";
import Blog from "../components/blog";

function Blogpage() {
    return <>
        <Navbar />
            <div className="text-center mt-10 mb-6">
                <h1 className="text-4xl font-bold text-gray-900">Our Latest Blog Posts</h1>
                <p className="mt-2 text-lg text-gray-600">Stay updated with our expert tips, workout routines, and health advice!</p>
            </div>
            <Blog />
    </>;
}

export default Blogpage;
