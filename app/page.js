"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      {/* Gradient Header Banner */}
      <div
        className="w-full py-3 px-2 sm:px-4 text-white text-center font-bold text-[16px] sm:text-[22px]"
        style={{
          background: "linear-gradient(90deg, #FC004E 0%, #10CBE0 100%)",
        }}
      >
        🚀 FRESH BEGINNINGS SALE: Extra 25% OFF, Limited Spots — start your
        journey today!
      </div>

      {/* Main Content */}
      <main className="flex-1 bg-black">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center relative">
            {/* Logo - Centered on mobile */}
            <div className="flex-1 flex justify-center md:justify-start md:flex-none">
              <Image
                src="/Group.png"
                alt="logo"
                width={173.12}
                height={74}
                className="mx-auto md:ml-[95px] md:mx-0 w-[107.78px] h-[46.07px] md:w-[173.12px] md:h-[74px]"
              />
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:flex space-x-6">
              <Link
                href="/about-us"
                className="hover:text-gray-300 transition-colors text-[18px] text-[#A9A9A9]"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="hover:text-gray-300 transition-colors text-[18px] text-[#A9A9A9]"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button - Visible only on mobile */}
            <button
              className="md:hidden text-[#A9A9A9] focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
            </button>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-black border border-gray-700 rounded-md shadow-lg z-50 md:hidden">
                <Link
                  href="/about-us"
                  className="block px-4 py-3 text-sm text-[#A9A9A9] hover:text-gray-300 hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-3 text-sm text-[#A9A9A9] hover:text-gray-300 hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 relative">
            {/* Text Content */}
            <div className="relative lg:translate-x-[95px] z-10 order-2 lg:order-1 mt-8 lg:mt-0">
              <h1 className="font-bold text-[25px] sm:text-[35px] mt-4 text-white text-center lg:text-left leading-tight">
                Want to Turn Social Media Into a{" "}
                <br className="hidden sm:block" /> Profitable Career?
              </h1>
              <h1
                className="font-bold text-[25px] sm:text-[35px] text-[#00E7F9] text-center lg:text-left mt-2 leading-tight"
                style={{
                  textShadow: "0px 4px 4px rgba(252, 0, 78, 1)",
                  wordSpacing: "-2px"
                }}
              >
                Discover your way to success <br className="hidden sm:block" />{" "}
                with Fametonic:
              </h1>
           <div className="md:flex md:justify-center lg:justify-start mt-4 ">
               <ul className="mt-6 space-y-4">
                <li className="flex items-start ">
                  <Image
                    src="/star.png"
                    alt="icon"
                    width={22}
                    height={22}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span className="ml-3 text-[16px] text-white" style={{wordSpacing: "2px"}}>
                    Start growing your influence right away—no waiting required!
                  </span>
                </li>
                <li className="flex items-start">
                  <Image
                    src="/star.png"
                    alt="icon"
                    width={22}
                    height={22}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span className="ml-3 text-[16px] text-white" style={{wordSpacing: "0.5px"}}>
                    Create viral TikToks and Reels step by step with
                    easy-to-follow <br className="hidden sm:block" /> lessons
                  </span>
                </li>
                <li className="flex items-start">
                  <Image
                    src="/star.png"
                    alt="icon"
                    width={22}
                    height={22}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span className="ml-3 text-[16px] text-white">
                    Use a Personal AI Worker to boost your content
                  </span>
                </li>
                <li className="flex items-start">
                  <Image
                    src="/star.png"
                    alt="icon"
                    width={22}
                    height={22}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span className="ml-3 text-[16px] text-white">
                    Learn from expert-led courses designed for aspiring
                    influencers
                  </span>
                </li>
              </ul>
           </div>
              <div className="flex justify-center lg:justify-start mt-8">
                <button
                  style={{
                    boxShadow: "2px 2px 10px 0px #00E7F9",
                  }}
                  className="bg-[#FC004E] rounded-lg font-bold text-[20px] h-[40px] w-[350px] sm:w-[313px] text-white flex justify-center items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  GET STARTED
                  <FontAwesomeIcon icon={faChevronRight} className="w-3" />
                </button>
              </div>
              <div className="w-full sm:w-[313px] text-center mt-3 mx-auto lg:mx-0">
                <p className="text-xs text-white">
                  1-minute quiz for personalized Insight
                </p>
              </div>
              <p className="text-xs text-[#ABABAB] mt-6 text-center lg:text-left hidden sm:block">
                By clicking "Get Started", you agree with Terms and Conditions,
                Privacy Policy, Subscription <br className="hidden sm:block" />{" "}
                Terms
              </p>
              <p className="text-[10px] text-[#ABABAB] mt-2 text-center lg:text-left hidden sm:block">
                Fametonic 2025 ©All Rights Reserved.
              </p>
            </div>

            {/* Image */}
            <div className="w-full lg:w-[666px] h-auto lg:h-[679px] order-1 lg:order-2 flex justify-center">
              <Image
                src="/banner.png"
                alt="banner"
                width={700}
                height={679}
                className="w-full h-auto max-w-[550px] lg:max-w-none"
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
