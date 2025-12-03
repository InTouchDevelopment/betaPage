import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Sparkles, Users } from 'lucide-react';

export default function InspirationSection() {
  const scrollToWaitlist = () => {
    const element = document.querySelector('#waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inspiration" className="py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/8 to-primary/10"></div>
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-accent/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <div className="flex justify-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
            <Heart className="w-5 h-5 text-accent" />
          </div>
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-accent" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" data-testid="text-inspiration-headline">
          Grow Your Relationship Capital.
        </h2>
        
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight" data-testid="text-inspiration-subheadline">
          Grow Your{' '}
          <span className="text-accent">Happiness</span>,{' '}
          <span className="text-accent">Health</span>, and{' '}
          <span className="text-accent">Sense of Belonging</span>.
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto" data-testid="text-inspiration-body">
          Nithen helps you build the connected life we all deserve.
        </p>
        
        <Button 
          onClick={scrollToWaitlist}
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-white rounded-full font-semibold text-lg px-10 py-6 shadow-xl shadow-accent/25 group"
          data-testid="button-inspiration-waitlist"
        >
          Start Your Journey
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
