import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhySection from '@/components/WhySection';
import HowSection from '@/components/HowSection';
import WhoSection from '@/components/WhoSection';
import FounderMessage from '@/components/FounderMessage';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import InspirationSection from '@/components/InspirationSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <HeroSection />
        <WhySection />
        <HowSection />
        <WhoSection />
        <FounderMessage />
        <TeamSection />
        <ContactSection />
        <InspirationSection />
      </main>
      <Footer />
    </div>
  );
}
