import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="product" className="min-h-[80vh] flex items-center py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-sm font-semibold tracking-wide uppercase text-primary mb-4" data-testid="text-hero-label">
              Innovation Redefined
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" data-testid="text-hero-title">
              Meet the Product
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-xl mb-8" data-testid="text-hero-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('#signup')}
                data-testid="button-hero-primary"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('#why')}
                data-testid="button-hero-secondary"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl shadow-2xl aspect-[4/3] flex items-center justify-center" data-testid="container-hero-image">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20"></div>
                </div>
                <p className="text-muted-foreground">Product Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
