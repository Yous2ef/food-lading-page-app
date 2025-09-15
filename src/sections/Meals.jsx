import { Flame, UtensilsCrossed, Star, Check } from "lucide-react";
import { meals, dietTypes } from "../constants";

const Meals = () => {
    return (
        <section id="meals" className="pb-24 pt-14 padding-x">
            <div className="max-container">
                {/* Section Label */}
                <div className="text-center mb-12">
                    <p className="text-[var(--primary-color)] font-medium text-sm tracking-wide uppercase mb-4">
                        MEALS
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                        Omnifood AI chooses from{" "}
                        <span className="text-primary">5,000+</span> recipes
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 place-items-center">
                    {/* Meal Cards */}
                    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8 px-12 lg:px-0">
                        {meals.map((meal) => (
                            <div
                                key={meal.id}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="aspect-auto overflow-hidden">
                                    <img
                                        src={meal.image}
                                        alt={meal.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="px-6 pb-12 pt-8">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-1">
                                        {meal.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                                                    tag === "VEGETARIAN"
                                                        ? "bg-green-100 text-green-700"
                                                        : tag === "VEGAN"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-yellow-100 text-yellow-700"
                                                }`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Meal Name */}
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                                        {meal.name}
                                    </h3>

                                    {/* Meal Info */}
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <Flame className="text-[var(--primary-color)] w-5 h-5" />
                                            <span className="text-gray-600 font-medium">
                                                {meal.calories} calories
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <UtensilsCrossed className="text-[var(--primary-color)] w-5 h-5" />
                                            <span className="text-gray-600 font-medium">
                                                NutriScore ® {meal.nutriScore}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Star className="text-[var(--primary-color)] w-5 h-5" />
                                            <span className="text-gray-600 font-medium">
                                                {meal.rating} rating (
                                                {meal.reviews})
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Diet List */}
                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">
                            Works with any diet:
                        </h3>
                        <ul className="space-y-4">
                            {dietTypes.map((diet, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3">
                                    <Check className="text-[var(--primary-color)] w-5 h-5" />
                                    <span className="text-gray-700 font-medium">
                                        {diet}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* See All Recipes Link */}
                <div className="text-center mt-12">
                    <a
                        href="#home"
                        className="text-[var(--primary-color)] font-medium hover:text-[var(--primary-hover-color)] transition-colors duration-200 border-b border-[var(--primary-color)] hover:border-[var(--primary-hover-color)]">
                        See all recipes →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Meals;
