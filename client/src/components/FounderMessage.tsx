export default function FounderMessage() {
  return (
    <section id="founder" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-16" data-testid="text-founder-title">
          Message from the Founder
        </h2>
        
        <div className="space-y-8">
          <div className="text-center mb-8">
            <p className="text-xl font-semibold mb-2" data-testid="text-founder-name">
              Niten Luthra, Founder
            </p>
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p data-testid="text-founder-para-1">
              It was Thanksgiving dinner when it hit me. Surrounded by family, I realized we were all together yet somehow distant—each of us absorbed in our own worlds, struggling to truly connect despite being in the same room. That moment sparked a question: How can we make authentic connection easier in a world that keeps us so busy?
            </p>
            
            <p data-testid="text-founder-para-2">
              [Product Name] was born from that question. We're building a platform that facilitates authentic connection through a low-cognitive wellbeing display—allowing people to share how they're doing and gain meaningful insights into their network without the overwhelming time commitment. It's about making relationship-building as intentional as any other investment in your life.
            </p>
            
            <p data-testid="text-founder-para-3">
              I hope this platform brings as much connection and joy to your life as it has brought purpose to ours in creating it. Here's to staying truly in touch.
            </p>
          </div>
          
          <div className="text-right pt-4 mb-12">
            <p className="text-lg font-medium italic" data-testid="text-founder-signature">
              — Niten Luthra, Founder
            </p>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-dashed border-primary/30 flex items-center justify-center" data-testid="container-founder-image">
              <p className="text-muted-foreground text-center px-8">Founder Photo Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
