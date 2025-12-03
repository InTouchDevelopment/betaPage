import { Users, UserPlus, Lightbulb, Bell, Brain, Heart, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function HowSection() {
  const steps = [
    {
      number: '01',
      icon: Users,
      title: 'Build Your Circle',
      description: 'AI helps you set up your personal network — so your most important people stay top of mind.',
    },
    {
      number: '02',
      icon: UserPlus,
      title: 'Evolve Together',
      description: 'Shows you who to add as your life evolves, keeping your circle rich and relevant.',
    },
    {
      number: '03',
      icon: Lightbulb,
      title: 'Smart Suggestions',
      description: 'Offers thoughtful connection recommendations that take the guesswork out of staying close.',
    },
    {
      number: '04',
      icon: Bell,
      title: 'Gentle Reminders',
      description: 'Nudges you at the right times so you reconnect naturally, not out of guilt or obligation.',
    },
    {
      number: '05',
      icon: Brain,
      title: 'Reduce Mental Load',
      description: 'Because connection shouldn\'t feel like another task on your to-do list.',
    },
    {
      number: '06',
      icon: Heart,
      title: 'Deepen Bonds',
      description: 'Strengthens your relationships over time, making your life more supported and meaningful.',
    },
  ];

  return (
    <section id="how" className="py-20 md:py-28 lg:py-36 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm" data-testid="text-how-label">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-how-title">
            Your AI-Powered
            <br />
            <span className="text-accent">Relationship Assistant</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-how-intro">
            Nithen makes staying connected feel effortless, not overwhelming.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="group p-6 border-border/50 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 relative overflow-visible"
              data-testid={`card-step-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/15 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <span className="text-xs font-bold text-accent/60 tracking-wider">{step.number}</span>
                  <h3 className="text-lg font-semibold mb-2 mt-1" data-testid={`text-step-title-${index}`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-step-desc-${index}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
