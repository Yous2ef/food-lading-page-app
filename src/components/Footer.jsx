import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { footerData } from "../constants";
import { omnifoodLogo } from "../assets/index.js";

const Footer = () => {
    // Create an array of all footer sections for dynamic rendering
    const footerSections = [
        {
            id: "account",
            title: footerData.account.title,
            links: footerData.account.links,
            type: "links",
        },
        {
            id: "company",
            title: footerData.company.title,
            links: footerData.company.links,
            type: "links",
        },
        {
            id: "resources",
            title: footerData.resources.title,
            links: footerData.resources.links,
            type: "links",
        },
        {
            id: "contact",
            title: footerData.contactUs.title,
            content: footerData.contactUs,
            type: "contact",
        },
    ];

    return (
        <footer className="bg-[#fdf2e9] py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
                    {/* Logo, Social & Copyright Section */}
                    <div className="order-4 text-center sm:text-left sm:order-4 lg:order-0 lg:col-span-2 sm:col-span-2 lg:col-span-1">
                        <div className="mb-8 flex flex-col items-center sm:items-start">
                            <a
                                className="flex items-center cursor-pointer"
                                href="#home"
                                aria-label="Omnifood Home">
                                <img
                                    src={omnifoodLogo}
                                    alt="Omnifood"
                                    className="h-6"
                                />
                            </a>

                            {/* Social Media Icons */}
                            <div className="flex space-x-4 mt-6">
                                {[
                                    { Icon: Instagram, label: "Instagram" },
                                    { Icon: Facebook, label: "Facebook" },
                                    { Icon: Twitter, label: "Twitter" },
                                ].map(({ Icon, label }) => (
                                    <a
                                        key={label}
                                        href="#"
                                        className="w-6 h-6 text-[#767676] hover:text-[#e67e22] transition-colors duration-300"
                                        aria-label={`Follow us on ${label}`}>
                                        <Icon className="w-full h-full" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Copyright */}
                        <p className="text-sm text-[#767676] leading-relaxed">
                            Copyright © 2025 by Omnifood, Inc. All rights
                            reserved.
                        </p>
                    </div>

                    {/* Dynamic Footer Sections */}
                    {footerSections.map((section, index) => (
                        <div
                            key={section.id}
                            className={` text-center sm:text-left
                                ${
                                    section.type === "contact"
                                        ? "order-5 sm:order-5 lg:order-2 sm:col-span-2 lg:col-span-1"
                                        : `order-${index + 1} sm:order-${
                                              index + 1
                                          } lg:order-${index + 3}`
                                }
                            `}>
                            <h3 className="text-2xl font-semibold text-[#333] mb-6">
                                {section.title}
                            </h3>

                            {/* Render Links Section */}
                            {section.type === "links" && (
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href={link.href}
                                                className="text-base text-[#767676] hover:text-[#e67e22] transition-colors duration-300">
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Render Contact Section */}
                            {section.type === "contact" && (
                                <div className="space-y-4">
                                    <address className="text-base text-[#767676] leading-relaxed not-italic">
                                        {section.content.address}
                                    </address>
                                    <div className="space-y-2">
                                        <a
                                            href={`tel:${section.content.phone}`}
                                            className="block text-sm text-[#767676] hover:text-[#e67e22] transition-colors duration-300">
                                            {section.content.phone}
                                        </a>
                                        <a
                                            href={`mailto:${section.content.email}`}
                                            className="block text-sm text-[#767676] hover:text-[#e67e22] transition-colors duration-300">
                                            {section.content.email}
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
