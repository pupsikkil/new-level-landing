'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const Gallery = () => {
  const media = [
    // Residential
    { type: 'video', src: '/new-level-landing/images/residential/r1.MOV' },
    { type: 'video', src: '/new-level-landing/images/residential/r2.MOV' },
    { type: 'image', src: '/new-level-landing/images/residential/r3.jpg' },
    { type: 'image', src: '/new-level-landing/images/residential/r4.jpg' },
    { type: 'image', src: '/new-level-landing/images/residential/r5.jpg' },
    { type: 'image', src: '/new-level-landing/images/residential/r6.jpg' },
    { type: 'image', src: '/new-level-landing/images/residential/r7.jpg' },
    { type: 'image', src: '/new-level-landing/images/residential/r8.jpg' },
    { type: 'image', src: '/new-level-landing/images/residential/r9.jpg' },
    { type: 'image', src: '/new-level-landing/images/residential/r10.jpg' },
    { type: 'image', src: '/new-level-landing/images/residential/r11.jpg' },
    { type: 'image', src: '/new-level-landing/images/residential/r12.jpg' },
    // Commercial
    { type: 'video', src: '/new-level-landing/images/commercial/c1.MP4' },
    { type: 'image', src: '/new-level-landing/images/commercial/c2.jpg' },
    { type: 'image', src: '/new-level-landing/images/commercial/c3.jpg' },
    { type: 'image', src: '/new-level-landing/images/commercial/c4.jpg' },
    { type: 'image', src: '/new-level-landing/images/commercial/c5.jpg' },
    { type: 'image', src: '/new-level-landing/images/commercial/c6.jpg' },
    { type: 'image', src: '/new-level-landing/images/commercial/c7.jpg' },
    { type: 'image', src: '/new-level-landing/images/commercial/c8.jpg' },
    { type: 'image', src: '/new-level-landing/images/commercial/c9.jpg' },
    { type: 'image', src: '/new-level-landing/images/commercial/c10.jpg' },
    { type: 'image', src: '/new-level-landing/images/commercial/c11.jpg' },
    { type: 'image', src: '/new-level-landing/images/commercial/c12.jpg' },
  ];

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16"
        >
          <h2 className="font-brand-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Примеры работ
          </h2>
          <div className="w-24 h-1 bg-gradient-brand mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Посмотрите на результаты нашей работы — каждый проект уникален и выполнен с особым вниманием к деталям
          </p>
        </div>

        {/* Media Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent>
            {media.map((item, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                <div>
                  <Card className="overflow-hidden">
                    {item.type === 'image' ? (
                      <img
                        src={item.src}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-80 object-cover"
                      />
                    ) : (
                      <video
                        src={item.src}
                        controls
                        className="w-full h-80 object-cover"
                      />
                    )}
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/80 text-foreground" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/80 text-foreground" />
        </Carousel>

        <div
          className="text-center mt-8"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Хотите увидеть больше примеров наших работ?
          </p>
          <Button
            onClick={scrollToContacts}
          >
            Запросить портфолио
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
