// components/Footer.tsx
import { FaInstagram, FaGithub } from "react-icons/fa" // Importing the icons
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#faf9f6]  text-[#171717] py-3 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">
          &copy; 2025 Sai Naga Vignesh B. All rights reserved.
        </p>
        <div className="mt-4 md:mt-0 space-x-4 flex justify-center md:justify-end">
          <Link
            href="https://www.instagram.com/nani.codex/"
            target="_blank"
            className="text-[#171717]"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://github.com/nani-codex/"
            target="_blank"
            className="text-[#171717]"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </footer>
  )
}
