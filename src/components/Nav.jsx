import React, { useState, useEffect } from "react";
import {omnifoodLogo} from "../assets/index.js";
import { Button } from "./index.js";
import { navLinks } from "../constants/index.js";

const NavLink = ({ href, label, onClick }) => (
    <a
        href={href}
        className={`nav-link 
    ${onClick ? "text-2xl" : "text-lg"}`}
        onClick={onClick}>
        {label != "Try for free" && label}
        {label == "Try for free" && <Button label="Try for free" />}
    </a>
);

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowNavbar(window.scrollY > 700);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`flex fixed left-0 right-0 items-center z-10 justify-between px-6 py-4 md:px-11 ${
                showNavbar ? "bg-[#ffffffee]" : "bg-transparent"
            }`}>
            {/* Logo */}
            <a className="flex items-center cursor-pointer" href="#home">
                <img src={omnifoodLogo} alt="Omnifood" className="h-5.5" />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-10">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.href}
                        href={link.href}
                        onClick={null}
                        label={link.label}
                    />
                ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-800 hover:text-orange-500 p-2">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                                isMenuOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="fixed h-screen top-18 left-0 right-0 bg-[#ffffffee] shadow-lg md:hidden z-50">
                    <div className="flex h-[calc(100vh-6rem)] flex-col justify-center items-center space-y-8 px-8 py-6">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                label={link.label}
                            />
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;
