import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export default function SignUpSection() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up submitted:', email);
    toast({
      title: 'Welcome aboard!',
      description: 'Thank you for signing up. Check your email for next steps.',
    });
    setEmail('');
  };

  return (
    <section id="signup" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-2xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-signup-title">
          Sign Up
        </h2>
        <p className="text-lg text-muted-foreground mb-8" data-testid="text-signup-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Join thousands of users who are already experiencing the difference.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
            data-testid="input-signup-email"
          />
          <Button type="submit" size="lg" className="sm:min-w-[140px]" data-testid="button-signup-submit">
            Get Started
          </Button>
        </form>
        
        <p className="text-sm text-muted-foreground" data-testid="text-signup-trust">
          Join 10,000+ users already on board
        </p>
      </div>
    </section>
  );
}
