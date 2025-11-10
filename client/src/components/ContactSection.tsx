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
        
        <div className="bg-card rounded-3xl shadow-md border border-border p-8 md:p-12 mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-contact-name"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-contact-email"
                />
              </div>
            </div>
            
            <div>
              <Textarea
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                data-testid="input-contact-message"
              />
            </div>
            
            <Button type="submit" size="lg" className="w-full" data-testid="button-contact-submit">
              Send Message
            </Button>
          </form>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10" data-testid="container-contact-email">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Or email us at</div>
              <a href="mailto:hello@example.com" className="text-lg font-semibold hover:text-accent transition-colors">
                hello@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
