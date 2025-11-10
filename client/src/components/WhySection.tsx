export default function WhySection() {
  return (
    <section id="why" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-12" data-testid="text-why-title">
          Why We're Building InTouch
        </h2>
        
        <div className="space-y-6">
          <p className="text-xl leading-relaxed" data-testid="text-why-intro">
            In today's fast-paced world, busy professionals are struggling to build, grow, and sustain authentic relationships. As a result, feelings of loneliness and isolation are rising—bringing with them serious physical and mental health risks that impact both personal wellbeing and workplace productivity.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground" data-testid="text-why-body-1">
            At InTouch, we're reimagining how technology can facilitate and nurture genuine human connection. In a world where people are more digitally linked yet emotionally distant, our platform bridges that gap—transforming everyday workplace interactions into opportunities for empathy and belonging.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground" data-testid="text-why-body-2">
            Our goal is simple: to make it easier for professionals to feel seen, supported, and truly in touch—with themselves, with their colleagues, and with their teams. By building relationship capital, we help create thriving workplaces where people genuinely connect and grow together.
          </p>
          
          <div className="border-l-4 border-primary pl-6 py-2 my-8" data-testid="container-why-quote">
            <p className="text-xl italic text-foreground">
              "Making it easier for people to feel seen, supported, and truly in touch."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
