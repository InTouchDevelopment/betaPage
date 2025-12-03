import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToWaitlist = () => {
    const element = document.querySelector('#waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-[85vh] flex items-center py-16 md:py-24 lg:py-32 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 w-full text-center">
        <p className="text-lg md:text-xl text-accent font-medium mb-4" data-testid="text-hero-brand">
          Nithen AI
        </p>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
          Strengthen the Relationships That <span className="text-accent">Strengthen You</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground mb-4 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
          Life is richer, healthier, and happier when your relationships are strong.
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto" data-testid="text-hero-description">
          Nithen helps you stay connected to the people who matter — effortlessly.
        </p>
        
        <Button 
          onClick={scrollToWaitlist}
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-white rounded-full font-bold text-lg px-10 py-6"
          data-testid="button-hero-waitlist"
        >
          Join the Waitlist
        </Button>
      </div>
    </section>
  );
}
