import { Star } from 'lucide-react';

export default function SocialProofSection() {
  const testimonials = [
    {
      quote: "Finally, an app that understands that staying in touch shouldn't feel like a chore.",
      author: "Early Tester",
      role: "Product Manager",
    },
    {
      quote: "Nithen helped me reconnect with friends I'd been meaning to reach out to for months.",
      author: "Beta User",
      role: "Entrepreneur",
    },
    {
      quote: "The gentle reminders are perfect — never pushy, always timely.",
      author: "Focus Group Member",
      role: "Designer",
    },
  ];

  const logos = [
    'Stanford', 'Harvard', 'MIT', 'Berkeley', 'Yale'
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/20 border-y border-border/30">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            Trusted by early believers from
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {logos.map((logo, index) => (
              <span 
                key={index}
                className="text-lg md:text-xl font-semibold text-muted-foreground/60"
                data-testid={`logo-${index}`}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 border border-border/50"
              data-testid={`testimonial-${index}`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed" data-testid={`quote-${index}`}>
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-medium text-sm" data-testid={`author-${index}`}>
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
