'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const media = [
    // Residential
    { type: 'image', src: '/images/residential/photo_2025-01-15_14-29-45.jpg' },
    { type: 'image', src: '/images/residential/photo_2025-07-01_15-36-21.jpg' },
    { type: 'image', src: '/images/residential/photo_2025-09-27_20-16-12.jpg' },
    { type: 'image', src: '/images/residential/photo_2025-09-27_20-16-22.jpg' },
    { type: 'video', src: '/images/residential/IMG_5515.MOV' },
    // Commercial
    { type: 'image', src: '/images/commercial/photo_2025-09-27_20-26-52.jpg' },
    { type: 'image', src: '/images/commercial/photo_2025-09-27_20-37-32 (2).jpg' },
    { type: 'image', src: '/images/commercial/photo_2025-09-27_20-37-32.jpg' },
    { type: 'image', src: '/images/commercial/photo_2025-09-27_20-37-33.jpg' },
    { type: 'video', src: '/images/commercial/IMG_3803.MP4' },
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
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-brand-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Примеры работ
          </h2>
          <div className="w-24 h-1 bg-gradient-brand mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Посмотрите на результаты нашей работы — каждый проект уникален и выполнен с особым вниманием к деталям
          </p>
        </motion.div>

        {/* Media Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {media.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
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
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
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
        </motion.div>
      </div>
    </section>
  );
};
