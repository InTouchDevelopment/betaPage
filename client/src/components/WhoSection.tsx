import { Check } from 'lucide-react';

export default function WhoSection() {
  const desires = [
    'Deeper friendships',
    'Stronger family bonds',
    'A more connected daily life',
    'A supportive personal network',
    'Less isolation, more meaning',
    'The feeling of being anchored by people who care',
  ];

  return (
    <section id="who" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12" data-testid="text-who-title">
          Who Nithen Is For
        </h2>
        
        <div className="text-center mb-10">
          <p className="text-xl text-foreground font-medium" data-testid="text-who-intro">
            People who want:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {desires.map((desire, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-4"
              data-testid={`item-desire-${index}`}
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-accent" />
              </div>
              <p className="text-foreground" data-testid={`text-desire-${index}`}>
                {desire}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-xl md:text-2xl font-semibold text-foreground" data-testid="text-who-conclusion">
            If relationships matter to you, Nithen is designed for you.
          </p>
        </div>
      </div>
    </section>
  );
}
