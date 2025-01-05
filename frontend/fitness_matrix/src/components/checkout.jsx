import React, { useEffect, useState } from "react";
import axios from "axios";
import { backend } from "../context/api";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa"; // Importing icons

function Checkout() {
    const [productsDetails, setProductsDetails] = useState([]);
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('selectedProducts')) || []);

    // Fetch product details based on selected IDs
    useEffect(() => {
        const fetchSelectedProducts = async () => {
            if (cartItems.length > 0) {
                try {
                    const response = await axios.post(`${backend}/product/selected`, {
                        ids: cartItems,
                    });
                    setProductsDetails(response.data);
                } catch (error) {
                    console.error("Error fetching selected products:", error);
                }
            }
        };

        fetchSelectedProducts();
    }, [cartItems]);

    // Increase quantity of the product
    const increaseQuantity = (productId) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) =>
                item === productId ? item + 1 : item
            );
        });
    };

    // Decrease quantity of the product
    const decreaseQuantity = (productId) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) =>
                item === productId && item > 1 ? item - 1 : item
            );
        });
    };

    // Remove product from cart
    const removeProduct = (productId) => {
        setCartItems((prevItems) => {
            return prevItems.filter((item) => item !== productId);
        });
    };

    // Update local storage when cart items change
    useEffect(() => {
        localStorage.setItem("selectedProducts", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <div className="max-w-screen-lg mx-auto mt-10 checkout-page">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>

            {productsDetails.length > 0 ? (
                <ul>
                    {productsDetails.map((product) => {
                        const quantity = cartItems.filter((id) => id === product._id).length;

                        return (
                            <li key={product._id} className="border p-4 mb-4 rounded flex items-center justify-between">
                                <div>
                                    <h3>{product.name}</h3>
                                    <p>${product.price.toFixed(2)}</p>
                                </div>

                                <div className="flex items-center space-x-2">
                                    {/* Minus button */}
                                    <button
                                        onClick={() => decreaseQuantity(product._id)}
                                        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                                    >
                                        <FaMinus />
                                    </button>

                                    {/* Quantity display */}
                                    <span>{quantity}</span>

                                    {/* Plus button */}
                                    <button
                                        onClick={() => increaseQuantity(product._id)}
                                        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                                    >
                                        <FaPlus />
                                    </button>

                                    {/* Remove button */}
                                    <button
                                        onClick={() => removeProduct(product._id)}
                                        className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>No items in the cart.</p>
            )}
        </div>
    );
}

export default Checkout;
