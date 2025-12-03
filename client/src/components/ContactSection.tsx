import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/focus-group-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      toast({
        title: 'Welcome to the waitlist!',
        description: 'Thank you for joining. We\'ll be in touch soon.',
      });
      
      setFormData({ name: '', email: '' });
    } catch (error) {
      toast({
        title: 'Oops!',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-accent/8 via-background to-primary/8">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-contact-title">
            Join Early Access
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4" data-testid="text-contact-intro">
            We're opening Nithen to a small group of early members who believe human connection is essential to a good life.
          </p>
          
          <p className="text-lg md:text-xl text-foreground font-medium" data-testid="text-contact-cta">
            If you want stronger relationships and a more connected future — join the waitlist.
          </p>
        </div>
        
        <div className="max-w-md mx-auto bg-background rounded-2xl p-8 shadow-sm border border-border/50">
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
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-accent hover:bg-accent/90 text-white rounded-full font-bold text-lg"
              disabled={isSubmitting}
              data-testid="button-contact-submit"
            >
              {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
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
