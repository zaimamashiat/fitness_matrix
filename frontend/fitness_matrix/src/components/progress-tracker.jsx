import React, { useState, useEffect } from "react";
import axios from "axios";
import { backend } from "../context/api";
// import { AuthContext } from "../context/authcontext";

const ProgressTracker = () => {
    const [progress, setProgress] = useState([]);
    const [formData, setFormData] = useState({ weight: "", height: "", note: "" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const { user } = useContext(AuthContext);
    const userId = localStorage.getItem("userId");

    const fetchProgress = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${backend}/progress`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
            });
            setProgress(response.data);
        } catch (err) {
            setError("Failed to fetch progress data.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${backend}/progress`,
                formData,
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
                }
            );

            // Update the user's weight and height
            const userResponse = await axios.put(
                `${backend}/users/${userId}`, // Replace with the correct user endpoint
                { weight: formData.weight, height: formData.height },
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
                }
            );

            setProgress([response.data.progress, ...progress]);
            setFormData({ weight: "", height: "", note: "" });
            window.location.href = "/dashboard"
        } catch (err) {
            console.error(err);
            setError("Failed to add progress entry.");
        }
    };

    useEffect(() => {
        fetchProgress();
    }, []);

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Progress Tracker</h1>

            {/* Form for adding progress */}
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
                <div>
                    <label className="block text-gray-700">Weight (kg)</label>
                    <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={(e) =>
                            setFormData({ ...formData, weight: e.target.value })
                        }
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Height (cm)</label>
                    <input
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={(e) =>
                            setFormData({ ...formData, height: e.target.value })
                        }
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Note</label>
                    <textarea
                        name="note"
                        value={formData.note}
                        onChange={(e) =>
                            setFormData({ ...formData, note: e.target.value })
                        }
                        className="w-full p-2 border rounded-lg"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                    Add Progress
                </button>
            </form>

            {/* Display progress entries */}
            <div className="mt-6">
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <div className="space-y-4">
                        {progress.map((entry) => (
                            <div
                                key={entry._id}
                                className="bg-gray-100 p-4 rounded-lg shadow-sm border"
                            >
                                <p>
                                    <strong>Weight:</strong> {entry.weight} kg
                                </p>
                                <p>
                                    <strong>Height:</strong> {entry.height} cm
                                </p>
                                {entry.note && (
                                    <p>
                                        <strong>Note:</strong> {entry.note}
                                    </p>
                                )}
                                <p className="text-gray-500 text-sm">
                                    <strong>Created:</strong>{" "}
                                    {new Date(entry.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProgressTracker;
