"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav id="nn" className="relative  text-white">
            <div className="flex items-center justify-between px-4 py-4">
                <h1 className="text-3xl cursor-pointer">
                    Port<span style={{ color: "gold" }}>folio</span>
                </h1>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10 text-xl">
                    <Link href="/">Home</Link>
                    <Link href="#rBtn">Resume</Link>
                    <Link href="#sk">Skills</Link>
                    <Link href="#ab">About</Link>
                    <Link href="#hr">Hire Me</Link>
                </div>
                
                {/* Mobile Menu Icon */}
                <div className="md:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? <AiOutlineClose color="gold" size={30} /> : <AiOutlineMenu color="gold" size={30} />}
                </div>
            </div>
            
            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden  `}>
                <ul className="flex flex-col items-center gap-4 py-4 text-xl">
                    <li onClick={toggleMenu}><Link href="/">Home</Link></li>
                    <li onClick={toggleMenu}><Link href="#rBtn">Resume</Link></li>
                    <li onClick={toggleMenu}><Link href="#sk">Skills</Link></li>
                    <li onClick={toggleMenu}><Link href="#ab">About</Link></li>
                    <li onClick={toggleMenu}><Link href="#hr">Hire Me</Link></li>
                </ul>
            </div>
        </nav>
    );
}
