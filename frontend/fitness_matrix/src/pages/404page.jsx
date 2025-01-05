import React from "react";

function Notfoundpage() {
    return (
        <div className="grid h-screen place-content-center bg-white px-4">
            <div className="text-center">
                <h1 className="text-9xl font-black text-gray-200">404</h1>

                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Uh-oh!
                </p>

                <p className="mt-4 text-gray-500">We can't find that page.</p>

                <a
                    href="/"
                    className="mt-6 inline-block rounded-md bg-teal-600 hover:bg-teal-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:text-white"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    );
}

export default Notfoundpage;
