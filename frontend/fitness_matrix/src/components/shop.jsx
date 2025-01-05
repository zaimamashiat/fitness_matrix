import React, { useState, useEffect } from "react";
import axios from "axios";
import { backend } from "../context/api";

function Shop() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState({
        category: "All",
        priceRange: [0, 100],
        search: "",
    });
    const [selectedProducts, setSelectedProducts] = useState([]);

    // Fetch product data
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${backend}/product`);
                setProducts(response.data);
                setFilteredProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    // Apply filters when filters or products change
    useEffect(() => {
        let filtered = products;

        // Category filter
        if (filters.category !== "All") {
            filtered = filtered.filter(
                (product) => product.category === filters.category
            );
        }

        // Price range filter
        filtered = filtered.filter(
            (product) =>
                product.price >= filters.priceRange[0] &&
                product.price <= filters.priceRange[1]
        );

        // Search filter
        if (filters.search.trim() !== "") {
            filtered = filtered.filter((product) =>
                product.name
                    .toLowerCase()
                    .includes(filters.search.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    }, [filters, products]);

    // Handle category change
    const handleCategoryChange = (e) => {
        setFilters((prev) => ({ ...prev, category: e.target.value }));
    };

    // Handle price range change
    const handlePriceChange = (e, type) => {
        const value = parseFloat(e.target.value) || 0;
        setFilters((prev) => ({
            ...prev,
            priceRange:
                type === "min"
                    ? [value, prev.priceRange[1]]
                    : [prev.priceRange[0], value],
        }));
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        setFilters((prev) => ({ ...prev, search: e.target.value }));
    };

    // Handle product selection
    const toggleSelection = (productId) => {
        setSelectedProducts((prev) => {
            const updatedSelection = prev.includes(productId)
                ? prev.filter((id) => id !== productId) // Deselect
                : [...prev, productId]; // Select

            // Store updated selection in localStorage
            localStorage.setItem(
                "selectedProducts",
                JSON.stringify(updatedSelection)
            );

            return updatedSelection;
        });
    };

    // Handle checkout button click
    const handleCheckout = () => {
        console.log("Selected Product IDs:", selectedProducts);
        localStorage.setItem(
          "selectedProducts",
          JSON.stringify(selectedProducts)
        );
        // Navigate to checkout page or perform checkout logic
        window.location.href = "/checkout";
    };

    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header>
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                            Gym Supplements
                        </h2>
                        <p className="mt-4 max-w-md text-gray-500">
                            Discover our premium range of gym supplements to help you achieve your
                            fitness goals. Whether you're bulking, cutting, or just staying healthy,
                            we have the products you need.
                        </p>
                    </header>

                    <div className="mt-8 flex items-center justify-between">
                        {/* Category Filter */}
                        <select
                            className="border-gray-300 h-10 rounded"
                            onChange={handleCategoryChange}
                            value={filters.category}
                        >
                            <option value="All">All Categories</option>
                            <option value="Protein">Protein</option>
                            <option value="Vitamins">Vitamins</option>
                            <option value="Pre-Workout">Pre-Workout</option>
                        </select>

                        {/* Price Range Filter */}
                        <div className="flex gap-4">
                            <input
                                type="number"
                                placeholder="Min Price"
                                className="border-gray-300 rounded"
                                onChange={(e) => handlePriceChange(e, "min")}
                                value={filters.priceRange[0]}
                            />
                            <input
                                type="number"
                                placeholder="Max Price"
                                className="border-gray-300 rounded"
                                onChange={(e) => handlePriceChange(e, "max")}
                                value={filters.priceRange[1]}
                            />
                        </div>

                        {/* Search Filter */}
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="border-gray-300 h-10 rounded"
                            onChange={handleSearchChange}
                            value={filters.search}
                        />
                    </div>

                    {/* Product List */}
                    <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {filteredProducts.map((product) => (
                            <li
                                key={product._id}
                                onClick={() => toggleSelection(product._id)}
                                className={`p-4 rounded-lg group block overflow-hidden cursor-pointer ${
                                    selectedProducts.includes(product._id)
                                        ? "border-2 border-teal-700/30"
                                        : "border-2 border-transparent"
                                }`}
                            >
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />
                                <div className="relative pt-5">
                                    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                        {product.name}
                                    </h3>
                                    <p className="mt-2 font-bold">
                                        <span className="tracking-wider text-gray-900">
                                            ${product.price.toFixed(2)}
                                        </span>
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Floating Checkout Button */}
            {selectedProducts.length > 0 && (
                <button
                    onClick={handleCheckout}
                    className="fixed bottom-4 right-4 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-green-600/10"
                >
                    Checkout ({selectedProducts.length})
                </button>
            )}
        </div>
    );
}

export default Shop;
