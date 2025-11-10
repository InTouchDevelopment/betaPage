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
    <section id="contact" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6" data-testid="text-contact-title">
            Want to Get Involved?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or just want to chat? We're always here and happy to connect. Drop us a message and we'll get back to you with a smile!
          </p>
        </div>
        
        <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 mb-12">
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2" data-testid="container-contact-email">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div className="font-semibold">Email</div>
            <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary block">
              hello@example.com
            </a>
          </div>
          
          <div className="space-y-2" data-testid="container-contact-phone">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div className="font-semibold">Phone</div>
            <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary block">
              +1 (234) 567-890
            </a>
          </div>
          
          <div className="space-y-2" data-testid="container-contact-address">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="font-semibold">Address</div>
            <p className="text-muted-foreground">
              123 Innovation Street<br />
              Tech City, TC 12345
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
