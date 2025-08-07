import React from "react";
import {
    businessInsider,
    forbes,
    techcrunch,
    theNewYorkTimes,
    usaToday,
} from "../assets/index.js";

const Features = () => {
    return (
        <div className="text-center">
            <h4 className="uppercase tracking-wider text-sm text-[#7f7f7f] font-medium">
                As featured in
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-7 mt-6">
                <img
                    className="feature-img"
                    src={techcrunch}
                    alt="Tech Crunch"
                />
                <img
                    className="feature-img"
                    src={businessInsider}
                    alt="Business Insider"
                />
                <img
                    className="feature-img"
                    src={theNewYorkTimes}
                    alt="The New York Times"
                />
                <img className="feature-img" src={forbes} alt="Forbes" />
                <img className="feature-img" src={usaToday} alt="USA Today" />
            </div>
        </div>
    );
};

export default Features;
