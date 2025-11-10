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
    <section id="product" className="min-h-[80vh] flex items-center py-16 md:py-24 lg:py-32 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
              Helping Busy Professionals <span className="text-accent">Authentically Connect</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-foreground" data-testid="text-hero-description">
              Build Relationship Capital and Boost Wellness
            </p>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative bg-gradient-to-br from-accent/10 via-accent/5 to-primary/10 rounded-full shadow-lg aspect-square flex items-center justify-center overflow-hidden" data-testid="container-hero-image">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/15"></div>
              <div className="relative text-center p-8">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/40 to-primary/40"></div>
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
