import React, { useEffect, useState } from "react";
import axios from "axios";
import { backend } from "../context/api";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch orders from the backend
    const fetchOrders = async () => {
        try {
            setLoading(true);
            setError(null);

            // Replace 'YOUR_BACKEND_URL' with your actual backend URL
            const response = await axios.get(`${backend}/orders`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Assuming token is stored in localStorage
                },
            });

            setOrders(response.data);
        } catch (err) {
            setError("Error fetching orders. Please try again later.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    if (loading) {
        return <div className="text-center text-gray-500">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">Your Orders</h1>
            {orders.length === 0 ? (
                <p className="text-center text-gray-500">No orders found.</p>
            ) : (
                <div className="space-y-6">
                    {orders.map((order) => (
                        <div
                            key={order._id}
                            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
                        >
                            <h2 className="text-xl font-semibold mb-4">
                                Order ID: <span className="font-mono">{order._id}</span>
                            </h2>
                            <p className="text-gray-600 mb-2">
                                <strong>Created At:</strong>{" "}
                                {new Date(order.createdAt).toLocaleDateString()}
                            </p>
                            <p className="text-gray-600 mb-4">
                                <strong>Total Amount:</strong> $
                                {order.totalAmount.toFixed(2)}
                            </p>
                            <h3 className="text-lg font-medium mb-3">Products:</h3>
                            <ul className="space-y-3">
                                {order.products.map((product) => (
                                    <li
                                        key={product.productId._id}
                                        className="p-4 border rounded-lg shadow-sm flex items-center justify-between"
                                    >
                                        <div>
                                            <p className="font-semibold text-gray-800">
                                                {product.productId.name}
                                            </p>
                                            <p className="text-gray-600">
                                                Price: ${product.productId.price}
                                            </p>
                                            <p className="text-gray-600">
                                                Quantity: {product.quantity}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

};

export default Orders;
