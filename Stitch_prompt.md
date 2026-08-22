# Stitch Prompt — Chen Siyi Personal Portfolio Website

> Paste each screen prompt individually into Stitch. Start with Screen 1 to lock in the global design system, then use subsequent prompts to generate the remaining pages.

---

## 🎨 Global Design System (paste first — sets the theme)

```
A premium personal portfolio website built on a "Frosted Depth" glassmorphism design system. 

Visual language: layered translucent glass cards floating above a rich blue-green gradient canvas. The background is a deep teal-to-midnight gradient (#0a2e38 → #0d1b2a) with soft ambient light leaks and radial glow halos. All interactive surfaces use backdrop-filter blur (16–24px), 1px white-tinted borders (rgba 255,255,255,0.12), and subtle inner glow shadows to simulate frosted glass depth.

Typography system:
- Logo / Display: serif-style artistic English font (Playfair Display or Cormorant Garamond), uppercase, tracking-wide — used for the brand logo "Résumé"
- Headings (H1–H2): Inter or DM Sans, bold 700, color: teal (#38bec9) for primary titles
- Subheadings (H3): Inter, semi-bold 600, color: near-black (#1a1a2e)
- Body / labels: Inter Regular, color: medium gray (#8a9bb0)
- Metadata / badges: JetBrains Mono, font-size 11–12px, teal-tinted

Color tokens:
- Background gradient: #0a2e38 → #0d1b2a (blue-green to deep navy)
- Primary accent: teal #38bec9
- Glass surface: rgba(255,255,255,0.06) with backdrop-filter blur(20px)
- Glass border: 1px solid rgba(255,255,255,0.12)
- Title text: #38bec9 (teal)
- Subtitle text: #1a1a2e (near-black)
- Body text: #8a9bb0 (muted blue-gray)
- CTA button: teal gradient (#38bec9 → #0ea5e9)

Layout: Full-width web, 1440px max-width canvas, 80px horizontal gutters. Navigation is a persistent top navbar. No profile photos or human avatars anywhere on the site.

Interactive effects (annotate in design notes):
- Page transitions: fade-in / fade-out (300ms ease)
- Scroll behavior: simulated page-flip / parallax depth shift
- Cursor effect: soft radial light beam that follows the mouse
- Loading screen: a small pixel-art running cat animation with a teal progress bar beneath it
```

---

## Screen 1 — Homepage (首页)

```
Design the Homepage screen for a personal portfolio website using the "Frosted Depth" glassmorphism design system defined above.

Platform: Desktop web (1440px wide)
User: A recruiter or collaborator visiting for the first time, needs a quick but impactful introduction.
Goal: Communicate identity, age, and work experience in under 5 seconds. Prompt further exploration.

Layout & hierarchy:

TOP NAVBAR (glassmorphism, sticky):
- Left: Logo area — small 12px sans-serif label "Welcome to Chen's Space" stacked above the main logo wordmark "Résumé" in artistic serif uppercase font (teal colored). Logo sits at the very left edge within nav padding.
- Center: Nav links — Home · About · Work Experience · Contact (active state: teal underline)
- Right: empty or subtle decorative element (no avatar/photo)

HERO SECTION (full viewport height, vertically centered):
- Left 60%: Large hero copy
  - Overline tag in JetBrains Mono 12px teal: "Product Manager · 2 yrs experience"
  - H1 headline (display serif, massive, teal): "Hi, I'm Chen Siyi."
  - Subline (Inter 20px, gray): "24 years old. I build user-centered products that bridge technology and business value."
  - Two CTA buttons: [View My Work] (filled teal gradient) · [Contact Me] (ghost outlined)
- Right 40%: A floating glassmorphism card (no photo) showing a minimal personal info panel:
  - Card with blurred glass surface, teal glow border
  - Three stat rows with teal label + white value:
    - Name: Chen Siyi
    - Age: 24
    - Work Experience: 2 Years
  - Decorative teal radial glow halo behind the card

BACKGROUND:
- Deep blue-green gradient (#0a2e38 → #0d1b2a)
- Two large ambient blur circles (teal #38bec9 and cyan #0ea5e9, opacity 0.15–0.2) acting as light leaks in the upper-right and lower-left

Visual constraints:
- No human photographs or avatars
- All cards must use the glassmorphism treatment (backdrop-blur, rgba fill, white border)
- Font sizes: H1 clamp(48px, 6vw, 80px); overline 12px mono; body 18–20px
```

