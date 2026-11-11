# Hero Section Block — Premium Template Library (30 Templates)

A commercial-grade library of **30 unique, handcrafted Hero Section templates** designed specifically for the WordPress plugin **[Hero Section for Block Editor](https://wordpress.org/plugins/hero-section-block/)**.

Built with **HTML5, Vanilla CSS3, and JavaScript** — strictly zero React/Vue framework dependencies, modular CSS scoping, and complete responsive support for Desktop, Tablet, and Mobile.

---

## 🚀 Live Showcase & Preview

A central interactive showcase dashboard is included. You can browse all 30 designs, filter by industry category, search in real-time, test interactive viewports (Desktop 1440px, Tablet 768px, Mobile 390px), and copy clean semantic HTML directly for Gutenberg block pattern integration.

### Quick Start (Local Server)
```bash
# Run the built-in static server
node scripts/serve.js
```
Open **`http://localhost:3000/`** in your browser.

Or simply open `index.html` directly in any web browser!

---

## 📁 Project Architecture

```
hero-sectio-template/
├── index.html                   # Central Interactive Showcase & Gallery Dashboard
├── README.md                    # Complete Documentation & Gutenberg Integration Guide
├── css/
│   ├── gallery.css              # Gallery dashboard styles, responsive simulator & code drawer
│   ├── templates-common.css     # Shared typography (Google Fonts), resets, and base design tokens
│   └── templates/
│       ├── tpl-01-10.css        # Scoped styles for templates 01 to 10
│       ├── tpl-11-20.css        # Scoped styles for templates 11 to 20
│       └── tpl-21-30.css        # Scoped styles for templates 21 to 30
├── js/
│   ├── gallery.js               # Gallery state, search, category filter & device simulator modal
│   ├── templates-data.js        # Metadata index for all 30 templates
│   └── templates-interactions.js# Interactive behaviors (calculators, tabs, timers, real-time counters)
├── templates/
│   ├── template-01.html         # Standalone full-page view for Template 01
│   ├── ...
│   └── template-30.html         # Standalone full-page view for Template 30
└── scripts/
    ├── build-templates.js       # Template generation & data store compiler
    └── serve.js                 # Local static HTTP server
```

---

## 🎨 Complete Index of the 30 Hero Section Templates

| # | Template Name | Industry / Category | Layout Style | Key Interactive Features |
|---|---|---|---|---|
| **01** | **Modern SaaS Landing Page** | SaaS & Software | Split 55/45 Hero | Live latency SVG chart, Performance/Revenue tab toggling, trial signup form feedback |
| **02** | **AI Product Landing Page** | AI & Machine Learning | Centered Radial Mesh | Interactive prompt input, prompt suggestion chips, simulated neural token output |
| **03** | **Startup Hero Section** | Startup & Growth | Asymmetric Card Stack | Cohort milestone progress bar, capital raised metrics ($185M+), dual conversion CTAs |
| **04** | **Creative Agency** | Agency & Studio | Brutalist Editorial | Oversized Syne typography, outlined text hover effect, continuous client marquee strip |
| **05** | **Digital Marketing Agency** | Marketing & Sales | Conversion Calculator | Interactive ROI slider ($5k–$100k) with real-time revenue & 4.25x ROAS calculation |
| **06** | **Personal Portfolio** | Portfolio & Personal | Scandinavian Editorial | High-res portrait card, active project availability badge ("🟢 Available for Q3"), CV CTA |
| **07** | **Developer Portfolio** | Developer & Tech | Terminal / IDE Window | Language tab switcher (Go, YAML, Rust), syntax highlighting, system status bar |
| **08** | **Business Consulting** | Corporate & Business | Sovereign Navy & Gold | 3 interactive strategic pillars (AI, M&A, Capital) with hover lift, advisory CTA |
| **09** | **Corporate Business** | Corporate & Business | Architectural Grid | ESG impact counters (4.2 GW Clean Energy), investor relations portal, report download |
| **10** | **E-commerce Product Showcase** | E-commerce & Retail | Hardware Stage Split | Interactive color switcher (Matte Obsidian, Silver, Rose Gold), price tag, 4.9★ rating |
| **11** | **Fashion Brand** | Fashion & Luxury | Haute Couture Lookbook | Dual asymmetrical editorial photography cards, Cormorant Garamond serif, runway CTA |
| **12** | **Luxury Brand** | Fashion & Luxury | Swiss Haute Horlogerie | Gold foil radial glow, obsidian black canvas, private concierge viewing appointment |
| **13** | **Real Estate** | Real Estate & Properties| Full-Bleed Architectural | Embedded property search bar (Location, Property Type, Price Tier), waterfront view |
| **14** | **Architecture & Interior Design**| Architecture & Design | Swiss Brutalism | Interactive project coordinate tabs (Pavilion X, Villa Nordic, Atrium Tower) |
| **15** | **Restaurant and Food** | Food & Hospitality | Sensory Bistro & Bar | Working table reservation widget (Date, Party Size), Michelin star laurels, wine pairing |
| **16** | **Travel and Tourism** | Travel & Adventure | Cinematic Wilderness | Expedition destination tabs, weather indicator, video showreel trailer trigger |
| **17** | **Fitness and Gym** | Health & Fitness | Volt Neon Dark Club | Heavyweight condensed italic type, 7-day all-access trial pass claim, athlete visual |
| **18** | **Healthcare and Medical** | Health & Medical | Clinical Concierge Mint| Live physician availability counter ("18 Online Now"), HIPAA certified, telehealth CTA |
| **19** | **Online Education** | Education & Courses | Collegiate Modern | Course search input with keyword recommendations, student reviews badge (65k+ enrolled)|
| **20** | **Course and Coaching** | Education & Courses | High-Ticket Accelerator| Real-time ticking countdown timer (Days : Hours : Mins : Secs), syllabus download CTA |
| **21** | **Mobile App Promotion** | Mobile & Apps | Layered Phone Mockup | Smartphone mockup with floating transaction notifications, App Store & Google Play pills|
| **22** | **Fintech & Financial Services** | Finance & Fintech | Neo-Bank Multi-Currency| Live currency converter (USD to EUR with real-time recalculation), FDIC & SOC2 marks |
| **23** | **Cybersecurity Product** | Security & Enterprise | Dark Defense Grid | Real-time incrementing threats neutralized counter (2.8M+), live breach test CTA |
| **24** | **Photography Portfolio** | Portfolio & Media | Fullscreen Lensman | Camera EXIF data readout bar (Leica M11-P, 35mm f/2), exhibition tickets trigger |
| **25** | **Video Production Agency** | Agency & Studio | 21:9 Letterbox Cinema | Cannes Lions Grand Prix laurels, showreel video play button overlay with modal |
| **26** | **Event and Conference** | Events & Communities | Summit Festival Gradient| Live event countdown clock ticking in real-time, dates badge, Early Bird 40% discount |
| **27** | **Newsletter & Lead Generation** | Newsletter & Leads | Editorial Minimalist | 1-click email capture with instant checkmark feedback, 85k+ subscriber social proof |
| **28** | **Minimalist Editorial** | Editorial & Publishing | Monograph Print Journal| Volume XLII publication header, reading time indicator (8 min), clean serif typography |
| **29** | **Dark Premium Creative Studio** | Agency & Studio | Pitch Black & Acid Lime| Kinetic typography, sub-grid dividers, scale-on-hover magnetic project button |
| **30** | **Interactive Next-Gen Hero** | Interactive & Web3 | Spatial Computing OS | 3-mode canvas switcher (Spatial View, Neural Canvas, Collaborative Hub), matrix grid |

---

## 🔌 How to Integrate into the WordPress "Hero Section Block" Plugin

The existing plugin in `hero-section-block` uses a Gutenberg block structure (`block.json`, `render.php`, `view.css`, `view.js`). Here is how you can monetize and integrate these 30 designs:

### Approach A: Block Patterns (Recommended for Instant Compatibility)
Register each of the 30 templates as a WordPress Block Pattern in PHP:
```php
register_block_pattern(
    'hero-section-block/saas-pipeline',
    array(
        'title'       => __( 'Modern SaaS Landing Page', 'hero-section' ),
        'description' => _x( 'High-converting split hero with live metrics', 'Block pattern description', 'hero-section' ),
        'categories'  => array( 'hero-section-block', 'featured' ),
        'content'     => '<!-- wp:hero-section/hero-section {"alignment":"left","data":{...}} -->...<!-- /wp:hero-section/hero-section -->',
    )
);
```

### Approach B: Template Preset Selector in the Block Inspector (Sidebar)
Add a "Template Style" dropdown in `src/edit.js`:
```jsx
<SelectControl
    label={ __( 'Choose Premium Template', 'hero-section' ) }
    value={ attributes.templatePreset }
    options={ [
        { label: '01. Modern SaaS Landing Page', value: 'tpl-01-saas' },
        { label: '02. AI Product Landing Page', value: 'tpl-02-ai' },
        // ... all 30 templates
    ] }
    onChange={ ( newPreset ) => setAttributes( { templatePreset: newPreset } ) }
/>
```

### Approach C: Standalone Premium Add-on Plugin / Library
Ship this showcase as a template preview modal right inside the WordPress Admin, allowing users to 1-click insert any template directly into the block editor!

---

## 🛠️ Technical Compliance
- **Zero Frameworks**: 100% Vanilla JS, HTML5, and CSS3.
- **Isolated Namespaces**: Every template uses its own prefix (`tpl-01-saas`, `tpl-02-ai`, ... `tpl-30-nextgen`) preventing style conflicts.
- **Accessibility & Motion**: Complies with `prefers-reduced-motion` and keyboard navigation.
- **High Resolution Photography**: Uses curated Unsplash photography with domain-accurate licensing.
- **Responsive Viewports**: Tested across Desktop (1440px), Tablet (768px), and Mobile (390px).
