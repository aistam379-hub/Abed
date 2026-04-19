import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            {/* Abstract logistics symbol */}
            <rect x="4" y="8" width="24" height="2" fill="currentColor" />
            <rect x="4" y="15" width="24" height="2" fill="currentColor" />
            <rect x="4" y="22" width="24" height="2" fill="currentColor" />
            <circle cx="8" cy="9" r="1.5" fill="#EE3F2C" />
            <circle cx="8" cy="16" r="1.5" fill="#EE3F2C" />
            <circle cx="8" cy="23" r="1.5" fill="#EE3F2C" />
          </svg>
          <span className="text-white font-bold text-lg tracking-tight" style={{ fontFamily: 'Rubik, sans-serif' }}>
            TARGO
          </span>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            style={{ fontFamily: 'Rubik, sans-serif' }}
          >
            Home
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            style={{ fontFamily: 'Rubik, sans-serif' }}
          >
            About
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            style={{ fontFamily: 'Rubik, sans-serif' }}
          >
            Contact Us
          </a>
        </nav>

        {/* Contact Button - Desktop */}
        <button
          className="hidden md:flex items-center gap-2 px-5 py-2 bg-[#EE3F2C] text-white font-bold text-sm transition-all duration-300 hover:bg-[#d63820] active:scale-95 shadow-lg hover:shadow-xl"
          style={{
            fontFamily: 'Rubik, sans-serif',
            clipPath: 'polygon(0 12px, calc(100% - 12px) 0, 100% calc(100% - 12px), 12px 100%)',
          }}
        >
          Contact Us
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white hover:bg-white/10 rounded transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <nav className="flex flex-col gap-4 px-6 py-4">
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              style={{ fontFamily: 'Rubik, sans-serif' }}
            >
              Home
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              style={{ fontFamily: 'Rubik, sans-serif' }}
            >
              About
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              style={{ fontFamily: 'Rubik, sans-serif' }}
            >
              Contact Us
            </a>
            <button
              className="w-full px-5 py-2 bg-[#EE3F2C] text-white font-bold text-sm transition-all duration-300 hover:bg-[#d63820] active:scale-95 rounded"
              style={{
                fontFamily: 'Rubik, sans-serif',
                clipPath: 'polygon(0 8px, calc(100% - 8px) 0, 100% calc(100% - 8px), 8px 100%)',
              }}
            >
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
