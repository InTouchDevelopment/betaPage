import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const scrollToWaitlist = () => {
    const element = document.querySelector('#waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-background to-primary/10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8" data-testid="badge-hero">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">AI-Powered Human Connection</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tight" data-testid="text-hero-title">
            Strengthen the Relationships
            <br />
            <span className="bg-gradient-to-r from-accent via-accent to-primary bg-clip-text text-transparent">That Strengthen You</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
            Life is richer, healthier, and happier when your relationships are strong.
          </p>
          
          <p className="text-lg text-muted-foreground/80 mb-10 max-w-xl mx-auto" data-testid="text-hero-description">
            Nithen helps you stay connected to the people who matter — effortlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToWaitlist}
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white rounded-full font-semibold text-lg px-8 py-6 shadow-lg shadow-accent/25 group"
              data-testid="button-hero-waitlist"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
