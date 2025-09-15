import React from "react";
import { Nav } from "./components/index.js";
import { Hero, Features, HowItWork, Meals } from "./sections/index.js";
import Testimonials from "./sections/Testimonials.jsx";

const App = () => {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main className="relative">
                <section
                    id="home"
                    className="flex max-container justify-center items-center padding-x min-h-[100vh] pt-20 lg:pt-15 pb-10">
                    <Hero />
                </section>

                <div className="bg-white">
                    <section
                        id="features"
                        className="max-container padding-x py-10 ">
                        <Features />
                    </section>
                </div>

                <div className="bg-white">
                    <section
                        id="how-it-works"
                        className="max-container padding-x py-20 ">
                        <HowItWork />
                    </section>
                </div>

                <div className="bg-white">
                    <section
                        id="meals"
                        className="max-container min-h-screen padding-x pt-5">
                        <Meals />
                    </section>
                </div>

                <section
                    id="testimonials"
                    className="max-container padding-x py-20 ">
                    <Testimonials />
                </section>
            </main>
        </>
    );
};

export default App;
