'use client';

import { Award, Users, Clock, Shield } from 'lucide-react';
import aboutTeamImage from '@/assets/about-team.jpg';

export const About = () => {
  const stats = [
    { icon: Clock, label: 'Опыт работы', value: '10+ лет', color: 'text-primary' },
    { icon: Award, label: 'Завершенных проектов', value: '200+', color: 'text-secondary' },
    { icon: Users, label: 'Довольных клиентов', value: '150+', color: 'text-primary' },
    { icon: Shield, label: 'Гарантия', value: '2 года', color: 'text-secondary' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16"
        >
          <h2 className="font-brand-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
            О компании New Level
          </h2>
          <div className="w-24 h-1 bg-gradient-brand mx-auto mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={aboutTeamImage}
              alt="Команда NEW LEVEL Construction & Design"
              className="rounded-lg shadow-soft w-full"
            />
          </div>

          <div
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              New Level Construction & Design — это команда профессионалов с более чем 
              10-летним опытом в сфере строительства и дизайна интерьеров. Мы специализируемся 
              на создании уникальных пространств, которые отражают индивидуальность наших клиентов 
              и соответствуют самым высоким стандартам качества.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Наша миссия — превращать обычные помещения в места, где хочется жить и работать. 
              Мы используем только качественные материалы, современные технологии и индивидуальный 
              подход к каждому проекту.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              От дизайн-проекта до финальной отделки — мы берем на себя все этапы работы, 
              обеспечивая полную прозрачность процесса и соблюдение сроков.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-background rounded-lg p-6 shadow-soft"
            >
              <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
