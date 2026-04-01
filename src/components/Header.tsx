import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'О нас', href: '#about' },
    { name: 'Мастера', href: '#masters' },
    { name: 'Отзывы', href: '#testimonials' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col hover:opacity-80 transition-opacity">
          <span className={`font-serif text-2xl md:text-3xl tracking-widest leading-none mb-1 uppercase transition-colors ${isScrolled ? 'text-dark' : 'text-white'}`}>SENSE</span>
          <span className={`text-[0.65rem] md:text-xs tracking-[0.3em] font-medium uppercase transition-colors ${isScrolled ? 'text-emerald' : 'text-white/80'}`}>aesthetic space</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm tracking-wide transition-colors hover:text-emerald ${
                isScrolled ? 'text-dark-muted' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#booking"
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              isScrolled
                ? 'bg-zinc-900 text-white hover:bg-black shadow-md hover:shadow-lg'
                : 'bg-white text-dark hover:bg-neutral'
            }`}
          >
            Записаться
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-dark' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-dark' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-3 px-4 text-dark hover:bg-neutral hover:text-emerald transition-colors rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 mx-4 py-3 bg-zinc-900 text-white text-center rounded-md font-medium hover:bg-black transition-colors"
          >
            Записаться онлайн
          </a>
        </div>
      )}
    </header>
  );
}
