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
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: member1,
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    bio: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
    image: member2,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Product',
    bio: 'Ut enim ad minim veniam, quis nostrud exercitation.',
    image: member3,
  },
  {
    name: 'David Kim',
    role: 'Lead Designer',
    bio: 'Duis aute irure dolor in reprehenderit in voluptate.',
    image: member4,
  },
  {
    name: 'Jessica Taylor',
    role: 'Head of Marketing',
    bio: 'Excepteur sint occaecat cupidatat non proident.',
    image: member5,
  },
  {
    name: 'James Anderson',
    role: 'VP of Engineering',
    bio: 'Sunt in culpa qui officia deserunt mollit anim.',
    image: member6,
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-20 lg:pb-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16" data-testid="text-team-title">
          The Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
              data-testid={`card-team-member-${index}`}
            >
              <div className="w-48 h-48 mb-4 rounded-full overflow-hidden bg-gradient-to-br from-accent/15 to-primary/15 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    data-testid={`img-member-${index}`}
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-1" data-testid={`text-member-name-${index}`}>
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground" data-testid={`text-member-role-${index}`}>
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
