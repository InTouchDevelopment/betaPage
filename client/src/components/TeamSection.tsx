import member1 from '@assets/generated_images/Professional_team_member_headshot_1_e1ea877e.png';
import member2 from '@assets/generated_images/Professional_team_member_headshot_2_72aed258.png';
import member3 from '@assets/generated_images/Professional_team_member_headshot_3_2cd8ab3d.png';
import member4 from '@assets/generated_images/Professional_team_member_headshot_4_a67a4805.png';
import member5 from '@assets/generated_images/Professional_team_member_headshot_5_926ed074.png';
import member6 from '@assets/generated_images/Professional_team_member_headshot_6_689a2ead.png';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    image: member1,
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    image: member2,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Product',
    image: member3,
  },
  {
    name: 'David Kim',
    role: 'Lead Designer',
    image: member4,
  },
  {
    name: 'Jessica Taylor',
    role: 'Head of Marketing',
    image: member5,
  },
  {
    name: 'James Anderson',
    role: 'VP of Engineering',
    image: member6,
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-28 lg:py-36 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm" data-testid="text-team-label">
            The People Behind Nithen
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-team-title">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-team-intro">
            A passionate group dedicated to making human connection easier.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center"
              data-testid={`card-team-member-${index}`}
            >
              <div className="relative mb-5">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden ring-2 ring-border group-hover:ring-accent/50 transition-all duration-300 group-hover:scale-105">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    data-testid={`img-member-${index}`}
                  />
                </div>
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-1" data-testid={`text-member-name-${index}`}>
                {member.name}
              </h3>
              <p className="text-sm text-accent font-medium" data-testid={`text-member-role-${index}`}>
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
