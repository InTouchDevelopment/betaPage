import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: 'Message sent!',
      description: 'Thank you for reaching out. We\'ll get back to you soon.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8" data-testid="text-contact-title">
            Want to Get Involved?
          </h2>
          
          <div className="space-y-4 max-w-2xl mx-auto mb-8">
            <p className="text-lg md:text-xl leading-relaxed" data-testid="text-contact-intro">
              Long days. Endless to-do lists. The nonstop juggle of work, life, and everything in between.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground" data-testid="text-contact-challenge">
              Staying truly connected—with yourself and with others—can start to feel out of reach.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-accent mt-6" data-testid="text-contact-cta">
              Help us change that
            </p>
          </div>
        </div>
        
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-3" data-testid="text-focus-group-title">
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
                data-testid="input-contact-email"
              />
            </div>
            
            <Button type="submit" size="lg" className="w-full" data-testid="button-contact-submit">
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
