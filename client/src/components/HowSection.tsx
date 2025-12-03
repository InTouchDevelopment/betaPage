import { Users, UserPlus, Lightbulb, Bell, Brain, Heart } from 'lucide-react';

export default function HowSection() {
  const features = [
    {
      icon: Users,
      text: 'AI helps you set up your personal network — so your most important people stay top of mind.',
    },
    {
      icon: UserPlus,
      text: 'Shows you who to add as your life evolves, keeping your circle rich and relevant.',
    },
    {
      icon: Lightbulb,
      text: 'Offers thoughtful connection recommendations that take the guesswork out of staying close.',
    },
    {
      icon: Bell,
      text: 'Gently nudges you at the right times so you reconnect naturally, not out of guilt or obligation.',
    },
    {
      icon: Brain,
      text: 'Reduces the mental load of keeping up — because connection shouldn\'t feel like another task.',
    },
    {
      icon: Heart,
      text: 'Strengthens your relationships over time, making your life more supported, grounded, and meaningful.',
    },
  ];

  return (
    <section id="how" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12" data-testid="text-how-title">
          How Nithen Supports You
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex gap-4 p-6 bg-background rounded-2xl border border-border/50 shadow-sm"
              data-testid={`card-feature-${index}`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-primary/15 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-foreground leading-relaxed pt-2" data-testid={`text-feature-${index}`}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
