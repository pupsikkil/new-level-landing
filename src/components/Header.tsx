'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background shadow-soft"
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <img src="/new-level-landing/logo.png" alt="New Level Logo" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12 text-lg">
            <button
              onClick={() => scrollToSection('home')}
              className="text-transparent bg-clip-text bg-gradient-brand hover:opacity-80 transition-opacity duration-300"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-transparent bg-clip-text bg-gradient-brand hover:opacity-80 transition-opacity duration-300"
            >
              О компании
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-transparent bg-clip-text bg-gradient-brand hover:opacity-80 transition-opacity duration-300"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-transparent bg-clip-text bg-gradient-brand hover:opacity-80 transition-opacity duration-300"
            >
              Примеры работ
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="text-transparent bg-clip-text bg-gradient-brand hover:opacity-80 transition-opacity duration-300"
            >
              Контакты
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contacts')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-brand"
            >
              <Phone className="w-4 h-4 mr-2" />
              Оставить заявку
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}
        >
          <div className="pt-4 pb-2 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              О компании
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Примеры работ
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Контакты
            </button>
            <Button
              onClick={() => scrollToSection('contacts')}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-brand"
            >
              <Phone className="w-4 h-4 mr-2" />
              Оставить заявку
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
