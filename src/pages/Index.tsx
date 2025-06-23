
import Hero from '@/components/Hero';
import Journal from '@/components/Journal';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

const Index = () => {
  return (
    <div className="min-h-screen pb-20">
      <Hero />
      <Journal />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
