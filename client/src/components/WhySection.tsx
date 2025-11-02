export default function WhySection() {
  return (
    <section id="why" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-12" data-testid="text-why-title">
          Why We're Building
        </h2>
        
        <div className="space-y-6">
          <p className="text-xl leading-relaxed" data-testid="text-why-intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground" data-testid="text-why-body-1">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground" data-testid="text-why-body-2">
            Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          
          <div className="border-l-4 border-primary pl-6 py-2 my-8" data-testid="container-why-quote">
            <p className="text-xl italic text-foreground">
              "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
