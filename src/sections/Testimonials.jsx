import React from "react";
import { testimonials } from "../constants";
import {
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
} from "../assets";
const Testimonials = () => {
    const gallery = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
        gallery8,
        gallery9,
        gallery10,
        gallery11,
        gallery12,
    ];
    return (
        <section className="py-16 lg:py-24 bg-[#fdf2e9]" id="testimonials">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Testimonials Section */}
                <div className="space-y-12">
                    <div>
                        <p className="text-[#e67e22] font-semibold text-base tracking-[0.75px] uppercase mb-4">
                            Testimonials
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#333] leading-tight">
                            Once you try it, you can't go back
                        </h2>
                    </div>

                    <div className="space-y-12 sm:grid grid-cols-2 gap-12">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="space-y-4 flex flex-col items-center sm:items-start">
                                <figure className="flex items-center justify-center sm:justify-start">
                                    <img
                                        className="w-16 h-16 rounded-full border-2 border-[#e67e22]"
                                        alt={`Photo of customer ${testimonial.name}`}
                                        src={testimonial.image}
                                    />
                                </figure>
                                <blockquote className="text-base text-center max-w-2xl sm:text-left leading-10 text-[#555] font-medium">
                                    "{testimonial.text}"
                                </blockquote>
                                <p className="text-base  text-center sm:text-left text-[#777] font-medium">
                                    &mdash; {testimonial.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="grid grid-flow-col lg:grid-flow-row grid-rows-4 sm:grid-rows-2 gap-6 lg:grid-cols-3 lg:gap-12">
                    {gallery.map((image, index) => (
                        <figure
                            key={index}
                            className={`overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${
                                index % 4 === 0
                                    ? "transform rotate-2"
                                    : index % 4 === 1
                                    ? "transform -rotate-1"
                                    : index % 4 === 2
                                    ? "transform rotate-1"
                                    : "transform -rotate-2"
                            }`}>
                            <img
                                src={image}
                                alt={`Photo of beautifully arranged food ${
                                    index + 1
                                }`}
                                className="w-full h-32 sm:h-40 object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
