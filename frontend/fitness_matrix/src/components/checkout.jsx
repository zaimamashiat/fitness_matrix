import React, { useState } from 'react';

function Checkout({ selectedItem }) {
  // Example placeholder for selectedItem prop:
  // const selectedItem = {
  //   image: "https://example.com/item-image.jpg",
  //   name: "Instax Mini 90 Neo Classic",
  //   price: "$144.99",
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl p-8 bg-teal-50 rounded-lg shadow-lg">
        {/* Item Section */}
        {/* <div>
          <img
            src={selectedItem.image}
            alt={selectedItem.name}
            className="w-full h-auto object-cover rounded-md"
          />
          <div className="mt-4">
            <h2 className="text-xl font-bold">{selectedItem.name}</h2>
            <p className="text-2xl text-green-600 font-semibold">{selectedItem.price}</p>
          </div>
        </div> */}

        {/* Checkout Form */}
        <div className="bg-gray-800 text-white p-6 rounded-md">
          <h2 className="text-xl font-bold mb-4">Credit Card Checkout</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="cardName" className="block text-sm font-medium">
                Cardholder's Name
              </label>
              <input
                type="text"
                id="cardName"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm p-2 text-gray-800"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm p-2 text-gray-800"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="flex gap-4">
              <div>
                <label htmlFor="expirationDate" className="block text-sm font-medium">
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="expirationDate"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm p-2 text-gray-800"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm p-2 text-gray-800"
                  placeholder="123"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
