'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/images/residential/IMG_5515.MOV" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <h1
          className="font-brand-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow"
        >
          Качество, к которому вы стремитесь
        </h1>

        <div>
          <img src="/new-level-landing/logo.png" alt="New Level Logo" className="h-20 sm:h-24 w-auto mx-auto mb-8" />
        </div>

        <p
          className="text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-shadow opacity-90"
        >
          Профессиональный ремонт и дизайн интерьера с 10-летним опытом. 
          Превращаем ваши мечты в реальность с гарантией качества.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => scrollToSection('contacts')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-brand text-lg px-8 py-6 rounded-lg font-semibold"
          >
            Заказать консультацию
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            onClick={() => scrollToSection('gallery')}
            className="border-white text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm text-lg px-8 py-6 rounded-lg font-semibold"
          >
            <Play className="mr-2 w-5 h-5" />
            Посмотреть проекты
          </Button>
        </div>
      </div>

    </section>
  );
};
