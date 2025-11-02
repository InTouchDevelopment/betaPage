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
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-16" data-testid="text-contact-title">
          Contact
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4" data-testid="container-contact-email">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1" />
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary">
                    hello@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4" data-testid="container-contact-phone">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1" />
                <div>
                  <div className="font-medium">Phone</div>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4" data-testid="container-contact-address">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1" />
                <div>
                  <div className="font-medium">Address</div>
                  <p className="text-muted-foreground">
                    123 Innovation Street<br />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
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
              
              <Button type="submit" size="lg" className="w-full sm:w-auto" data-testid="button-contact-submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
