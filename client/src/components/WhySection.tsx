export default function WhySection() {
  return (
    <section id="why" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-12" data-testid="text-why-title">
          Why We're Building
        </h2>
        
        <div className="space-y-6">
          <p className="text-xl leading-relaxed" data-testid="text-why-intro">
            We believe everyone deserves something wonderful. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our journey started with a simple dream of making life a little brighter.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground" data-testid="text-why-body-1">
            Every day, we pour our hearts into creating experiences that feel like coming home. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. We're building this with care, thoughtfulness, and a genuine desire to make a positive difference in your world.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground" data-testid="text-why-body-2">
            Our team wakes up excited to build something meaningful together. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. We're here because we genuinely care about creating value for you and your community.
          </p>
          
          <div className="border-l-4 border-primary pl-6 py-2 my-8" data-testid="container-why-quote">
            <p className="text-xl italic text-foreground">
              "Building with heart, creating with purpose, serving with joy."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
