import founderPhoto from '@assets/image_1762743706876.png';
import { Quote } from 'lucide-react';

export default function FounderMessage() {
  return (
    <section id="founder" className="py-20 md:py-28 lg:py-36 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm" data-testid="text-founder-label">
            Our Story
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="text-founder-title">
            A Message from the Founder
          </h2>
        </div>
        
        <div className="relative bg-gradient-to-br from-card to-background rounded-3xl p-8 md:p-12 border border-border/50 shadow-sm">
          <div className="absolute top-6 left-6 md:top-8 md:left-8">
            <Quote className="w-8 h-8 md:w-10 md:h-10 text-accent/20" />
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start pt-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-accent/20 ring-offset-4 ring-offset-background" data-testid="img-founder">
                <img
                  src={founderPhoto}
                  alt="Niten Luthra, Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-4">
                <p className="font-semibold text-foreground" data-testid="text-founder-name">
                  Niten Luthra
                </p>
                <p className="text-sm text-accent font-medium">Founder</p>
              </div>
            </div>
            
            <div className="flex-1 space-y-5 text-muted-foreground leading-relaxed">
              <p data-testid="text-founder-para-1">
                It was Thanksgiving dinner when it hit me. Surrounded by family, I realized we were all together yet somehow distant—each of us absorbed in our own worlds, struggling to truly connect despite being in the same room.
              </p>
              
              <p data-testid="text-founder-para-2">
                That moment sparked a question: <span className="text-foreground font-medium">How can we make authentic connection easier in a world that keeps us so busy?</span>
              </p>
              
              <p data-testid="text-founder-para-3">
                Nithen was born from that question. We're building a platform that facilitates authentic connection through shared activities, timing alignment, and deeper day-to-day touchpoints—making relationship-building as intentional as any other investment in your life.
              </p>
              
              <p className="text-foreground font-medium italic" data-testid="text-founder-para-4">
                Here's to staying truly in touch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
