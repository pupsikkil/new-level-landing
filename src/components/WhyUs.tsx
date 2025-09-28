'use client';

import { Calendar, Users, FileText, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const WhyUs = () => {
  const advantages = [
    {
      icon: Calendar,
      title: '10+ лет опыта',
      description: 'Многолетний опыт в сфере строительства и дизайна интерьеров позволяет нам решать задачи любой сложности.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Users,
      title: 'Профессиональная команда',
      description: 'Наша команда состоит из квалифицированных специалистов: дизайнеров, архитекторов, строителей и менеджеров.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: FileText,
      title: 'Прозрачные сметы',
      description: 'Детальные сметы с разбивкой по материалам и работам. Никаких скрытых платежей и неожиданных доплат.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Shield,
      title: 'Гарантия качества',
      description: 'Предоставляем официальную гарантию на все виды работ до 2 лет. Используем только сертифицированные материалы.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16"
        >
          <h2 className="font-brand-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Почему выбирают нас
          </h2>
          <div className="w-24 h-1 bg-gradient-brand mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы гордимся нашими принципами работы и стремимся к долгосрочному сотрудничеству с каждым клиентом
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
            >
              <Card className="h-full hover:shadow-brand transition-all duration-300 group border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-full ${advantage.bgColor} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <advantage.icon className={`w-8 h-8 ${advantage.color}`} />
                  </div>

                  <h3 className="font-brand-heading text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {advantage.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div
          className="mt-16 text-center"
        >
          <div className="bg-gradient-brand rounded-lg p-8 text-white">
            <h3 className="font-brand-heading text-2xl md:text-3xl font-bold mb-4">
              Готовы убедиться в нашем профессионализме?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Получите бесплатную консультацию и предварительную смету уже сегодня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-white/90">
                <Calendar className="w-5 h-5 mr-2" />
                Консультация — бесплатно
              </div>
              <div className="flex items-center text-white/90">
                <FileText className="w-5 h-5 mr-2" />
                Смета — в день обращения
              </div>
              <div className="flex items-center text-white/90">
                <Shield className="w-5 h-5 mr-2" />
                Гарантия — до 2 лет
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
