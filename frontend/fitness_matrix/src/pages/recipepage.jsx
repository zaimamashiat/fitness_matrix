import React from "react";
import Recipe from "../components/recipe";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function RecipePage() {
    return (
        <>
            <Navbar />
            <main className="p-6">
                <h1 className="text-3xl font-bold text-left text-teal-500 dark:text-white mb-6">
                    Recipes for a Better Diet
                </h1>
                <Recipe />
            </main>
            <Footer />
        </>
    );
}
