import { Check } from "lucide-react";
import { pricingFeatures, pricingPlans } from "../constants";

const Pricing = () => {
    return (
        <section id="meals" className="pb-24 pt-14 padding-x">
            {/* Header */}
            <div className="text-left  mb-20">
                <p className="text-primary font-semibold text-base tracking-wider uppercase mb-4">
                    Pricing
                </p>
                <h2 className="text-4xl md:text-[44px] font-bold text-black leading-tight">
                    Eating well without breaking the bank
                </h2>
            </div>
            <div>
                {/* Pricing Cards */}
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center lg:items-stretch max-w-4xl mx-auto">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 hover:border-[#e67e22] w-full max-w-sm ${
                                plan.popular
                                    ? "border-[#e67e22] scale-105"
                                    : "border-gray-200"
                            }`}>
                            {/* Best Value Badge */}
                            {plan.popular && (
                                <div className="absolute -top-0 -right-0 bg-[#ffd43b] text-[#333] px-4 py-2 text-sm font-bold transform rotate-12 rounded-lg shadow-md">
                                    BEST VALUE
                                </div>
                            )}

                            {/* Plan Name */}
                            <div className="text-center mb-6">
                                <h3 className="text-[#e67e22] font-semibold text-lg tracking-[0.75px] uppercase mb-4">
                                    {plan.name}
                                </h3>

                                {/* Price */}
                                <div className="mb-4">
                                    <span className="text-[#333] text-5xl font-bold">
                                        ${plan.priceYearly}
                                    </span>
                                </div>

                                {/* Price Description */}
                                <p className="text-[#6b7280] text-base">
                                    per month. That's just ${plan.mealPrice} per
                                    meal!
                                </p>
                            </div>

                            {/* Features */}
                            <div className="space-y-4 mb-8">
                                {plan.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-3">
                                        <Check className="w-5 h-5 text-[#e67e22] flex-shrink-0" />
                                        <span className="text-[#333] text-base">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <button className="w-full cursor-pointer bg-[#e67e22] hover:bg-[#cf741f] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 hover:shadow-lg">
                                Start eating well
                            </button>
                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                <p className="text-center mt-12 text-[#6b7280] text-base max-w-2xl mx-auto">
                    Prices include all applicable taxes. You can cancel at any
                    time. Both plans include the following:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
                    {pricingFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start text-left">
                            {/* Icon Container */}
                            <div className="w-16 h-16 bg-[#fdf2e9] rounded-full flex items-center justify-center mb-6">
                                {feature.Icon && (
                                    <feature.Icon className="w-8 h-8 text-[#e67e22]" />
                                )}
                            </div>

                            {/* Title */}
                            <h3 className="text-[#333] text-xl font-bold mb-4 leading-tight">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#6b7280] text-base leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
