# Design Guidelines: Single-Page Product Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern SaaS landing pages (Linear, Stripe, Vercel) with emphasis on clean layouts, bold typography, and strategic use of whitespace. This approach suits the product-focused narrative and visual team showcase.

## Core Design Principles
1. **Vertical Rhythm**: Establish consistent section flow with smooth transitions between content blocks
2. **Focus & Clarity**: Each section tells one story exceptionally well
3. **Visual Hierarchy**: Guide users through the narrative from product to team to action

---

## Typography System

**Font Selection**: Google Fonts via CDN
- **Primary (Headings)**: Inter (600, 700, 800 weights)
- **Secondary (Body)**: Inter (400, 500 weights)

**Type Scale**:
- Hero Headlines: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headers: text-3xl md:text-4xl lg:text-5xl, font-semibold
- Subsection Headers: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal, leading-relaxed
- Captions/Labels: text-sm, font-medium

---

## Layout System

**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Component spacing: gap-8 md:gap-12
- Container margins: px-6 md:px-8 lg:px-12

**Container Strategy**:
- Full-width sections: w-full with inner max-w-7xl mx-auto
- Content sections: max-w-6xl mx-auto
- Text-heavy content: max-w-4xl mx-auto for optimal readability

---

## Navigation Bar

**Structure**: Fixed position (sticky top-0 z-50)
- Height: h-20 on all viewports
- Container: max-w-7xl mx-auto with horizontal padding px-6 md:px-8
- Layout: Flexbox with space-between alignment

**Components**:
- Logo/Brand: Left-aligned, text-xl md:text-2xl font-bold
- Navigation Links: Horizontal menu (hidden on mobile, visible md:flex)
  - Links: text-base font-medium with spacing gap-8
  - Active state indicator using underline decoration
- Sign Up CTA: Right-aligned button (primary style)
- Mobile Menu Toggle: Hamburger icon (visible on mobile only)

**Backdrop Treatment**: Subtle backdrop blur (backdrop-blur-md) with semi-transparent background for depth while maintaining content visibility

---

## Section Designs

### 1. Meet the Product (Hero Section)

**Layout**: Two-column split (reverse on mobile)
- Left Column (60%): Content with hierarchy
  - Eyebrow text: Small label (text-sm font-semibold tracking-wide uppercase)
  - Main headline: Hero text scale with strong visual weight
  - Supporting paragraph: text-lg leading-relaxed, max-w-xl
  - CTA Group: Two buttons (primary + secondary) with gap-4
- Right Column (40%): Product visualization area
  - Placeholder for product screenshot/mockup
  - Add subtle shadow (shadow-2xl) and rounded corners (rounded-2xl)

**Vertical Space**: 80vh minimum height to create impact, with centered content

**Image**: Large product screenshot or hero image on right side, aspect ratio 16:9 or 4:3

### 2. Why We're Building

**Layout**: Centered, single-column narrative
- Max-width: max-w-4xl for comfortable reading
- Section header centered with mb-12
- Content structure:
  - Opening paragraph: Larger text (text-xl) for emphasis
  - Body content: 2-3 paragraphs in text-lg with generous line-height
  - Optional pull quote: Distinctive styling with border-l-4 treatment

**Visual Accent**: Consider adding a subtle visual element (icon or minimal graphic) above the header

### 3. Meet the Team

**Layout**: Grid-based card system
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 with gap-8 md:gap-12
- Each team member card:
  - Image container: aspect-square with rounded-2xl, overflow-hidden
  - Member photo: object-cover w-full h-full
  - Content overlay or below image:
    - Name: text-xl font-semibold
    - Role/Title: text-base
    - Optional short bio: text-sm leading-relaxed

**Section Header**: Large, centered title with mb-16 spacing before grid

**Card Interaction**: Subtle hover effect - slight scale transform (hover:scale-105 transition-transform)

**Images**: Team member photos referenced as 'members', displayed in consistent aspect-square containers

### 4. Contact

**Layout**: Two-column split (stack on mobile)
- Left Column (40%): Contact information
  - Section header
  - Contact details list:
    - Email address with icon (Heroicons envelope)
    - Phone number with icon (Heroicons phone)
    - Address with icon (Heroicons map-pin)
  - Social media links (horizontal icon row)
- Right Column (60%): Contact form
  - Form fields:
    - Name (text input)
    - Email (email input)
    - Message (textarea with rows="6")
  - Submit button (full-width on mobile)
  - All inputs: Consistent styling with border, rounded-lg, px-4 py-3

**Form Styling**: Cohesive input design with focus states using ring utilities

### 5. Sign Up

**Layout**: Centered, compact section
- Max-width: max-w-2xl for focused conversion
- Structure:
  - Compelling headline: text-4xl md:text-5xl font-bold, centered
  - Supporting text: text-lg, centered, mb-8
  - Email signup form:
    - Horizontal layout on desktop (flex with gap-4)
    - Stack on mobile
    - Email input: flex-1
    - Submit button: Prominent primary style
  - Trust indicator: Small text below form (e.g., "Join 10,000+ users")

**Visual Treatment**: Consider a subtle background treatment to differentiate from other sections

---

## Component Library

### Buttons
**Primary Button**:
- Padding: px-6 md:px-8 py-3 md:py-4
- Text: text-base md:text-lg font-semibold
- Border radius: rounded-lg
- Width: Auto-width with min-w-[140px]

**Secondary Button**:
- Same dimensions as primary
- Outlined style with border-2

**Blurred Buttons** (on images):
- Backdrop-blur-sm with semi-transparent background
- No hover/active states specified (handled by component)

### Input Fields
**Text Inputs & Textareas**:
- Height: h-12 for single-line inputs
- Padding: px-4 py-3
- Border: border with rounded-lg
- Font: text-base
- Focus state: ring-2 ring-offset-2

### Cards
**Team Member Cards**:
- Padding: p-6
- Border radius: rounded-2xl
- Shadow: shadow-lg
- Image: aspect-square, rounded-t-2xl or rounded-2xl if overlay

### Icons
**Library**: Heroicons (outline style) via CDN
- Icon size: w-5 h-5 md:w-6 md:h-6 for inline icons
- Navigation icons: w-6 h-6 for mobile menu

---

## Smooth Scroll Implementation

**Behavior**: Native CSS smooth scroll (scroll-behavior: smooth on html element)
- Navigation links use anchor tags with href="#section-id"
- Each section has unique ID attribute
- Offset consideration: Account for fixed navbar height (scroll-margin-top: 5rem)

---

## Responsive Breakpoints

**Mobile-First Approach**:
- Base (mobile): < 768px - Single column layouts
- md (tablet): ≥ 768px - Two-column layouts emerge
- lg (desktop): ≥ 1024px - Full multi-column layouts, expanded spacing

**Navigation Adaptations**:
- Mobile: Hamburger menu with full-screen overlay
- Desktop: Horizontal navigation bar

---

## Accessibility Considerations

- Maintain consistent form input styling across all fields
- Ensure sufficient contrast ratios for all text
- Keyboard navigation support for all interactive elements
- Alt text for all member images using descriptive names
- Focus indicators on all interactive elements

---

## Images Summary

**Required Images**:
1. **Hero Section**: Product screenshot/mockup (16:9 or 4:3 aspect ratio, right side of hero)
2. **Team Section**: Multiple member photos (square aspect ratio, displayed in grid)

**Image Treatment**: All images use rounded corners (rounded-2xl), subtle shadows where appropriate, and object-cover for consistent aspect ratios