import { steps } from "../constants";

const HowItWork = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-left  mb-20">
                <p className="text-primary font-semibold text-base tracking-wider uppercase mb-4">
                    HOW IT WORKS
                </p>
                <h2 className="text-4xl md:text-[44px] font-bold text-black leading-tight">
                    Your daily dose of health in 3 simple steps
                </h2>
            </div>

            {/* Steps */}
            <div className="space-y-32">
                {steps.map((step, index) => (
                    <div
                        key={step.number}
                        className={`grid grid-cols-1 sm:grid-cols-2 gap-16 items-center ${
                            index % 2 === 1 ? "sm:grid-flow-col-dense" : ""
                        }`}>
                        {/* Text Content */}
                        <div
                            className={`order-1 sm:order-0 ${
                                index % 2 === 1 ? "sm:col-start-2" : ""
                            }`}>
                            <div className="mb-8">
                                <span className="text-5xl md:text-7xl font-bold text-[#dddddd] leading-none">
                                    {step.number}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 leading-tight">
                                {step.title}
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                                {step.description}
                            </p>
                        </div>

                        {/* Image */}
                        <div
                            className={` order-0 sm:order-1 flex justify-center ${
                                index % 2 === 1 ? "sm:col-start-1" : ""
                            }`}>
                            <div className="relative step-img-box">
                                <img
                                    src={step.image}
                                    alt={`App screen ${step.number}`}
                                    className="w-[35%] z-3"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWork;
