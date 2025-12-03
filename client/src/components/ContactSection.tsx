import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Check, Users, Sparkles, Heart } from 'lucide-react';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

      setIsSubmitted(true);
      toast({
        title: 'Welcome to the waitlist!',
        description: 'We\'ll be in touch soon with early access.',
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

  const benefits = [
    { icon: Sparkles, text: 'Early access to new features' },
    { icon: Users, text: 'Join our founding community' },
    { icon: Heart, text: 'Help shape the product' },
  ];

  return (
    <section id="waitlist" className="py-20 md:py-28 lg:py-36 bg-gradient-to-br from-accent/8 via-background to-primary/8">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm" data-testid="text-waitlist-label">
              Join Early Access
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-contact-title">
              Be Part of Something
              <br />
              <span className="text-accent">Meaningful</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-contact-intro">
              We're opening Nithen to a small group of early members who believe human connection is essential to a good life.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3" data-testid={`item-benefit-${index}`}>
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-foreground">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-card rounded-3xl p-8 md:p-10 border border-border/50 shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <Check className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3" data-testid="text-success-title">You're on the list!</h3>
                <p className="text-muted-foreground" data-testid="text-success-message">
                  We'll reach out soon with early access details.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-2" data-testid="text-form-title">
                  Join the Waitlist
                </h3>
                <p className="text-muted-foreground mb-6" data-testid="text-form-subtitle">
                  Get early access when we launch.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
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
                      className="bg-background border-border/80 rounded-xl h-12"
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
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background border-border/80 rounded-xl h-12"
                      data-testid="input-contact-email"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-white rounded-full font-semibold text-lg h-14 shadow-lg shadow-accent/20 group"
                    disabled={isSubmitting}
                    data-testid="button-contact-submit"
                  >
                    {isSubmitting ? 'Joining...' : 'Get Early Access'}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground pt-2" data-testid="text-privacy-note">
                    No spam, ever. Your privacy matters.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
