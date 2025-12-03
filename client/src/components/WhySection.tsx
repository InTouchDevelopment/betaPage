export default function WhySection() {
  return (
    <section id="why" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12" data-testid="text-why-title">
          Why It Matters
        </h2>
        
        <div className="space-y-6 text-center">
          <p className="text-xl md:text-2xl font-semibold text-foreground" data-testid="text-why-intro">
            Your greatest source of wellbeing is relationship capital.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground" data-testid="text-why-body-1">
            Studies show that strong human connection improves happiness, resilience, and even longevity.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground" data-testid="text-why-body-2">
            Yet most of us lose touch not because we don't care — but because life gets busy.
          </p>
          
          <div className="pt-6">
            <p className="text-xl md:text-2xl font-semibold text-foreground" data-testid="text-why-conclusion">
              Nithen helps you protect and grow the connections that make life meaningful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
