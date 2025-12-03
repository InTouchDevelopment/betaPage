import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Why It Matters', href: '#why' },
    { name: 'How It Works', href: '#how' },
    { name: 'Our Story', href: '#founder' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-xl md:text-2xl font-bold">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              data-testid="link-logo"
            >
              Nithen AI
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-base font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
                data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => scrollToSection('#waitlist')}
              className="bg-accent hover:bg-accent/90 text-white rounded-full font-semibold px-6"
              data-testid="button-nav-waitlist"
            >
              Join Waitlist
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="block text-base font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md"
                data-testid={`link-mobile-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => scrollToSection('#waitlist')}
              className="w-full bg-accent hover:bg-accent/90 text-white rounded-full font-semibold mt-2"
              data-testid="button-mobile-waitlist"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
