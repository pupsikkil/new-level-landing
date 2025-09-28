'use client';

import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

export const CTA = () => {
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div
          className="bg-primary rounded-2xl p-8 md:p-16 text-center text-white shadow-brand relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90 rounded-2xl" />
          
          <div className="relative z-10">
            <h2
              className="font-brand-heading text-3xl md:text-5xl font-bold mb-6 text-shadow"
            >
              Хотите ремонт без стресса?
            </h2>

            <p
              className="text-xl md:text-2xl mb-8 text-shadow opacity-95"
            >
              Доверьтесь NEW LEVEL!
            </p>

            <p
              className="text-lg mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed"
            >
              Получите бесплатную консультацию и узнайте, как мы можем превратить 
              ваше пространство в место мечты. Работаем быстро, качественно и с гарантией.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                onClick={scrollToContacts}
                className="bg-white text-primary hover:bg-white/90 shadow-soft text-lg px-8 py-6 font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Оставить заявку
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <div className="flex flex-col sm:flex-row gap-6 text-white/90 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-white/70 mr-2" />
                  Бесплатная консультация
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-white/70 mr-2" />
                  Выезд в день обращения
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-white/70 mr-2" />
                  Гарантия качества
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-white/10"
            />
            <div
              className="absolute -bottom-10 -right-10 w-16 h-16 rounded-full bg-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
