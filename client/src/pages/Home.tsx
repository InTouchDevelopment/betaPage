import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhySection from '@/components/WhySection';
import TeamSection from '@/components/TeamSection';
import FounderMessage from '@/components/FounderMessage';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <WhySection />
        <TeamSection />
        <FounderMessage />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
