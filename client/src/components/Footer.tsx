export default function Footer() {
  return (
    <footer className="border-t border-border py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground">
            © 2025 ProductName. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary" data-testid="link-footer-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary" data-testid="link-footer-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
