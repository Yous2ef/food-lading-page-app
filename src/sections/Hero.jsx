import React from "react";
import {
    hero,
    customer1,
    customer2,
    customer3,
    customer4,
    customer5,
    customer6,
} from "../assets/index.js";
import { Button } from "../components/index.js";
const Hero = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 h-full  leading-relaxed text-center lg:text-left pb-10 lg:pb-0">
            <div className="flex flex-col gap-6 min-w-[50%]">
                <h1 className="text-5xl lg:text-[3.4rem] font-bold text-black mb-4">
                    A healthy meal
                    <br /> delivered to your door,
                    <br /> every single day
                </h1>
                <p className="text-xl max-w-xl leading-8">
                    The smart 365-days-per-year food subscription that will make
                    you eat healthy again. Tailored to your personal tastes and
                    nutritional needs.
                </p>
                <div className="flex flex-col min-[525px]:flex-row  justify-center lg:justify-start gap-4 mt-6 text-xl">
                    <Button
                        label="Start eating well"
                        style={"py-2 font-bold"}
                    />
                    <a href="#how-it-works">
                        <Button
                            style={
                                "py-2 border-3 border-white hover:bg-primary font-bold"
                            }
                            label="Learn more ↓"
                            backgroundColor={"bg-white"}
                            textColor={"text-gray-600"}
                            fullWidth={true}
                        />
                    </a>
                </div>
                <div className="flex items-center gap-2 lg:mt-16 mt-2 flex-col min-[525px]:flex-row ">
                    <div className="flex items-center ">
                        <img className="rounded-full h-12" src={customer1} />
                        <img
                            className="rounded-full h-12 ml-[-16px] border-3 border-white"
                            src={customer2}
                        />
                        <img
                            className="rounded-full h-12 ml-[-16px] border-3 border-white"
                            src={customer3}
                        />
                        <img
                            className="rounded-full h-12 ml-[-16px] border-3 border-white"
                            src={customer4}
                        />
                        <img
                            className="rounded-full h-12 ml-[-16px] border-3 border-white"
                            src={customer5}
                        />
                        <img
                            className="rounded-full h-12 ml-[-16px] border-3 border-white"
                            src={customer6}
                        />
                    </div>
                    <p className="text-base text-nowrap font-bold text-gray-600">
                        <span className="text-primary">250,000+</span> meals
                        delivered last year!
                    </p>
                </div>
            </div>
            <div className="max-w-xl">
                <img src={hero} alt="" />
            </div>
        </div>
    );
};

export default Hero;