---

## Screen 2 — About Me (关于我)

```
Design the About Me page screen for the same "Frosted Depth" portfolio website. Keep the same sticky glassmorphism navbar from Screen 1 (active state now on "About").

Platform: Desktop web (1440px wide)
Goal: Present personal background, strengths, contact details, and a teaser link to Work Experience — all in a single scrollable page.

Layout & hierarchy:

SECTION HEADER:
- H2 teal title: "About Me"
- Gray subtitle (Inter Regular 16px): "A little bit about who I am"
- Thin teal decorative rule beneath

MAIN CONTENT — two-column grid (60% / 40%):

LEFT COLUMN — text content in stacked glassmorphism panels:
1. "Personal Background" panel:
   - Teal H3 label: "Background"
   - Body text (gray): [placeholder — freestyle personal introduction, 3–4 lines]
   - Glass card with subtle inner glow

2. "My Strengths" panel:
   - Teal H3 label: "Strengths"
   - 3–4 bullet points with teal dot markers
   - [placeholder — freestyle strengths list]

RIGHT COLUMN — utility panels:
3. "Contact Info" panel (glassmorphism):
   - Teal H3 label: "Contact"
   - Three rows, each with a small teal icon + copyable value:
     - 📧 Email: hello@chensivi.com (with a small "copy" icon on the right)
     - 📱 Phone: +86 138 xxxx xxxx (with copy icon)
     - 💬 WeChat: chensivi_wx (with copy icon)
   - Copy icon highlights teal on hover

4. "Work Experience" teaser panel (glassmorphism):
   - Teal H3 label: "Work Experience"
   - Short descriptor text in gray (2 lines)
   - A teal arrow-text link: "View full experience →" (click jumps to Work Experience page)
   - Card border glows teal on hover

BACKGROUND: Same gradient. One ambient teal glow orb centered-right.

Visual constraints:
- No photos
- Copy icons must be visually present (not hidden)
- All panels use glassmorphism card treatment
```

---

## Screen 3 — Work Experience (工作经历)

```
Design the Work Experience page for the "Frosted Depth" portfolio website. Same sticky glassmorphism navbar (active: "Work Experience").

Platform: Desktop web (1440px wide)
User: A hiring manager or collaborator evaluating the person's professional track record.
Goal: Present 2–3 job roles with clear hierarchy: company + project context, body description, and deliverable outputs.

Layout & hierarchy:

SECTION HEADER:
- H2 teal: "Work Experience"
- Gray subtitle: "Projects I've built and teams I've worked with"

TIMELINE — vertical center line (1px teal, with glow), items alternate left/right:

Each experience entry is a glassmorphism card containing:
- TOP BAR of card:
  - H3 teal bold: "[Company Name] · [Project Name]" (e.g., "Acme Corp · Mobile Growth Project")
  - Right-aligned period badge (JetBrains Mono 11px, glass pill): e.g., "2023.06 – Present"
  - Role subtitle (Inter semi-bold black #1a1a2e): e.g., "Senior Product Manager"
- BODY:
  - 3–4 bullet points (gray body text, teal chevron ▸ marker) describing responsibilities and impact
- OUTPUTS section (labeled "Key Deliverables"):
  - A horizontal strip of 2–3 output placeholder tiles — each is a glass rectangle with a teal dashed border and centered label like "[Screenshot / Output Image]" in muted gray italic — indicating where work output images would go
  - Add note in design: "image slots — actual screenshots to be filled in"

SHOW 3 experience entries. Third entry should appear slightly faded (older role).

BACKGROUND: Same deep gradient. Ambient glow orb upper-left, teal.

Visual constraints:
- No real photos; output image slots must be visible as labeled placeholders (no solid fills)
- Timeline line must be visually prominent (teal glow stroke)
- Each card must have hover state: brighter teal border glow
```

