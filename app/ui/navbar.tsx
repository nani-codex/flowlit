"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import "@/app/ui/global.css"

interface NavbarProps {
  isMobile: boolean;
}

export default function Navbar({ isMobile }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 right-0 z-[60] bg-transparent">
        <div className="flex justify-between items-center p-4">
          <div className="text-[#faf9f6] text-2xl font-bold">Flowlit</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-[#faf9f6] font-normal">
            <>
              <a href="/" className="hover:text-gray-300" onClick={closeMenu}>Home</a>
              <a href="/about" className="hover:text-gray-300" onClick={closeMenu}>About</a>
              <a href="/features" className="hover:text-gray-300" onClick={closeMenu}>Features</a>
              <a href="/contact" className="hover:text-gray-300" onClick={closeMenu}>Contact</a>
            </>
          </ul>

          {/* Sign In Button on the right */}
          <button className="hidden md:block px-4 py-2 text-[#faf9f6] font-normal">
            Sign In
          </button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button className="text-[#faf9f6] relative z-[60]" onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {isOpen && (
              <div className="fixed inset-0 left-0 top-0 z-[50] bg-black/95">
                <div className="absolute top-4 right-4">
                  <button className="text-[#faf9f6]" onClick={toggleMenu}>
                    <X size={24} />
                  </button>
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                  <ul className="flex flex-col space-y-8 text-center text-[#faf9f6] font-semibold">
                    <li><a href="#home" className="text-2xl" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" className="text-2xl" onClick={closeMenu}>About</a></li>
                    <li><a href="#features" className="text-2xl" onClick={closeMenu}>Features</a></li>
                    <li><a href="#contact" className="text-2xl" onClick={closeMenu}>Contact</a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}
