import { Heart, TrendingUp, Clock, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function WhySection() {
  const stats = [
    {
      icon: Heart,
      stat: '45%',
      label: 'of adults report feeling lonely',
      color: 'text-accent',
    },
    {
      icon: TrendingUp,
      stat: '2x',
      label: 'happiness boost from strong relationships',
      color: 'text-primary',
    },
    {
      icon: Clock,
      stat: '8+',
      label: 'years added to lifespan with social support',
      color: 'text-accent',
    },
    {
      icon: Shield,
      stat: '50%',
      label: 'lower risk of early death with connection',
      color: 'text-primary',
    },
  ];

  return (
    <section id="why" className="py-20 md:py-28 lg:py-36 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm" data-testid="text-why-label">
            Why It Matters
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-why-title">
            Your Greatest Source of Wellbeing is
            <br />
            <span className="text-accent">Relationship Capital</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-intro">
            Studies show that strong human connection improves happiness, resilience, and even longevity.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((item, index) => (
            <Card 
              key={index}
              className="p-6 text-center border-border/50 hover:-translate-y-1 transition-all duration-300"
              data-testid={`card-stat-${index}`}
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent/15 to-primary/10 flex items-center justify-center`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <p className={`text-3xl md:text-4xl font-bold ${item.color} mb-2`} data-testid={`text-stat-${index}`}>
                {item.stat}
              </p>
              <p className="text-sm text-muted-foreground leading-snug" data-testid={`text-stat-label-${index}`}>
                {item.label}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-border/30">
          <p className="text-lg md:text-xl text-muted-foreground mb-4" data-testid="text-why-problem">
            Yet most of us lose touch not because we don't care — <span className="text-foreground font-medium">but because life gets busy.</span>
          </p>
          <p className="text-xl md:text-2xl font-semibold text-foreground" data-testid="text-why-solution">
            Nithen helps you protect and grow the connections that make life meaningful.
          </p>
        </div>
      </div>
    </section>
  );
}
