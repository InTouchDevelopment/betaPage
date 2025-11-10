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
    <section id="team" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-16" data-testid="text-team-title">
          Meet the Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group hover-elevate transition-all duration-300 hover:scale-105 rounded-2xl"
              data-testid={`card-team-member-${index}`}
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  data-testid={`img-member-${index}`}
                />
              </div>
              <div className="px-2">
                <h3 className="text-xl font-semibold mb-1" data-testid={`text-member-name-${index}`}>
                  {member.name}
                </h3>
                <p className="text-base text-primary mb-2" data-testid={`text-member-role-${index}`}>
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground" data-testid={`text-member-bio-${index}`}>
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
