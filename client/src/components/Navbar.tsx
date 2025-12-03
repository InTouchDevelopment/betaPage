import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Why It Matters', href: '#why' },
    { name: 'How It Works', href: '#how' },
    { name: 'Our Story', href: '#founder' },
    { name: 'Team', href: '#team' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xl font-bold"
              data-testid="link-logo"
            >
              Nithen
            </a>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2 rounded-full transition-colors"
                data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('#waitlist')}
              className="bg-accent hover:bg-accent/90 text-white rounded-full font-semibold px-6 shadow-sm"
              data-testid="button-nav-waitlist"
            >
              Join Waitlist
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/98 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="block text-base font-medium text-muted-foreground hover:text-foreground px-4 py-3 rounded-xl hover:bg-muted transition-colors"
                data-testid={`link-mobile-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <Button
                onClick={() => scrollToSection('#waitlist')}
                className="w-full bg-accent hover:bg-accent/90 text-white rounded-full font-semibold"
                data-testid="button-mobile-waitlist"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
