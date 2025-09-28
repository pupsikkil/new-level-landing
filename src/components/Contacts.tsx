'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Clock,
  Calendar
} from 'lucide-react';

export const Contacts = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Телефон',
      value: '+7 965 576 3406',
      href: 'tel:+79655763406',
      color: 'text-primary'
    },
    {
      icon: Mail,
      label: 'Email',
      value: '89655763406@mail.ru',
      href: 'mailto:89655763406@mail.ru',
      color: 'text-secondary'
    },
    {
      icon: MapPin,
      label: 'Адрес',
      value: 'г. Пермь, ул. Краснова, д. 25',
      href: '#',
      color: 'text-primary'
    },
    {
      icon: Clock,
      label: 'Режим работы',
      value: 'Пн-Пт: 9:00-18:00, Сб: 10:00-16:00',
      href: '#',
      color: 'text-secondary'
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/79655763406', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+79655763406';
  };

  return (
    <section id="contacts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16"
        >
          <h2 className="font-brand-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Контакты
          </h2>
          <div className="w-24 h-1 bg-gradient-brand mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Свяжитесь с нами удобным способом. Мы ответим на все ваши вопросы 
            и предоставим бесплатную консультацию
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div
            className="space-y-6"
          >
            <div className="grid gap-6">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                >
                  <Card className="hover:shadow-brand transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-brand text-white group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">
                            {item.label}
                          </h3>
                          <a
                            href={item.href}
                            className={`${item.color} hover:underline transition-colors`}
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div
              className="space-y-4 pt-6"
            >
              <Button
                size="lg"
                onClick={() => window.open('https://t.me/+79655763406', '_blank')}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white shadow-brand text-lg font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Связаться в Telegram
              </Button>
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white shadow-brand text-lg font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Написать в WhatsApp
              </Button>

              <Button
                size="lg"
                onClick={handleCallClick}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-brand text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Позвонить сейчас
              </Button>

            </div>
          </div>

          {/* Map */}
          <div
            className="bg-background rounded-lg shadow-soft overflow-hidden"
          >
            <div className="p-6 border-b">
              <h3 className="font-brand-heading text-xl font-bold text-foreground mb-2">
                Расположение нашего офиса
              </h3>
              <p className="text-muted-foreground">
                г. Пермь, ул. Краснова, д. 25
              </p>
            </div>
            
            <div className="aspect-square lg:aspect-video">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A4c9a4e7c2b21fd8a0c0a8b7a1e5c3d9f2a6b8c4d&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта NEW LEVEL Construction & Design"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Contact Form CTA */}
        <div
          className="text-center bg-background rounded-lg p-8 shadow-soft"
        >
          <h3 className="font-brand-heading text-2xl font-bold mb-4 text-foreground">
            Оставьте заявку прямо сейчас
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Менеджер свяжется с вами в течение 15 минут для обсуждения вашего проекта 
            и назначения бесплатной консультации
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-brand px-8 py-6 text-lg font-semibold"
            >
              Быстрая заявка через WhatsApp
              <MessageCircle className="ml-2 w-5 h-5" />
            </Button>
            
            <div className="text-sm text-muted-foreground">
              или позвоните: 
              <a 
                href="tel:+79655763406" 
                className="text-primary hover:underline font-semibold ml-1"
              >
                +7 965 576 3406
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
