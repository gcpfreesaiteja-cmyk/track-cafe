
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import gsap from 'gsap';

const NavLink = ({ name, href }: { name: string, href: string }) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const onEnter = () => {
    const chars = linkRef.current?.querySelectorAll('.swirl-char');
    if (chars) {
      gsap.to(chars, {
        rotateY: 360,
        color: '#d4ff00',
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(1.7)"
      });
    }
  };

  const onLeave = () => {
    const chars = linkRef.current?.querySelectorAll('.swirl-char');
    if (chars) {
      gsap.to(chars, {
        rotateY: 0,
        color: '#ffffff',
        duration: 0.4,
        stagger: 0.02
      });
    }
  };

  return (
    <a 
      ref={linkRef}
      href={href} 
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="text-sm font-semibold uppercase tracking-[0.2em] relative overflow-hidden inline-block py-2"
    >
      {name.split('').map((char, i) => (
        <span key={i} className="swirl-char inline-block whitespace-pre">
          {char}
        </span>
      ))}
    </a>
  );
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Gear', href: '#lifestyle' },
    { name: 'Telemetry', href: '#ai-advisor' },
    { name: 'Paddock', href: '#footer' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[60] transition-all duration-500 ${isScrolled ? 'bg-black/95 py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-10 flex justify-between items-center">
        <a href="#" className="text-2xl font-black heading-font tracking-tighter group">
          OFF-TRACK<span className="text-neon group-hover:rotate-12 inline-block transition-transform">/</span>CAFE
        </a>

        <div className="hidden lg:flex space-x-12 items-center">
          {navLinks.map((link) => (
            <NavLink key={link.name} {...link} />
          ))}
          <button className="relative group">
            <ShoppingBag className="w-5 h-5 group-hover:text-neon transition-colors" />
            <span className="absolute -top-2 -right-2 bg-neon text-black text-[9px] font-black px-1.5 py-0.5 rounded-full">0</span>
          </button>
        </div>

        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-neon" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black z-[70] flex flex-col items-center justify-center space-y-8 p-6">
          <button className="absolute top-8 right-10" onClick={() => setMobileMenuOpen(false)}>
            <X className="w-8 h-8 text-neon" />
          </button>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-4xl font-black uppercase tracking-widest hover:text-neon transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
