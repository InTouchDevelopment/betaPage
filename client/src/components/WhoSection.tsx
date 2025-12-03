import { Check, Users, Heart, Home, Network, Sun, Anchor } from 'lucide-react';

export default function WhoSection() {
  const desires = [
    { icon: Users, text: 'Deeper friendships' },
    { icon: Home, text: 'Stronger family bonds' },
    { icon: Sun, text: 'A more connected daily life' },
    { icon: Network, text: 'A supportive personal network' },
    { icon: Heart, text: 'Less isolation, more meaning' },
    { icon: Anchor, text: 'The feeling of being anchored by people who care' },
  ];

  return (
    <section id="who" className="py-20 md:py-28 lg:py-36 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm" data-testid="text-who-label">
            Who It's For
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-who-title">
            Built for People Who
            <br />
            <span className="text-accent">Value Connection</span>
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-who-intro">
            Nithen is for anyone who wants:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
          {desires.map((desire, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-background to-muted/30 border border-border/40 hover:border-accent/30 transition-colors"
              data-testid={`item-desire-${index}`}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <desire.icon className="w-5 h-5 text-accent" />
              </div>
              <p className="text-foreground font-medium" data-testid={`text-desire-${index}`}>
                {desire.text}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 rounded-3xl p-8 md:p-10 border border-accent/20">
          <p className="text-xl md:text-2xl font-semibold text-foreground" data-testid="text-who-conclusion">
            If relationships matter to you, <span className="text-accent">Nithen is designed for you.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
