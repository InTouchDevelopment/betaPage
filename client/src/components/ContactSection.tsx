import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, Users, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Focus group signup:', formData);
    toast({
      title: 'Welcome to the focus group!',
      description: 'Thank you for joining. We\'ll be in touch soon.',
    });
    setFormData({ name: '', email: '' });
  };

  const benefits = [
    {
      icon: Sparkles,
      title: 'Shape the Future',
      description: 'Your voice directly influences our platform\'s development',
    },
    {
      icon: Users,
      title: 'Early Access',
      description: 'Be among the first to experience [Product Name]',
    },
    {
      icon: Heart,
      title: 'Community Connection',
      description: 'Join a network of like-minded individuals',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-muted/50">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8" data-testid="text-contact-title">
            Want to Get Involved?
          </h2>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-base md:text-lg leading-relaxed" data-testid="text-contact-intro">
              Long days. Endless to-do lists. The nonstop juggle of work, life, and everything in between.
            </p>
            <p className="text-base md:text-lg leading-relaxed" data-testid="text-contact-challenge">
              Staying truly connected—with yourself and with others—can start to feel out of reach.
            </p>
            <p className="text-lg md:text-xl font-semibold mt-6" data-testid="text-contact-cta">
              Help us change that.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-8 text-center shadow-sm border border-border/50"
              data-testid={`card-benefit-${index}`}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2" data-testid={`text-benefit-title-${index}`}>
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground" data-testid={`text-benefit-desc-${index}`}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto bg-background rounded-2xl p-8 md:p-12 shadow-sm border border-border/50">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-3" data-testid="text-focus-group-title">
            Join Our Focus Group
          </h3>
          <p className="text-center text-muted-foreground mb-8" data-testid="text-focus-group-subtitle">
            Be part of building a tool that helps people reconnect in a real, human way
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-muted/50 border-border/50"
                data-testid="input-contact-name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-muted/50 border-border/50"
                data-testid="input-contact-email"
              />
            </div>
            
            <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white" data-testid="button-contact-submit">
              Join the Focus Group
            </Button>
            
            <p className="text-sm text-center text-muted-foreground" data-testid="text-privacy-note">
              No spam, we promise. Your privacy matters to us.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
