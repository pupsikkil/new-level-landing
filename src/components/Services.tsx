'use client';

import { 
  Home, 
  Building, 
  Palette, 
  Briefcase, 
  Wrench,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Ремонт квартир и коттеджей под ключ',
      description: 'Полный цикл ремонтных работ — от лёгкого косметического обновления до капитального ремонта с профессиональным дизайн-проектом.',
      features: ['Индивидуальный подход', 'Качественные материалы', 'Официальный договор'],
      color: 'text-primary'
    },
    {
      icon: Briefcase,
      title: 'Ремонт коммерческих помещений',
      description: 'Профессиональный ремонт офисов, магазинов, кафе и других коммерческих объектов с учетом специфики бизнеса.',
      features: ['Работа в сжатые сроки', 'Минимум простоя', 'Коммерческий дизайн'],
      color: 'text-secondary'
    },
    {
      icon: Palette,
      title: 'Дизайн интерьера',
      description: 'Создание уникальных интерьеров, отражающих вашу индивидуальность и соответствующих современным трендам.',
      features: ['3D-визуализация', 'Авторский дизайн', 'Подбор мебели'],
      color: 'text-primary'
    }
  ];

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16"
        >
          <h2 className="font-brand-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Наши услуги
          </h2>
          <div className="w-24 h-1 bg-gradient-brand mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы предлагаем полный спектр услуг по ремонту и дизайну, 
            обеспечивая высокое качество на каждом этапе работы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
            >
              <Card className="h-full hover:shadow-brand transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-brand text-white group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-brand-heading text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div
          className="text-center"
        >
          <Button
            onClick={scrollToContacts}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-brand px-8 py-6 text-lg font-semibold"
          >
            Получить консультацию
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
