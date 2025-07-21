'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="bg-black shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-xl font-bold text-white">
                        <Link href="/">Chat App</Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="relative text-white hover:text-gray-400 group">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/about" className="relative text-white hover:text-gray-400 group">
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/forums" className="relative text-white hover:text-gray-400 group">
                            Forums
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/chat" className="relative text-white hover:text-gray-400 group">
                            UserChat
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <li className='list-none flex items-center justify-center'>
                            <UserButton />
                        </li>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
                            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 bg-black shadow">
                    <Link href="/" className="block text-white hover:text-gray-400">
                        Home
                    </Link>
                    <Link href="/" className="block text-white hover:text-gray-400">
                        About
                    </Link>
                    <Link href="/forums" className="block text-white hover:text-gray-400">
                        Forums
                    </Link>
                    <Link href="/chat" className="block text-white hover:text-gray-400">
                        UserChat
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
