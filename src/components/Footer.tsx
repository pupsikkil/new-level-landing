'use client';

import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Instagram,
  Facebook
} from 'lucide-react';

export const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/79655763406', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+79655763406';
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background text-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-brand-heading text-2xl font-bold text-primary mb-4">
                New Level
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Construction & Design
              </p>
              <p className="text-foreground/70 text-sm mt-2">
                Профессиональный ремонт и дизайн интерьера с 10-летним опытом работы в Перми
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-foreground/80">
                <Phone className="w-4 h-4 mr-3 text-primary" />
                <a href="tel:+79655763406" className="hover:text-primary transition-colors">
                  +7 965 576 3406
                </a>
              </div>
              <div className="flex items-center text-foreground/80">
                <Mail className="w-4 h-4 mr-3 text-primary" />
                <a href="mailto:89655763406@mail.ru" className="hover:text-primary transition-colors">
                  89655763406@mail.ru
                </a>
              </div>
              <div className="flex items-start text-foreground/80">
                <MapPin className="w-4 h-4 mr-3 text-primary mt-1" />
                <span>г. Пермь, ул. Краснова, д. 25</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-brand-heading text-lg font-bold mb-6 text-foreground">
              Наши услуги
            </h4>
            <ul className="space-y-3 text-foreground/80">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Ремонт квартир и коттеджей
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Дизайн интерьера
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Коммерческие помещения
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-brand-heading text-lg font-bold mb-6 text-foreground">
              Навигация
            </h4>
            <ul className="space-y-3 text-foreground/80">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="hover:text-primary transition-colors"
                >
                  Главная
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-primary transition-colors"
                >
                  О компании
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors"
                >
                  Услуги
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="hover:text-primary transition-colors"
                >
                  Портфолио
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacts')}
                  className="hover:text-primary transition-colors"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          {/* CTA & Social */}
          <div>
            <h4 className="font-brand-heading text-lg font-bold mb-6 text-foreground">
              Связаться с нами
            </h4>
            
            <div className="space-y-4 mb-6">
              <Button
                onClick={() => window.open('https://t.me/+79655763406', '_blank')}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-brand"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Написать в Телеграм
              </Button>
              
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white shadow-brand"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="text-sm font-semibold mb-3 text-foreground/90">
                Мы в соцсетях
              </h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="p-2 bg-foreground/10 rounded-lg hover:bg-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-foreground/10 rounded-lg hover:bg-primary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/79655763406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-foreground/10 rounded-lg hover:bg-green-500 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-foreground/60 text-sm">
              © 2025 New Level Construction & Design. Все права защищены.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-foreground/60">
              <span>Пермь, Россия</span>
              <span>•</span>
              <span>Работаем с 2016 года</span>
              <span>•</span>
              <span>Гарантия до 2 лет</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
