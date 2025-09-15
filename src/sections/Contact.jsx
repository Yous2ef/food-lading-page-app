import React, { useState } from "react";
import { eating } from "../assets";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        hearFrom: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission here
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Floating Contact Card */}
            <div className="bg-gradient-to-r from-[#ea9a4d] to-[#e68529] rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex flex-col-reverse  min-[500px]:flex-row">
                    {/* Form Section */}
                    <div className=" min-[500px]:w-[65%] p-8 lg:p-12 text-white">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-[#333]">
                            Get your first meal for free!
                        </h2>

                        <p className="text-lg mb-12 text-[#333] opacity-90 leading-relaxed">
                            Healthy, tasty and hassle-free meals are waiting for
                            you. Start eating well today. You can cancel or
                            pause anytime. And the first meal is on us!
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                            {/* Full Name */}
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="block text-[#333] font-medium mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder="John Smith"
                                    className="w-full px-4 py-3 bg-white/90 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent placeholder-gray-500 text-[#333]"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-[#333] font-medium mb-2">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="me@example.com"
                                    className="w-full px-4 py-3 bg-white/90 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent placeholder-gray-500 text-[#333]"
                                    required
                                />
                            </div>

                            {/* Where did you hear from us */}
                            <div>
                                <label
                                    htmlFor="hearFrom"
                                    className="block text-[#333] font-medium mb-2">
                                    Where did you hear from us?
                                </label>
                                <select
                                    id="hearFrom"
                                    name="hearFrom"
                                    value={formData.hearFrom}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white/90 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-[#333]"
                                    required>
                                    <option value="">
                                        Please choose one option:
                                    </option>
                                    <option value="friends">
                                        Friends and family
                                    </option>
                                    <option value="youtube">
                                        YouTube video
                                    </option>
                                    <option value="podcast">Podcast</option>
                                    <option value="facebook">
                                        Facebook ad
                                    </option>
                                    <option value="others">Others</option>
                                </select>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#333] hover:bg-[#222] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 hover:shadow-lg h-14 align-bottom self-end cursor-pointer">
                                Sign up now
                            </button>
                        </form>
                    </div>

                    {/* Image Section */}
                    <div className="lg:relative min-[500px]:w-[35%] opacity-60">
                        <img
                            src={eating}
                            alt="Woman enjoying a healthy meal"
                            className="w-full h-80 min-[500px]:h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
