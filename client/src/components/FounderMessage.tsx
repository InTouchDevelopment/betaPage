import founderPhoto from '@assets/image_1762743706876.png';

export default function FounderMessage() {
  return (
    <section id="founder" className="pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-12 lg:pb-16 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-12" data-testid="text-founder-title">
          A Message from the Founder
        </h2>
        
        <div className="flex justify-center mb-12">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg p-1 bg-gradient-to-br from-accent/20 to-primary/20" data-testid="img-founder">
            <div className="w-full h-full rounded-full overflow-hidden bg-background">
              <img
                src={founderPhoto}
                alt="Niten Luthra, Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
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
              Nithen AI was born from that question. We're building a platform that facilitates authentic connection through a low-cognitive wellbeing display—allowing people to share how they're doing and gain meaningful insights into their network without the overwhelming time commitment. It's about making relationship-building as intentional as any other investment in your life.
            </p>
            
            <p data-testid="text-founder-para-3">
              I hope this platform brings as much connection and joy to your life as it has brought purpose to ours in creating it. Here's to staying truly in touch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
