import { Button } from '@/components/ui/button';

export default function InspirationSection() {
  const scrollToWaitlist = () => {
    const element = document.querySelector('#waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inspiration" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/8 via-accent/5 to-primary/8">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <div className="space-y-6">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight" data-testid="text-inspiration-headline">
            Grow your relationship capital.
          </p>
          
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight" data-testid="text-inspiration-subheadline">
            Grow your <span className="text-accent">happiness</span>, <span className="text-accent">health</span>, and <span className="text-accent">sense of belonging</span>.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground pt-4" data-testid="text-inspiration-body">
            Nithen helps you build the connected life we all deserve.
          </p>
          
          <div className="pt-6">
            <Button 
              onClick={scrollToWaitlist}
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white rounded-full font-bold text-lg px-10 py-6"
              data-testid="button-inspiration-waitlist"
            >
              Join the Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