---

## Screen 4 — Contact Me (联系我)

```
Design the Contact Me page for the "Frosted Depth" portfolio website. Same sticky navbar (active: "Contact").

Platform: Desktop web (1440px wide)
User: Someone ready to reach out — wants to quickly find contact details or send a message.
Goal: Make all three contact methods (phone, email, WeChat) immediately visible and interactive. Include a simple message form.

Layout & hierarchy:

SECTION HEADER:
- H2 teal: "Get In Touch"
- Gray subtitle: "I usually respond within 1–2 business days."

TWO-COLUMN LAYOUT:

LEFT (40%) — Contact Info panel (glassmorphism):
- Teal H3: "Reach Me Directly"
- Three contact method rows, each in a subtle glass sub-card:
  Row 1 — Email:
    - Teal icon (envelope) + label "Email" in gray mono 11px
    - Value: hello@chensivi.com in white
    - [Copy] button with teal ghost border (on hover: filled teal)
  Row 2 — Phone:
    - Teal icon (phone) + label "Phone"
    - Value: +86 138 xxxx xxxx
    - [Copy] button
  Row 3 — WeChat:
    - Teal icon (chat bubble) + label "WeChat"
    - Value: chensivi_wx
    - [Copy] button
- Separator line (teal, 0.5px opacity)
- Below: Social links row — GitHub · LinkedIn (teal text links, arrow-out icon)

RIGHT (60%) — Message Form panel (glassmorphism):
- Teal H3: "Send a Message"
- Form fields (all glass-input style: dark bg, white text, teal focus ring):
  - Name (single line)
  - Email (single line)
  - Message (textarea, 5 rows)
- Submit button: full-width, teal gradient, "Send Message" label, rounded-md
- Inactive/sent state: button label changes to "Sent ✓", muted teal

BACKGROUND: Same gradient. Soft teal glow orb bottom-right.

Visual constraints:
- Copy buttons must be visually distinct and present on all three contact rows
- Form inputs: glass treatment — rgba dark fill, 1px border rgba white 0.15, teal outline on focus
- No photos or avatars
```

---

## 📋 Global Style Notes for Stitch Consistency

```
Across all screens, enforce:

1. Navbar: glassmorphism (backdrop-blur 16px, rgba(10,46,56,0.7) bg, 1px teal-tinted border bottom). Height 64px. Logo "Résumé" always left, nav links center.

2. Button system:
   - Primary: teal gradient (#38bec9 → #0ea5e9), white text, border-radius 8px, subtle box-shadow glow
   - Secondary/Ghost: transparent bg, 1px teal border, teal text
   - Copy: small, 28px height, ghost style

3. Glass cards: background rgba(255,255,255,0.05), backdrop-filter blur(20px), border 1px rgba(255,255,255,0.12), border-radius 16px, box-shadow 0 8px 32px rgba(0,0,0,0.4)

4. Section spacing: 120px top/bottom padding per section. 80px horizontal gutters.

5. No images, avatars, or placeholder human silhouettes anywhere. Use abstract geometric shapes, teal glow orbs, or labeled glass placeholder tiles only.

6. Annotate all interactive states in design notes:
   - Hover: card border brightens to solid teal
   - Active nav link: teal underline
   - Button hover: slight upward translate + stronger glow
   - Page load: running-cat loader (pixel art cat + teal progress bar)
   - Page transition: 300ms fade-in from slight opacity 0
   - Scroll: parallax depth — glass cards shift at 0.8x scroll rate relative to background
   - Cursor: soft radial light halo (60px, rgba teal 0.15) follows mouse position
```

---

*Generated for: Chen Siyi Personal Portfolio · Style reference: designprompts.dev "Glassmorphism" + "Futuristic SaaS" aesthetics · Tool: Google Stitch*
