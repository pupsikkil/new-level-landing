// NEW LEVEL Construction & Design - Main Page
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Gallery } from '@/components/Gallery';
import { WhyUs } from '@/components/WhyUs';
import { CTA } from '@/components/CTA';
import { Contacts } from '@/components/Contacts';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyUs />
      <CTA />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
