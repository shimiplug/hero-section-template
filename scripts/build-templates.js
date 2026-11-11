/**
 * build-templates.js
 * Generates 30 production-grade standalone Hero Section HTML templates
 * and js/templates-data.js for the showcase gallery.
 */

const fs = require('fs');
const path = require('path');

const templates = [
  {
    id: 1,
    slug: 'template-01',
    cssGroup: '01-10',
    title: 'Modern SaaS Landing Page',
    category: 'SaaS & Software',
    categoryKey: 'saas',
    concept: 'Autonomous Data Pipeline Platform',
    desc: 'High-converting split hero for modern SaaS products with live metrics dashboard, latency graph, interactive tabs, and trial signup.',
    tags: ['Interactive Dashboard', 'Split Hero', 'Form Capture', 'Live Metrics'],
    features: ['Live latency SVG chart', 'Interactive Revenue/Performance tabs', 'Instant trial form feedback', 'Social proof avatar stack'],
    html: `
    <header class="tpl-01-saas">
      <div class="tpl-01-saas__glow-1" aria-hidden="true"></div>
      <div class="tpl-01-saas__glow-2" aria-hidden="true"></div>
      <div class="tpl-01-saas__grid-pattern" aria-hidden="true"></div>

      <div class="tpl-01-saas__container">
        <div class="tpl-01-saas__content">
          <div class="tpl-01-saas__badge">
            <span class="tpl-01-saas__badge-dot"></span>
            <span>Version 3.4 Live — Real-time ETL Sync</span>
          </div>

          <h1 class="tpl-01-saas__title">
            Automate Data Flows with <span class="tpl-01-saas__title-gradient">Sub-Second Precision</span>
          </h1>

          <p class="tpl-01-saas__description">
            Connect disparate databases, orchestrate distributed transformations, and deliver pristine event streams directly into your operational data warehouse.
          </p>

          <form class="tpl-01-saas__form" id="saas-trial-form">
            <input type="email" class="tpl-01-saas__input" placeholder="Enter your work email..." required aria-label="Work email">
            <button type="submit" class="tpl-01-saas__btn-primary">
              <span>Start Free 14-Day Trial</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </form>

          <div class="tpl-01-saas__social-proof">
            <div class="tpl-01-saas__avatars">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80" alt="Sarah C." class="tpl-01-saas__avatar">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80" alt="David K." class="tpl-01-saas__avatar">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&h=80&q=80" alt="Elena V." class="tpl-01-saas__avatar">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80" alt="Marcus R." class="tpl-01-saas__avatar">
            </div>
            <div>
              <div class="tpl-01-saas__proof-stars">★★★★★</div>
              <div class="tpl-01-saas__proof-text">Trusted by 45,000+ data engineers globally</div>
            </div>
          </div>
        </div>

        <div class="tpl-01-saas__preview">
          <div class="tpl-01-saas__preview-header">
            <div class="tpl-01-saas__window-controls">
              <span class="tpl-01-saas__control-dot" style="background:#ef4444"></span>
              <span class="tpl-01-saas__control-dot" style="background:#f59e0b"></span>
              <span class="tpl-01-saas__control-dot" style="background:#10b981"></span>
            </div>
            <div class="tpl-01-saas__tabs">
              <button type="button" class="tpl-01-saas__tab-btn active" data-mode="performance">Performance</button>
              <button type="button" class="tpl-01-saas__tab-btn" data-mode="revenue">Revenue Impact</button>
            </div>
          </div>

          <div class="tpl-01-saas__stats-grid">
            <div class="tpl-01-saas__stat-card">
              <div class="tpl-01-saas__stat-label">Pipeline Latency</div>
              <div class="tpl-01-saas__stat-val" id="saas-stat-1">1.24s</div>
              <div class="tpl-01-saas__stat-delta">↓ 42% vs p95</div>
            </div>
            <div class="tpl-01-saas__stat-card">
              <div class="tpl-01-saas__stat-label">Sync Reliability</div>
              <div class="tpl-01-saas__stat-val" id="saas-stat-2">99.99%</div>
              <div class="tpl-01-saas__stat-delta">Zero dropouts</div>
            </div>
            <div class="tpl-01-saas__stat-card">
              <div class="tpl-01-saas__stat-label">Events Processed</div>
              <div class="tpl-01-saas__stat-val" id="saas-stat-3">48.2M</div>
              <div class="tpl-01-saas__stat-delta">↑ 18% today</div>
            </div>
          </div>

          <div class="tpl-01-saas__chart-wrap">
            <svg viewBox="0 0 400 120" width="100%" height="100%" style="overflow:visible">
              <defs>
                <linearGradient id="chartGrad1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#6366f1" stop-opacity="0.5"/>
                  <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,100 Q60,40 120,70 T240,30 T360,50 L400,20 L400,120 L0,120 Z" fill="url(#chartGrad1)" />
              <path d="M0,100 Q60,40 120,70 T240,30 T360,50 L400,20" fill="none" stroke="#818cf8" stroke-width="3" />
              <circle cx="400" cy="20" r="5" fill="#4ade80" />
            </svg>
          </div>

          <div class="tpl-01-saas__activity-row">
            <span>● Cluster us-east-prod sync healthy</span>
            <span class="tpl-01-saas__status-pill">Active</span>
          </div>
        </div>
      </div>
    </header>
    `
  },
  {
    id: 2,
    slug: 'template-02',
    cssGroup: '01-10',
    title: 'AI Product Landing Page',
    category: 'AI & Machine Learning',
    categoryKey: 'ai',
    concept: 'Autonomous Multimodal Intelligence',
    desc: 'Cinematic centered hero with glowing ambient mesh, interactive prompt simulation bar, model selector, and dynamic token speed badge.',
    tags: ['AI Prompt Simulation', 'Dark Mode', 'Interactive Chips', 'Cinematic Glow'],
    features: ['Typeable prompt field', 'Interactive prompt suggestion chips', 'Simulated neural response', 'Multi-model selector pills'],
    html: `
    <header class="tpl-02-ai">
      <div class="tpl-02-ai__ambient-mesh" aria-hidden="true"></div>

      <div class="tpl-02-ai__container">
        <div class="tpl-02-ai__badge">
          <span class="tpl-02-ai__badge-tag">New</span>
          <span>Cortex-7B MoE Engine with Zero-Shot Reasoning</span>
        </div>

        <h1 class="tpl-02-ai__title">
          Build Intelligent Systems at <span class="tpl-02-ai__title-glow">Hyperscale</span>
        </h1>

        <p class="tpl-02-ai__subtitle">
          Orchestrate multi-agent workflows, synthesize structured knowledge graphs, and embed deterministic cognitive capabilities into any codebase.
        </p>

        <div class="tpl-02-ai__prompt-container">
          <div class="tpl-02-ai__prompt-top">
            <div class="tpl-02-ai__model-selector">
              <span class="tpl-02-ai__model-dot"></span>
              <span>Cortex-Ultra-v4</span>
            </div>
            <span style="font-size:11px;color:#9ca3af;font-family:monospace;">Latency: 12ms • 185 tok/s</span>
          </div>

          <div class="tpl-02-ai__prompt-box">
            <input type="text" class="tpl-02-ai__input" placeholder="Test the engine: Ask a question or summarize an architecture..." aria-label="AI Prompt Input">
            <button type="button" class="tpl-02-ai__generate-btn">
              <span>Execute</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>

          <div class="tpl-02-ai__chips">
            <span class="tpl-02-ai__chips-label">Try:</span>
            <button type="button" class="tpl-02-ai__chip" data-prompt="Analyze Kubernetes microservices fault tolerance">Kubernetes Resiliency</button>
            <button type="button" class="tpl-02-ai__chip" data-prompt="Synthesize Q3 financial projections for SaaS startup">Financial Synthesis</button>
            <button type="button" class="tpl-02-ai__chip" data-prompt="Generate TypeScript types for distributed state machine">State Machine Types</button>
          </div>

          <div class="tpl-02-ai__output-preview" aria-live="polite"></div>
        </div>

        <div class="tpl-02-ai__stats">
          <div>
            <div class="tpl-02-ai__stat-number">99.8%</div>
            <div class="tpl-02-ai__stat-label">Retrieval Precision</div>
          </div>
          <div>
            <div class="tpl-02-ai__stat-number">12ms</div>
            <div class="tpl-02-ai__stat-label">Average Time to First Token</div>
          </div>
          <div>
            <div class="tpl-02-ai__stat-number">14.2B+</div>
            <div class="tpl-02-ai__stat-label">Embeddings Generated Monthly</div>
          </div>
        </div>
      </div>
    </header>
    `
  },
  {
    id: 3,
    slug: 'template-03',
    cssGroup: '01-10',
    title: 'Startup Hero Section',
    category: 'Startup & Growth',
    categoryKey: 'saas',
    concept: 'Series A Venture Launchpad',
    desc: 'High-velocity startup showcase with electric coral accents, kinetic value propositions, cohort roadmap visual, and investor metrics bar.',
    tags: ['High-Velocity', 'Progress Roadmap', 'Venture Metrics', 'Dual CTAs'],
    features: ['Cohort traction meter', 'Live capital raised metric', 'Audit booking CTA', 'Interactive progress indicators'],
    html: `
    <header class="tpl-03-startup">
      <div class="tpl-03-startup__container">
        <div>
          <div class="tpl-03-startup__pill">⚡ Batch 14 Cohort Applications Open</div>
          <h1 class="tpl-03-startup__title">
            From Zero to <span class="tpl-03-startup__highlight">Series A Traction</span> in 90 Days
          </h1>
          <p class="tpl-03-startup__desc">
            We partner with exceptional technical founders to validate unit economics, acquire paying customers, and architect capital-efficient scaling engines.
          </p>

          <div class="tpl-03-startup__actions">
            <a href="#audit" class="tpl-03-startup__btn-primary">Apply for Cohort 14</a>
            <a href="#demo" class="tpl-03-startup__btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
              <span>Watch 3-Min Film</span>
            </a>
          </div>

          <div class="tpl-03-startup__metrics-bar">
            <div>
              <div class="tpl-03-startup__metric-val">$185M+</div>
              <div class="tpl-03-startup__metric-sub">Follow-on Capital Raised</div>
            </div>
            <div>
              <div class="tpl-03-startup__metric-val">88%</div>
              <div class="tpl-03-startup__metric-sub">Seed-to-A Conversion Rate</div>
            </div>
            <div>
              <div class="tpl-03-startup__metric-val">34 Exits</div>
              <div class="tpl-03-startup__metric-sub">Top Tier Acquisitions</div>
            </div>
          </div>
        </div>

        <div class="tpl-03-startup__card">
          <div class="tpl-03-startup__cohort-badge">
            <strong style="color:#ffffff;">Cohort Q3 Trajectory</strong>
            <span style="color:#ff5757;font-size:12px;font-weight:700;">● Live Tracking</span>
          </div>

          <div class="tpl-03-startup__progress-item">
            <div class="tpl-03-startup__progress-label">
              <span>Customer Discovery & PMF</span>
              <strong>100%</strong>
            </div>
            <div class="tpl-03-startup__progress-bar">
              <div class="tpl-03-startup__progress-fill" style="width:100%;"></div>
            </div>
          </div>

          <div class="tpl-03-startup__progress-item">
            <div class="tpl-03-startup__progress-label">
              <span>Paid Pilot Conversions</span>
              <strong>84%</strong>
            </div>
            <div class="tpl-03-startup__progress-bar">
              <div class="tpl-03-startup__progress-fill" style="width:84%;"></div>
            </div>
          </div>

          <div class="tpl-03-startup__progress-item">
            <div class="tpl-03-startup__progress-label">
              <span>Institutional Term Sheets</span>
              <strong>68%</strong>
            </div>
            <div class="tpl-03-startup__progress-bar">
              <div class="tpl-03-startup__progress-fill" style="width:68%;"></div>
            </div>
          </div>

          <div style="margin-top:24px;padding:12px;background:rgba(255,255,255,0.04);border-radius:10px;font-size:12px;color:#9ca3af;">
            🚀 Average time to first $10k MRR: <strong>32 Days</strong>
          </div>
        </div>
      </div>
    </header>
    `
  },
  {
    id: 4,
    slug: 'template-04',
    cssGroup: '01-10',
    title: 'Creative Agency',
    category: 'Agency & Studio',
    categoryKey: 'creative',
    concept: 'Radical Brand World Builders',
    desc: 'Brutalist-editorial agency hero featuring oversized Syne typography, dynamic outline effects, marquee client ticker, and minimal luxury aesthetic.',
    tags: ['Brutalist Editorial', 'Syne Typography', 'Marquee Strip', 'High Fashion Agency'],
    features: ['Outlined kinetic typography', 'Continuous client marquee', 'Sub-grid layout system', 'Magnetic CTA button'],
    html: `
    <header class="tpl-04-agency">
      <div class="tpl-04-agency__container">
        <div class="tpl-04-agency__header-meta">
          <span>Studio Monolith © 2026</span>
          <span>Creative Direction • Brand Architecture • Spatial Identity</span>
          <span>Zurich / Paris / Tokyo</span>
        </div>

        <h1 class="tpl-04-agency__headline">
          We Design <span class="tpl-04-agency__headline-outline">Radical</span> Brand Worlds For The Bold.
        </h1>

        <div class="tpl-04-agency__grid">
          <p class="tpl-04-agency__desc">
            We exist at the intersection of cultural foresight, tactile craft, and digital provocation. We reject the mundane to sculpt identities that command industry reverence.
          </p>

          <div class="tpl-04-agency__cta-group">
            <a href="#contact" class="tpl-04-agency__cta-btn">
              <span>Commission A Project</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
          </div>
        </div>

        <div class="tpl-04-agency__marquee">
          <span>Acne Studios</span> • <span>B&O Spatial</span> • <span>Polestar</span> • <span>Aesop Digital</span> • <span>Rimowa</span> • <span>Balenciaga Labs</span> • <span>Noma Gastronomy</span>
        </div>
      </div>
    </header>
    `
  },
  {
    id: 5,
    slug: 'template-05',
    cssGroup: '01-10',
    title: 'Digital Marketing Agency',
    category: 'Marketing & Sales',
    categoryKey: 'creative',
    concept: 'High-Velocity Performance Marketing',
    desc: 'Conversion-focused agency hero equipped with a working interactive ROI Calculator slider, live ROAS projections, and verified partner badges.',
    tags: ['Interactive ROI Slider', 'Live Calculations', 'Social Proof', 'Conversion Focus'],
    features: ['Ad spend drag slider', 'Real-time projected revenue update', 'Google/Meta Partner badges', 'High contrast primary action'],
    html: `
    <header class="tpl-05-marketing">
      <div class="tpl-05-marketing__container">
        <div>
          <div class="tpl-05-marketing__badge">
            <span>★ Premier Google & Meta Scaling Partner</span>
          </div>
          <h1 class="tpl-05-marketing__title">
            We Turn Ad Spend Into <span>Predictable Pipeline</span>
          </h1>
          <p class="tpl-05-marketing__desc">
            Stop burning budget on vanity clicks. We combine algorithmic bid optimization, high-converting creative testing, and multi-touch attribution to scale your revenue.
          </p>

          <div class="tpl-05-marketing__cta-row">
            <a href="#audit" class="tpl-05-marketing__btn">Claim Free Growth Audit</a>
            <span style="font-size:13px;color:#64748b;">No commitment • 48hr delivery</span>
          </div>

          <div style="display:flex;gap:20px;font-size:13px;font-weight:600;color:#334155;">
            <span>✓ Average 3.8x ROAS</span>
            <span>✓ $48M+ Managed Annually</span>
            <span>✓ 90-Day Guarantee</span>
          </div>
        </div>

        <div class="tpl-05-marketing__calculator">
          <div class="tpl-05-marketing__calc-title">Interactive ROI Calculator</div>
          <div class="tpl-05-marketing__calc-sub">Slide to simulate monthly growth potential</div>

          <div class="tpl-05-marketing__slider-wrap">
            <div class="tpl-05-marketing__slider-label">
              <span>Target Monthly Ad Spend:</span>
              <strong id="mkt-spend-val" style="color:#2563eb;">$25,000</strong>
            </div>
            <input type="range" class="tpl-05-marketing__range" id="mkt-spend-range" min="5000" max="100000" step="5000" value="25000" aria-label="Ad Spend Slider">
          </div>

          <div class="tpl-05-marketing__results">
            <div>
              <div class="tpl-05-marketing__result-lbl">Estimated Monthly Revenue</div>
              <div class="tpl-05-marketing__result-num" id="mkt-rev-val">$106,250</div>
            </div>
            <div>
              <div class="tpl-05-marketing__result-lbl">Projected Performance</div>
              <div class="tpl-05-marketing__result-num" id="mkt-roas-val" style="color:#10b981;">4.25x ROAS</div>
            </div>
          </div>
        </div>
      </div>
    </header>
    `
  },
  {
    id: 6,
    slug: 'template-06',
    cssGroup: '01-10',
    title: 'Personal Portfolio',
    category: 'Portfolio & Personal',
    categoryKey: 'creative',
    concept: 'Principal Product Designer Portfolio',
    desc: 'Editorial Scandinavian-inspired portfolio hero with warm stone tones, high-res portrait card, active project availability badge, and direct resume CTA.',
    tags: ['Scandinavian Warmth', 'Editorial Typography', 'Status Badge', 'Personal Brand'],
    features: ['Live project availability status', 'Skill pills', 'Download CV action', 'High-res portrait elevation'],
    html: `
    <header class="tpl-06-personal">
      <div class="tpl-06-personal__container">
        <div class="tpl-06-personal__image-card">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" alt="Elena Rostova Portrait" class="tpl-06-personal__photo">
          <div class="tpl-06-personal__status-card">
            <span class="tpl-06-personal__available-dot"></span>
            <span>Available for select Q3 projects & advising</span>
          </div>
        </div>

        <div>
          <div class="tpl-06-personal__lead">Elena Rostova — Product & Systems Lead</div>
          <h1 class="tpl-06-personal__title">
            Crafting serene, human-centered digital experiences for complex ecosystems.
          </h1>
          <p class="tpl-06-personal__bio">
            Previously Staff Designer at Stripe and Head of Design Systems at Linear. Currently consulting for early-stage founders to turn ambitious abstractions into intuitive software.
          </p>

          <div class="tpl-06-personal__tag-row">
            <span class="tpl-06-personal__tag">Design Systems</span>
            <span class="tpl-06-personal__tag">Interaction Architecture</span>
            <span class="tpl-06-personal__tag">Spatial UI</span>
            <span class="tpl-06-personal__tag">Figma Tokens</span>
          </div>

          <div class="tpl-06-personal__actions">
            <a href="#contact" class="tpl-06-personal__btn-dark">Get in Touch</a>
            <a href="#work" style="font-size:14px;font-weight:600;text-decoration:underline;">View Selected Works (2024-2026)</a>
          </div>
        </div>
      </div>
    </header>
    `
  },
  {
    id: 7,
    slug: 'template-07',
    cssGroup: '01-10',
    title: 'Developer Portfolio',
    category: 'Developer & Tech',
    categoryKey: 'saas',
    concept: 'Senior Distributed Systems Architect',
    desc: 'Terminal-inspired developer hero with language-switching code editor, clean syntax highlighting, status indicators, and GitHub-style styling.',
    tags: ['IDE Terminal Mockup', 'Interactive Code Tabs', 'Dark Slate Theme', 'Systems Engineering'],
    features: ['Go / YAML / Rust code tab switcher', 'Health indicator badge', 'Tech stack badges', 'Fast terminal aesthetic'],
    html: `
    <header class="tpl-07-developer">
      <div class="tpl-07-developer__container">
        <div>
          <div class="tpl-07-developer__status-bar">
            <span>● 100% test coverage • 0 active incidents</span>
          </div>

          <h1 class="tpl-07-developer__title">
            Architecting <span>Resilient Systems</span> That Handle Billions of Events.
          </h1>

          <p class="tpl-07-developer__desc">
            Hi, I’m Alex Chen. Senior Infrastructure Architect specializing in lock-free concurrency, distributed consensus (Raft/Paxos), and multi-region Kubernetes topologies.
          </p>

          <div class="tpl-07-developer__tech-stack">
            <span class="tpl-07-developer__tech-pill">Go</span>
            <span class="tpl-07-developer__tech-pill">Rust</span>
            <span class="tpl-07-developer__tech-pill">Kubernetes</span>
            <span class="tpl-07-developer__tech-pill">eBPF</span>
            <span class="tpl-07-developer__tech-pill">gRPC</span>
            <span class="tpl-07-developer__tech-pill">PostgreSQL</span>
          </div>

          <div class="tpl-07-developer__actions">
            <a href="#github" class="tpl-07-developer__btn">Inspect GitHub Repos</a>
            <a href="#cv" style="color:#58a6ff;font-size:14px;display:flex;align-items:center;gap:6px;">Read Whitepapers →</a>
          </div>
        </div>

        <div class="tpl-07-developer__ide">
          <div class="tpl-07-developer__ide-header">
            <div class="tpl-07-developer__ide-tabs">
              <span class="tpl-07-developer__ide-tab active" data-lang="go">server.go</span>
              <span class="tpl-07-developer__ide-tab" data-lang="yaml">cluster.yaml</span>
              <span class="tpl-07-developer__ide-tab" data-lang="rust">buffer.rs</span>
            </div>
            <span style="font-size:11px;color:#8b949e;">UTF-8 • LF</span>
          </div>

          <pre class="tpl-07-developer__code-block"><code><span class="tpl-07-developer__keyword">package</span> main

<span class="tpl-07-developer__keyword">import</span> (
	<span class="tpl-07-developer__str">"fmt"</span>
	<span class="tpl-07-developer__str">"net/http"</span>
)

<span class="tpl-07-developer__keyword">func</span> <span class="tpl-07-developer__fn">Handler</span>(w http.ResponseWriter, r *http.Request) {
	fmt.<span class="tpl-07-developer__fn">Fprintf</span>(w, <span class="tpl-07-developer__str">"Cluster status: healthy | Latency: 0.8ms"</span>)
}</code></pre>
        </div>
      </div>
    </header>
    `
  },
  {
    id: 8,
    slug: 'template-08',
    cssGroup: '01-10',
    title: 'Business Consulting',
    category: 'Corporate & Business',
    categoryKey: 'business',
    concept: 'Global Executive Strategic Advisory',
    desc: 'Prestigious corporate consulting hero with navy & champagne gold accents, serif typography, and interactive strategic advisory pillars.',
    tags: ['Executive Consulting', 'Gold Accents', 'Strategic Pillars', 'Fortune 500'],
    features: ['Interactive strategic pillar cards', 'Prestige typography', 'Advisory booking drawer', 'High credentialing metrics'],
    html: `
    <header class="tpl-08-consulting">
      <div class="tpl-08-consulting__container">
        <span class="tpl-08-consulting__tag">Vanguard Global Partners • Strategic Advisory</span>

        <h1 class="tpl-08-consulting__headline">
          Steering Global Enterprises Through Seismic Market Transformation.
        </h1>

        <p class="tpl-08-consulting__lead">
          We counsel Fortune 100 boards, sovereign funds, and visionary leadership teams on cross-border M&A, enterprise AI integration, and capital reallocation.
        </p>

        <a href="#consultation" style="display:inline-block;background:#d4af37;color:#0b1526;padding:16px 36px;border-radius:4px;font-weight:700;font-size:15px;">Schedule Confidential Advisory</a>

        <div class="tpl-08-consulting__pillars">
          <div class="tpl-08-consulting__pillar-card">
            <div class="tpl-08-consulting__pillar-num">PILLAR I</div>
            <h3 class="tpl-08-consulting__pillar-title">Autonomous AI Strategy</h3>
            <p class="tpl-08-consulting__pillar-desc">Operationalizing machine intelligence across legacy enterprise architectures to capture margin efficiency.</p>
          </div>

          <div class="tpl-08-consulting__pillar-card">
            <div class="tpl-08-consulting__pillar-num">PILLAR II</div>
            <h3 class="tpl-08-consulting__pillar-title">Cross-Border M&A</h3>
            <p class="tpl-08-consulting__pillar-desc">Structuring complex multi-jurisdictional acquisitions, carve-outs, and strategic post-merger integration.</p>
          </div>

          <div class="tpl-08-consulting__pillar-card">
            <div class="tpl-08-consulting__pillar-num">PILLAR III</div>
            <h3 class="tpl-08-consulting__pillar-title">Capital Reallocation</h3>
            <p class="tpl-08-consulting__pillar-desc">Optimizing balance sheets, hedging volatility, and deploying institutional capital into high-yield frontiers.</p>
          </div>
        </div>
      </div>
    </header>
    `
  },
  {
    id: 9,
    slug: 'template-09',
    cssGroup: '01-10',
    title: 'Corporate Business',
    category: 'Corporate & Business',
    categoryKey: 'business',
    concept: 'Sustainable Infrastructure & Capital Holdings',
    desc: 'Authoritative corporate hero with pristine grid layout, high-impact glass architectural photography, and verified institutional impact counters.',
    tags: ['Corporate Authority', 'Impact Counters', 'Architectural Visual', 'Investor Relations'],
    features: ['Clean enterprise aesthetics', 'ESG impact counters', 'Annual report download CTA', 'Crisp institutional grid'],
    html: `
    <header class="tpl-09-corporate">
      <div class="tpl-09-corporate__container">
        <div>
          <div class="tpl-09-corporate__label">Aegis Capital & Infrastructure Holdings</div>
          <h1 class="tpl-09-corporate__title">
            Building Resilient Global Infrastructure for Sustainable Decades.
          </h1>
          <p class="tpl-09-corporate__desc">
            We originate, finance, and operate essential utility grids, carbon-neutral logistics corridors, and high-efficiency renewable energy facilities worldwide.
          </p>

          <div class="tpl-09-corporate__actions">
            <a href="#investor" class="tpl-09-corporate__btn">Investor Relations Portal</a>
            <a href="#report" style="display:flex;align-items:center;gap:8px;font-weight:600;color:#0284c7;">Download 2025 Impact Report ↓</a>
          </div>

          <div class="tpl-09-corporate__stats">
            <div>
              <div class="tpl-09-corporate__stat-num">$8.4B</div>
              <div class="tpl-09-corporate__stat-lbl">Assets Under Custody</div>
            </div>
            <div>
              <div class="tpl-09-corporate__stat-num">4.2 GW</div>
              <div class="tpl-09-corporate__stat-lbl">Clean Energy Generated</div>
            </div>
            <div>
              <div class="tpl-09-corporate__stat-num">28 Countries</div>
              <div class="tpl-09-corporate__stat-lbl">Operational Footprint</div>
            </div>
          </div>
        </div>

        <div>
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80" alt="Corporate Glass Architecture" class="tpl-09-corporate__image">
        </div>
      </div>
    </header>
    `
  },
  {
    id: 10,
    slug: 'template-10',
    cssGroup: '01-10',
    title: 'E-commerce Product Showcase',
    category: 'E-commerce & Retail',
    categoryKey: 'lifestyle',
    concept: 'Spatial Audio Studio Headphones',
    desc: 'Sleek luxury hardware product showcase featuring an interactive color customizer swatch, 360 audio specifications, and direct cart trigger.',
    tags: ['Product Showcase', 'Color Customizer', 'Hardware Tech', 'Conversion Oriented'],
    features: ['Dynamic color customizer dots', 'Color title switcher', 'Visual filter shifts', 'Verified reviews rating'],
    html: `
    <header class="tpl-10-ecommerce">
      <div class="tpl-10-ecommerce__container">
        <div class="tpl-10-ecommerce__product-stage">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80" alt="Aura Wireless Headphones" class="tpl-10-ecommerce__img">

          <div class="tpl-10-ecommerce__color-picker">
            <span class="tpl-10-ecommerce__color-dot active" data-color="Matte Obsidian" style="background:#1d1d1f;" title="Matte Obsidian"></span>
            <span class="tpl-10-ecommerce__color-dot" data-color="Titanium Silver" style="background:#d1d5db;" title="Titanium Silver"></span>
            <span class="tpl-10-ecommerce__color-dot" data-color="Rose Gold" style="background:#e0a899;" title="Rose Gold"></span>
          </div>
        </div>

        <div>
          <span style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;color:#0071e3;">Aura Series 4 Pro</span>
          <h1 class="tpl-10-ecommerce__headline">
            Pure Spatial Acoustics. Zero Distraction.
          </h1>

          <div class="tpl-10-ecommerce__price">
            $399 <span style="font-size:15px;color:#6e6e73;font-weight:400;">(Finish: <strong id="ecom-color-name">Matte Obsidian</strong>)</span>
          </div>

          <p class="tpl-10-ecommerce__desc">
            Custom engineered 45mm neodymium drivers, 40-hour lossless playback, adaptive active noise cancellation, and calibrated memory-foam ergonomics.
          </p>

          <div style="display:flex;align-items:center;gap:20px;margin-bottom:32px;">
            <a href="#bag" class="tpl-10-ecommerce__btn">Add to Bag • $399</a>
            <span style="font-size:13px;color:#10b981;font-weight:600;">✓ In Stock — Ships Today</span>
          </div>

          <div style="font-size:12px;color:#6e6e73;display:flex;gap:24px;">
            <span>★ 4.9/5 from 3,200+ audiophiles</span>
            <span>2-Year Global Warranty</span>
            <span>Free 30-Day Returns</span>
          </div>
        </div>
      </div>
    </header>
    `
  },
  {
    id: 11,
    slug: 'template-11',
    cssGroup: '11-20',
    title: 'Fashion Brand',
    category: 'Fashion & Luxury',
    categoryKey: 'lifestyle',
    concept: 'Haute Couture Editorial Lookbook',
    desc: 'High-fashion editorial layout with serif typography, dual asymmetrical lookbook photography cards, and minimalist collection browsing CTA.',
    tags: ['Editorial Fashion', 'Couture Lookbook', 'Serif Typography', 'Asymmetric Composition'],
    features: ['Dual photo editorial collage', 'Cormorant Garamond typography', 'Season indicator', 'Smooth arrow hover effect'],
    html: `
    <header class="tpl-11-fashion">
      <div class="tpl-11-fashion__container">
        <div>
          <span class="tpl-11-fashion__season">Collection 08 • Autumn / Winter 2026</span>
          <h1 class="tpl-11-fashion__title">
            Maison L’Ombre: <em>Sculptural Silhouettes</em> & Tactile Wool.
          </h1>
          <p class="tpl-11-fashion__desc">
            An exploration of raw volcanic textures, hand-spun alpaca fibers, and structured outerwear designed for the minimalist wanderer.
          </p>
          <a href="#collection" class="tpl-11-fashion__cta">
            <span>Discover The Runway Lookbook</span>
            <span>→</span>
          </a>
        </div>

        <div class="tpl-11-fashion__gallery">
          <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80" alt="Haute Couture Coat Model" class="tpl-11-fashion__img-primary">
          <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80" alt="Model Portrait Detail" class="tpl-11-fashion__img-secondary">
        </div>
      </div>
    </header>
    `
  },
  {
    id: 12,
    slug: 'template-12',
    cssGroup: '11-20',
    title: 'Luxury Brand',
    category: 'Fashion & Luxury',
    categoryKey: 'lifestyle',
    concept: 'Haute Horlogerie Swiss Chronograph',
    desc: 'Ultra-luxury watchmaker hero in obsidian black and champagne gold foil styling with centered serif prestige headline and concierge booking trigger.',
    tags: ['Swiss Horlogerie', 'Gold Accents', 'Obsidian Luxury', 'Private Concierge'],
    features: ['Ambient gold radial glow', 'Handcrafted typography', 'Private concierge appointment CTA', 'Exclusivity credentials'],
    html: `
    <header class="tpl-12-luxury">
      <div class="tpl-12-luxury__radial" aria-hidden="true"></div>

      <div class="tpl-12-luxury__container">
        <div class="tpl-12-luxury__pretitle">Geneva Manufacture Horlogère • Est. 1888</div>
        <h1 class="tpl-12-luxury__title">The Perpetual Chronograph 1888</h1>
        <p class="tpl-12-luxury__desc">
          Hand-finished in solid 18k rose gold with a celestial tourbillon movement. Limited to eight individually numbered timepieces worldwide.
        </p>
        <a href="#concierge" class="tpl-12-luxury__btn">Book Private Salon Viewing</a>
      </div>
    </header>
    `
  },
  {
    id: 13,
    slug: 'template-13',
    cssGroup: '11-20',
    title: 'Real Estate',
    category: 'Real Estate & Properties',
    categoryKey: 'lifestyle',
    concept: 'Waterfront Penthouse Collection',
    desc: 'High-end architectural real estate hero with an embedded interactive property search bar, location picker, and luxury waterfront backdrop.',
    tags: ['Waterfront Real Estate', 'Search Bar Component', 'High-End Architecture', 'Lead Capture'],
    features: ['Location & price dropdown filter', 'Full-bleed photography background', 'Average ROI badge', 'Instant property lookup button'],
    html: `
    <header class="tpl-13-realestate" style="background-image: url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80');">
      <div class="tpl-13-realestate__overlay"></div>

      <div class="tpl-13-realestate__container">
        <span class="tpl-13-realestate__badge">Exclusive Waterfront Residences</span>
        <h1 class="tpl-13-realestate__title">Find Your Sanctum Above The Ocean Horizon</h1>

        <form class="tpl-13-realestate__search-bar" id="re-search-form">
          <div class="tpl-13-realestate__field">
            <label for="re-loc">Location</label>
            <select id="re-loc">
              <option>Biscayne Bay, Miami</option>
              <option>Dubai Marina, UAE</option>
              <option>Monaco Harbor</option>
            </select>
          </div>
          <div class="tpl-13-realestate__field">
            <label for="re-type">Property Type</label>
            <select id="re-type">
              <option>Sky Penthouse (4-5 Bed)</option>
              <option>Private Island Villa</option>
              <option>Waterfront Duplex</option>
            </select>
          </div>
          <div class="tpl-13-realestate__field">
            <label for="re-price">Price Tier</label>
            <select id="re-price">
              <option>$5M - $12M</option>
              <option>$12M - $25M</option>
              <option>$25M+</option>
            </select>
          </div>
          <button type="submit" class="tpl-13-realestate__search-btn">Search Properties</button>
        </form>
      </div>
    </header>
    `
  },
  {
    id: 14,
    slug: 'template-14',
    cssGroup: '11-20',
    title: 'Architecture & Interior Design',
    category: 'Architecture & Design',
    categoryKey: 'lifestyle',
    concept: 'Spatial Geometry & Biophilic Architecture',
    desc: 'Minimalist Swiss architectural hero with interactive project tab selector, geometric coordinate badges, and Dezeen award credentials.',
    tags: ['Architectural Brutalism', 'Project Tab Switcher', 'Biophilic Design', 'Minimalist Grid'],
    features: ['Interactive architectural project tabs', 'Dynamic project title/photo switcher', 'Clean geometric lines', 'Pritzker finalist laurels'],
    html: `
    <header class="tpl-14-architecture">
      <div class="tpl-14-architecture__container">
        <div>
          <div class="tpl-14-architecture__label">Kroma Architecture Studio • 2026 Index</div>
          <h1 class="tpl-14-architecture__title">
            Spatial Geometry Defined by Light and Natural Stone.
          </h1>

          <div class="tpl-14-architecture__tabs">
            <button type="button" class="tpl-14-architecture__tab active" data-proj="p1">01. Pavilion X</button>
            <button type="button" class="tpl-14-architecture__tab" data-proj="p2">02. Villa Nordic</button>
            <button type="button" class="tpl-14-architecture__tab" data-proj="p3">03. Atrium Tower</button>
          </div>

          <p style="font-size:15px;color:#666;line-height:1.6;margin-bottom:24px;">
            Current Project: <strong id="arch-proj-title" style="color:#111;">Pavilion X - Zurich</strong>.<br>
            A 1,400 sq. meter residence engineered with carbon-negative rammed earth and floor-to-ceiling glass pavilions.
          </p>

          <a href="#monograph" style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;border-bottom:1px solid #111;padding-bottom:2px;">Request Studio Monograph →</a>
        </div>

        <div class="tpl-14-architecture__img-wrap">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" alt="Architectural Modern Residence" class="tpl-14-architecture__img">
        </div>
      </div>
    </header>
    `
  },
  {
    id: 15,
    slug: 'template-15',
    cssGroup: '11-20',
    title: 'Restaurant and Food',
    category: 'Food & Hospitality',
    categoryKey: 'lifestyle',
    concept: 'Artisanal Organic Gastronomy Bistro',
    desc: 'Sensory gastronomy hero with warm forest green & gold accents, Michelin star badge, and interactive table reservation booking form.',
    tags: ['Gastronomy', 'Table Reservation', 'Michelin Star', 'Warm Sensory Palette'],
    features: ['Working reservation widget with confirmation', 'Michelin accolades', 'Mouthwatering food photography', 'Tasting menu preview'],
    html: `
    <header class="tpl-15-restaurant">
      <div class="tpl-15-restaurant__container">
        <div>
          <div class="tpl-15-restaurant__badge">
            <span>★ Two Michelin Stars 2026 • Botanica Bistro</span>
          </div>

          <h1 class="tpl-15-restaurant__title">
            Artful Gastronomy Inspired by Earth’s Seasonal Harvest.
          </h1>

          <p class="tpl-15-restaurant__desc">
            Chef Julien Moreau presents an intimate 9-course tasting menu exploring biodynamic heirloom botanicals, wild coastal catches, and vintage pairings.
          </p>

          <div class="tpl-15-restaurant__booking">
            <form id="rst-booking-form">
              <div class="tpl-15-restaurant__form-grid">
                <div class="tpl-15-restaurant__field">
                  <label for="rst-date">Reservation Date</label>
                  <input type="date" id="rst-date" value="2026-11-05">
                </div>
                <div class="tpl-15-restaurant__field">
                  <label for="rst-guests">Guests</label>
                  <select id="rst-guests">
                    <option>2 Guests (Dining Room)</option>
                    <option>4 Guests (Chef's Counter)</option>
                    <option>6 Guests (Private Salon)</option>
                  </select>
                </div>
              </div>
              <button type="submit" class="tpl-15-restaurant__btn">Reserve a Table</button>
            </form>
          </div>
        </div>

        <div>
          <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" alt="Plated Gourmet Dish" class="tpl-15-restaurant__img">
        </div>
      </div>
    </header>
    `
  },
  {
    id: 16,
    slug: 'template-16',
    cssGroup: '11-20',
    title: 'Travel and Tourism',
    category: 'Travel & Adventure',
    categoryKey: 'lifestyle',
    concept: 'Bespoke Remote Expeditions',
    desc: 'Cinematic wilderness travel hero with panoramic mountain backdrop, vibrant teal accents, destination planner, and video trailer trigger.',
    tags: ['Adventure Travel', 'Wilderness Expeditions', 'Panoramic Banner', 'Video Showreel'],
    features: ['Expedition selector', 'Cinematic photography', 'Direct inquiry CTA', 'Weather and itinerary preview'],
    html: `
    <header class="tpl-16-travel" style="background-image: url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80');">
      <div class="tpl-16-travel__overlay"></div>

      <div class="tpl-16-travel__container">
        <span class="tpl-16-travel__tag">Nomad Trails • Uncharted Expeditions</span>
        <h1 class="tpl-16-travel__title">Journey to the Edge of the Known World</h1>
        <p class="tpl-16-travel__lead">
          Curated small-group journeys through Patagonia’s glacial fjords, the dramatic peaks of Norway, and high-altitude Himalayan trails.
        </p>

        <div class="tpl-16-travel__cta-row">
          <a href="#expeditions" class="tpl-16-travel__btn">Explore 2026 Itineraries</a>
          <a href="#film" style="border:1px solid rgba(255,255,255,0.4);color:#ffffff;padding:14px 28px;border-radius:999px;font-weight:600;font-size:15px;">Watch Film (3:15)</a>
        </div>
      </div>
    </header>
    `
  },
  {
    id: 17,
    slug: 'template-17',
    cssGroup: '11-20',
    title: 'Fitness and Gym',
    category: 'Health & Fitness',
    categoryKey: 'lifestyle',
    concept: 'High-Performance Athletic Club',
    desc: 'High-energy dark mode fitness hero with volt neon lime accents, italicized heavyweight typography, and instant 7-day free trial pass claim.',
    tags: ['High Intensity Fitness', 'Volt Neon Accents', 'Bold Condensed Type', 'Free Trial Pass'],
    features: ['High-contrast neon styling', 'Instant day pass CTA', 'Dynamic athlete imagery', 'Class schedule highlights'],
    html: `
    <header class="tpl-17-fitness">
      <div class="tpl-17-fitness__container">
        <div>
          <div class="tpl-17-fitness__badge">
            <span>● IronCore Performance Club</span>
          </div>

          <h1 class="tpl-17-fitness__title">
            Forge Relentless <span>Power & Stamina</span>.
          </h1>

          <p class="tpl-17-fitness__desc">
            Olympic lifting platforms, hypoxic sprint labs, cold plunge hydrotherapy, and world-class strength coaching designed to push your physiological threshold.
          </p>

          <a href="#trial" class="tpl-17-fitness__btn">Claim 7-Day Free All-Access Pass</a>

          <div style="margin-top:32px;display:flex;gap:24px;font-size:13px;font-weight:700;">
            <span>✓ 24/7 Biometric Access</span>
            <span>✓ Unlimited Hydrotherapy</span>
            <span>✓ Certified Coaches</span>
          </div>
        </div>

        <div>
          <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80" alt="Athletic Training Session" class="tpl-17-fitness__img">
        </div>
      </div>
    </header>
    `
  },
  {
    id: 18,
    slug: 'template-18',
    cssGroup: '11-20',
    title: 'Healthcare and Medical',
    category: 'Health & Medical',
    categoryKey: 'lifestyle',
    concept: 'Next-Gen Concierge Telehealth',
    desc: 'Trustworthy telehealth hero in calming clinical mint & emerald tones with active doctor indicator, symptom search, and HIPAA security guarantee.',
    tags: ['Concierge Health', 'Telehealth Online', 'Doctor Availability', 'HIPAA Certified'],
    features: ['Active doctor counter badge', 'Instant consultation booking', 'Clinical photography card', 'HIPAA compliant security mark'],
    html: `
    <header class="tpl-18-healthcare">
      <div class="tpl-18-healthcare__container">
        <div>
          <div class="tpl-18-healthcare__status">
            <span>● 18 Board-Certified Physicians Online Now</span>
          </div>

          <h1 class="tpl-18-healthcare__title">
            Compassionate Primary Care, <span>Available Anytime</span>.
          </h1>

          <p class="tpl-18-healthcare__desc">
            Consult top specialists via video in under 15 minutes, access same-day prescription delivery, and monitor health metrics in one secure app.
          </p>

          <div style="display:flex;gap:16px;align-items:center;">
            <a href="#book" class="tpl-18-healthcare__btn">Start Immediate Consultation</a>
            <span style="font-size:13px;color:#059669;font-weight:600;">✓ $0 Copay with most insurance</span>
          </div>
        </div>

        <div class="tpl-18-healthcare__card">
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" alt="Doctor with Patient Tablet" class="tpl-18-healthcare__img">
          <div style="margin-top:16px;display:flex;justify-content:space-between;align-items:center;font-size:13px;font-weight:600;">
            <span>Novacare Telehealth Network</span>
            <span style="color:#059669;">HIPAA Compliant • 256-Bit Encrypted</span>
          </div>
        </div>
      </div>
    </header>
    `
  },
  {
    id: 19,
    slug: 'template-19',
    cssGroup: '11-20',
    title: 'Online Education',
    category: 'Education & Courses',
    categoryKey: 'saas',
    concept: 'SkillForge Academy & Masterclasses',
    desc: 'Collegiate modern learning hero with integrated course search input, accredited curriculum badges, and student enrollment counter.',
    tags: ['Online Academy', 'Course Search', 'Accredited Mentors', 'Student Proof'],
    features: ['Live course search input', 'Skill suggestion pills', 'Student enrollment badge', 'High-impact headline'],
    html: `
    <header class="tpl-19-education">
      <div class="tpl-19-education__container">
        <span class="tpl-19-education__badge">SkillForge University • Accredited 2026</span>
        <h1 class="tpl-19-education__title">
          Master High-Income Technical Skills from World-Class Practitioners.
        </h1>
        <p style="font-size:18px;color:#6b7280;max-width:680px;margin:0 auto;">
          Accelerated cohorts in AI Engineering, Distributed Cloud Architecture, and Product Strategy. Complete with real portfolio capstones.
        </p>

        <form class="tpl-19-education__search" id="edu-search-form">
          <input type="text" class="tpl-19-education__input" placeholder="Search 450+ courses: 'Rust', 'LLM Tuning', 'System Design'..." aria-label="Search courses">
          <button type="submit" class="tpl-19-education__search-btn">Find Courses</button>
        </form>

        <div style="font-size:13px;color:#6b7280;margin-top:24px;">
          ★ Rated 4.9/5 by 65,000+ engineers from Google, Amazon & Stripe
        </div>
      </div>
    </header>
    `
  },
  {
    id: 20,
    slug: 'template-20',
    cssGroup: '11-20',
    title: 'Course and Coaching',
    category: 'Education & Courses',
    categoryKey: 'business',
    concept: 'Executive Founder Leadership Accelerator',
    desc: 'High-ticket coaching hero featuring a live ticking countdown timer to cohort enrollment closure, money-back guarantee, and syllabus CTA.',
    tags: ['Executive Coaching', 'Live Countdown Timer', 'Cohort Scarcity', 'High Ticket'],
    features: ['Live ticking countdown clock', 'Syllabus download action', 'Cohort seats remaining tracker', 'Amber contrast accents'],
    html: `
    <header class="tpl-20-coaching">
      <div class="tpl-20-coaching__container">
        <div>
          <span class="tpl-20-coaching__badge">Founder Mastery 8-Week Cohort</span>
          <h1 class="tpl-20-coaching__title">
            The Executive Playbook for Scaling from $1M to $20M ARR.
          </h1>
          <p style="font-size:17px;color:#94a3b8;line-height:1.6;margin-bottom:32px;">
            Intensive private cohort for B2B tech CEOs. Master enterprise sales motions, operational delegation, and board governance.
          </p>

          <div style="display:flex;gap:16px;">
            <a href="#syllabus" style="color:#f59e0b;font-weight:700;display:flex;align-items:center;gap:6px;">Download Complete 8-Week Syllabus ↓</a>
          </div>
        </div>

        <div class="tpl-20-coaching__timer-card">
          <strong style="font-size:14px;color:#f59e0b;text-transform:uppercase;letter-spacing:0.1em;">Cohort Enrollment Closes In:</strong>

          <div class="tpl-20-coaching__timer-grid">
            <div class="tpl-20-coaching__time-box">
              <div class="tpl-20-coaching__time-num" id="cch-days">14</div>
              <div class="tpl-20-coaching__time-lbl">Days</div>
            </div>
            <div class="tpl-20-coaching__time-box">
              <div class="tpl-20-coaching__time-num" id="cch-hours">08</div>
              <div class="tpl-20-coaching__time-lbl">Hours</div>
            </div>
            <div class="tpl-20-coaching__time-box">
              <div class="tpl-20-coaching__time-num" id="cch-mins">42</div>
              <div class="tpl-20-coaching__time-lbl">Mins</div>
            </div>
            <div class="tpl-20-coaching__time-box">
              <div class="tpl-20-coaching__time-num" id="cch-secs">19</div>
              <div class="tpl-20-coaching__time-lbl">Secs</div>
            </div>
          </div>

          <div style="font-size:12px;color:#94a3b8;margin-bottom:16px;">Only 4 seats remaining for Q3</div>
          <button type="button" class="tpl-20-coaching__btn">Apply For Cohort Seat</button>
        </div>
      </div>
    </header>
    `
  },
  {
    id: 21,
    slug: 'template-21',
    cssGroup: '21-30',
    title: 'Mobile App Promotion',
    category: 'Mobile & Apps',
    categoryKey: 'saas',
    concept: 'SpendFlow Smart Financial Assistant',
    desc: 'Smartphone mockup hero with floating glassmorphic push notifications, official App Store & Google Play badges, and QR scan preview.',
    tags: ['Phone Mockup', 'Floating Notifications', 'App Store Badges', 'Mobile App'],
    features: ['CSS-rendered smartphone mockup', 'Floating transaction alert cards', 'Store download buttons', '4.9 App Store rating'],
    html: `
    <header class="tpl-21-mobileapp">
      <div class="tpl-21-mobileapp__container">
        <div>
          <div class="tpl-21-mobileapp__badge">★ App Store Award Winner 2026</div>
          <h1 class="tpl-21-mobileapp__title">Financial Clarity In The Palm of Your Hand</h1>
          <p class="tpl-21-mobileapp__desc">
            Connect all bank accounts, automate high-yield savings, and gain autonomous insights that eliminate unnecessary recurring expenses.
          </p>

          <div class="tpl-21-mobileapp__stores">
            <a href="#appstore" class="tpl-21-mobileapp__store-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.35-.58.66-.99 1.72-.88 2.74 1.01.08 2.05-.53 2.6-1.24z"/></svg>
              <div class="tpl-21-mobileapp__store-text">
                <small>Download on</small>
                <strong>Apple App Store</strong>
              </div>
            </a>

            <a href="#playstore" class="tpl-21-mobileapp__store-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.38 0 .74.15 1.01.41l9.9 9.9-9.9 9.9c-.27.26-.63.41-1.01.41-.83 0-1.5-.67-1.5-1.22zm11.72-8.5l2.42-2.42-12.72-7.35 10.3 9.77zm0 0l-10.3 9.77 12.72-7.35-2.42-2.42z"/></svg>
              <div class="tpl-21-mobileapp__store-text">
                <small>Get it on</small>
                <strong>Google Play</strong>
              </div>
            </a>
          </div>

          <div style="font-size:13px;color:#94a3b8;">4.9 ★ Rating across 42,000+ reviews • Free forever tier available</div>
        </div>

        <div class="tpl-21-mobileapp__mockup-wrap">
          <div class="tpl-21-mobileapp__phone">
            <div class="tpl-21-mobileapp__phone-notch"></div>
            <div class="tpl-21-mobileapp__phone-screen">
              <div style="font-size:12px;color:#94a3b8;">Total Net Liquidity</div>
              <div style="font-size:24px;font-weight:800;color:#ffffff;margin-top:4px;">$64,820.50</div>
              <div style="height:100px;background:rgba(59,130,246,0.15);border-radius:12px;margin-top:16px;border:1px solid rgba(59,130,246,0.3);padding:10px;">
                <div style="font-size:11px;color:#93c5fd;">Autonomous Yield Generator</div>
                <div style="font-size:16px;font-weight:700;color:#ffffff;margin-top:4px;">+ $284.12 Earned</div>
              </div>
            </div>
          </div>

          <div class="tpl-21-mobileapp__float-card tpl-21-mobileapp__float-card--left">
            <span>⚡ Salary Deposit: <strong>+$6,250</strong></span>
          </div>

          <div class="tpl-21-mobileapp__float-card tpl-21-mobileapp__float-card--right">
            <span>🛡️ Auto-Saved: <strong>$140.00</strong></span>
          </div>
        </div>
      </div>
    </header>
    `
  },
  {
    id: 22,
    slug: 'template-22',
    cssGroup: '21-30',
    title: 'Fintech and Financial Services',
    category: 'Finance & Fintech',
    categoryKey: 'business',
    concept: 'Multi-Currency Global Treasury',
    desc: 'Modern neo-bank hero with deep sapphire & emerald tones, real-time interactive currency converter calculator, and institutional compliance badges.',
    tags: ['Neo-Bank', 'Currency Converter', 'Global Treasury', 'SOC2 Compliant'],
    features: ['Working USD/EUR live exchange calculator', 'Instant recalculation on typing', 'Regulatory compliance marks', 'Zero hidden fees claim'],
    html: `
    <header class="tpl-22-fintech">
      <div class="tpl-22-fintech__container">
        <div>
          <div class="tpl-22-fintech__pill">● PayVortex Global Treasury 2.0</div>
          <h1 class="tpl-22-fintech__title">
            Global Payments and FX Without The <span>Hidden Margins</span>.
          </h1>
          <p class="tpl-22-fintech__desc">
            Hold 40+ currencies, execute algorithmic FX hedging, and issue virtual corporate cards globally with zero international wire surcharges.
          </p>

          <div style="display:flex;gap:24px;font-size:13px;color:#94a3b8;">
            <span>✓ SOC2 Type II Certified</span>
            <span>✓ FDIC Insured up to $2.5M</span>
            <span>✓ Real-time SWIFT & SEPA</span>
          </div>
        </div>

        <div class="tpl-22-fintech__calc-card">
          <div class="tpl-22-fintech__calc-header">
            <span>Live Currency Conversion</span>
            <span style="color:#10b981;font-size:13px;">Interbank Spot Rate</span>
          </div>

          <div class="tpl-22-fintech__currency-box">
            <div class="tpl-22-fintech__currency-label">You Send</div>
            <div class="tpl-22-fintech__currency-val">
              <input type="number" id="fin-usd-input" value="10000" min="100" step="100" aria-label="USD amount">
              <span>USD</span>
            </div>
          </div>

          <div style="text-align:center;font-size:12px;color:#94a3b8;margin:8px 0;">↓ Guaranteed FX Rate: 1 USD = 0.92 EUR (0% Markup)</div>

          <div class="tpl-22-fintech__currency-box">
            <div class="tpl-22-fintech__currency-label">Recipient Receives</div>
            <div class="tpl-22-fintech__currency-val">
              <strong id="fin-eur-output">€9,200.00</strong>
              <span>EUR</span>
            </div>
          </div>

          <button type="button" class="tpl-22-fintech__btn">Open Business Treasury Account</button>
        </div>
      </div>
    </header>
    `
  },
  {
    id: 23,
    slug: 'template-23',
    cssGroup: '21-30',
    title: 'Cybersecurity Product',
    category: 'Security & Enterprise',
    categoryKey: 'saas',
    concept: 'Autonomous Zero-Trust Threat Neutralization',
    desc: 'High-tech cyber defense dark interface with live simulated threats blocked counter, cyber-grid mesh, and live penetration audit CTA.',
    tags: ['Cybersecurity', 'Live Threat Counter', 'Zero-Trust', 'High Tech Dark'],
    features: ['Incrementing real-time threats blocked counter', 'Cyan defense grid', 'Instant breach audit trigger', 'Zero-trust architecture details'],
    html: `
    <header class="tpl-23-cybersecurity">
      <div class="tpl-23-cybersecurity__container">
        <div class="tpl-23-cybersecurity__alert">
          <span>🛡️ Threat Intelligence Feed: ACTIVE</span>
        </div>

        <h1 class="tpl-23-cybersecurity__title">
          Autonomous Zero-Trust Neutralization for Cloud Workloads.
        </h1>

        <p class="tpl-23-cybersecurity__lead">
          Continuous cryptographic identity verification, automated lateral movement isolation, and sub-second kernel-level exploit prevention.
        </p>

        <div class="tpl-23-cybersecurity__actions">
          <a href="#audit" class="tpl-23-cybersecurity__btn">Request Adversarial Attack Simulation</a>
        </div>

        <div class="tpl-23-cybersecurity__threat-bar">
          <div class="tpl-23-cybersecurity__threat-item">
            <strong id="sec-threat-counter">2,847,190</strong>
            <span>Threats Neutralized Today</span>
          </div>
          <div class="tpl-23-cybersecurity__threat-item">
            <strong>0.04 ms</strong>
            <span>Kernel Micro-Isolation</span>
          </div>
          <div class="tpl-23-cybersecurity__threat-item">
            <strong>100%</strong>
            <span>Zero-Day Exploit Mitigation</span>
          </div>
        </div>
      </div>
    </header>
    `
  },
  {
    id: 24,
    slug: 'template-24',
    cssGroup: '21-30',
    title: 'Photography Portfolio',
    category: 'Portfolio & Media',
    categoryKey: 'media',
    concept: 'Documentary & Editorial Photography',
    desc: 'Immersive full-bleed photography hero with camera EXIF technical metadata badge, clean minimal typography, and exhibition inquiry action.',
    tags: ['Full Bleed Photo', 'EXIF Camera Data', 'Monochrome Minimal', 'Gallery Inquiry'],
    features: ['Dynamic EXIF camera metadata bar', 'Immersive full-screen background', 'Gallery exhibition booking', 'Minimalist aesthetics'],
    html: `
    <header class="tpl-24-photography" style="background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80');">
      <div class="tpl-24-photography__overlay"></div>

      <div class="tpl-24-photography__container">
        <div class="tpl-24-photography__exif">
          LEICA M11-P • 35MM SUMMICRON-M F/2 • 1/1000S • ISO 64 • ICELANDIC HIGHLANDS
        </div>

        <h1 class="tpl-24-photography__title">
          Silent Solitudes: Landscapes in Transition
        </h1>

        <div style="display:flex;gap:20px;align-items:center;">
          <a href="#exhibition" class="tpl-24-photography__btn">Exhibition Tickets (Berlin & Tokyo)</a>
          <a href="#inquiry" style="color:#ffffff;font-size:14px;text-decoration:underline;">Print Catalog Inquiry →</a>
        </div>
      </div>
    </header>
    `
  },
  {
    id: 25,
    slug: 'template-25',
    cssGroup: '21-30',
    title: 'Video Production Agency',
    category: 'Agency & Studio',
    categoryKey: 'media',
    concept: 'Cinematic Commercials & Film',
    desc: 'Widescreen cinematic letterbox hero with Cannes Lions festival laurels, dark atmospheric mood, and working showreel playback trigger.',
    tags: ['Cinematic Letterbox', 'Festival Laurels', 'Showreel Trigger', 'Commercial Cinema'],
    features: ['Cannes Lions & Tribeca laurels', 'Interactive showreel play trigger', 'Cinematic widescreen frame', 'Film festival credentials'],
    html: `
    <header class="tpl-25-videoproduction" style="background-image: url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80');">
      <div class="tpl-25-videoproduction__overlay"></div>

      <div class="tpl-25-videoproduction__container">
        <div class="tpl-25-videoproduction__laurels">
          ★ Cannes Lions Grand Prix 2025 • Tribeca Selection • Vimeo Staff Pick of the Year
        </div>

        <h1 class="tpl-25-videoproduction__title">
          We Direct Cinematic Stories That Resonate Across Generations.
        </h1>

        <div class="tpl-25-videoproduction__play-wrap" id="vid-play-trigger">
          <div class="tpl-25-videoproduction__play-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff"><polygon points="6 4 20 12 6 20 6 4"/></svg>
          </div>
          <span style="font-size:14px;font-weight:700;color:#ffffff;text-transform:uppercase;letter-spacing:0.1em;">Watch Agency Showreel (2:30)</span>
        </div>
      </div>
    </header>
    `
  },
  {
    id: 26,
    slug: 'template-26',
    cssGroup: '21-30',
    title: 'Event and Conference',
    category: 'Events & Communities',
    categoryKey: 'media',
    concept: 'FutureSync Global Design & AI Summit',
    desc: 'Dynamic festival hero with live ticking event countdown timer, summit dates badge, keynote speakers highlight, and Early Bird pass registration.',
    tags: ['Conference Summit', 'Live Event Countdown', 'Early Bird Pass', 'Keynote Speakers'],
    features: ['Live ticking summit countdown', 'San Francisco & Online dates badge', 'Speaker credential badges', 'Early bird discount lock'],
    html: `
    <header class="tpl-26-event">
      <div class="tpl-26-event__container">
        <div>
          <span class="tpl-26-event__date-badge">November 12-14, 2026 • San Francisco & Global Stream</span>
          <h1 class="tpl-26-event__title">
            The Frontier Summit on AI, Design Systems & Spatial Software.
          </h1>
          <p class="tpl-26-event__desc">
            Join 3,500+ design executives, research scientists, and founding engineers for 3 days of deep-dive keynotes, technical labs, and executive roundtables.
          </p>

          <a href="#register" class="tpl-26-event__btn">Register Early Bird Pass (Save 40%)</a>
        </div>

        <div class="tpl-26-event__countdown-card">
          <strong style="color:#ffffff;font-size:13px;text-transform:uppercase;letter-spacing:0.1em;">Summit Commences In:</strong>

          <div class="tpl-26-event__timer-grid">
            <div>
              <div class="tpl-26-event__timer-val" id="ev-days">24</div>
              <div class="tpl-26-event__timer-lbl">Days</div>
            </div>
            <div>
              <div class="tpl-26-event__timer-val" id="ev-hours">16</div>
              <div class="tpl-26-event__timer-lbl">Hours</div>
            </div>
            <div>
              <div class="tpl-26-event__timer-val" id="ev-mins">30</div>
              <div class="tpl-26-event__timer-lbl">Mins</div>
            </div>
            <div>
              <div class="tpl-26-event__timer-val" id="ev-secs">45</div>
              <div class="tpl-26-event__timer-lbl">Secs</div>
            </div>
          </div>

          <div style="margin-top:20px;font-size:12px;color:#c4b5fd;">Keynotes from Figma, OpenAI, Apple & MIT Media Lab</div>
        </div>
      </div>
    </header>
    `
  },
  {
    id: 27,
    slug: 'template-27',
    cssGroup: '21-30',
    title: 'Newsletter and Lead Generation',
    category: 'Newsletter & Leads',
    categoryKey: 'media',
    concept: 'The Frontier Briefing',
    desc: 'High-conversion editorial lead magnet with 1-click email subscription validation, social proof counter (85,000+ readers), and clean minimalist styling.',
    tags: ['Lead Magnet', 'Newsletter Capture', 'Instant Validation', 'Social Proof'],
    features: ['Instant 1-click subscription confirmation', 'Zero spam pledge', 'Executive subscriber count', 'Editorial clarity'],
    html: `
    <header class="tpl-27-newsletter">
      <div class="tpl-27-newsletter__container">
        <div class="tpl-27-newsletter__eyebrow">Weekly Executive Intelligence</div>
        <h1 class="tpl-27-newsletter__title">
          The Frontier Brief: Deep Insights on AI, Systems & Venture.
        </h1>
        <p class="tpl-27-newsletter__lead">
          Every Thursday, we dissect technical papers, analyze foundational model benchmarks, and deliver actionable strategy directly to your inbox.
        </p>

        <form class="tpl-27-newsletter__form">
          <input type="email" class="tpl-27-newsletter__input" placeholder="Your work email..." required aria-label="Work email for newsletter">
          <button type="submit" class="tpl-27-newsletter__btn">Subscribe</button>
        </form>

        <div class="tpl-27-newsletter__note">
          Join 85,000+ founders, research leads, and tech executives. No spam, unsubscribe anytime.
        </div>
      </div>
    </header>
    `
  },
  {
    id: 28,
    slug: 'template-28',
    cssGroup: '21-30',
    title: 'Minimalist Editorial',
    category: 'Editorial & Publishing',
    categoryKey: 'media',
    concept: 'The Dialogue Review Journal',
    desc: 'Classic print-inspired digital journal with issue #42 banner, Cormorant Garamond serif headline, reading time indicator, and essay excerpt.',
    tags: ['Print Inspired', 'Journalism', 'Cormorant Serif', 'Reading Indicator'],
    features: ['Issue #42 publication header', 'Reading time estimate (8 min read)', 'Clean print typography', 'Direct essay link'],
    html: `
    <header class="tpl-28-editorial">
      <div class="tpl-28-editorial__container">
        <div class="tpl-28-editorial__issue-bar">
          <span>The Dialogue Review • Vol. XLII</span>
          <span>Critical Essays on Philosophy & Technology</span>
          <span>Autumn 2026</span>
        </div>

        <h1 class="tpl-28-editorial__headline">
          On The Fragility of Attention in an Era of Synthetic Consensus.
        </h1>

        <p class="tpl-28-editorial__excerpt">
          An investigation into how algorithmic homogenisation threatens aesthetic divergence, and why slow, tactile intellectual craftsmanship remains our most vital cultural bulwark.
        </p>

        <div style="display:flex;align-items:center;gap:24px;">
          <a href="#read" class="tpl-28-editorial__read-link">Read Full Essay (8 Min)</a>
          <span style="font-size:13px;color:#57534e;">By Dr. Julian Vance • Cambridge University</span>
        </div>
      </div>
    </header>
    `
  },
  {
    id: 29,
    slug: 'template-29',
    cssGroup: '21-30',
    title: 'Dark Premium Creative Studio',
    category: 'Agency & Studio',
    categoryKey: 'creative',
    concept: 'VOID 3D Virtual Worlds & Creative Direction',
    desc: 'Pitch-black luxury creative studio hero with electric acid lime typography accents, oversized Syne styling, and magnetic project inquiry CTA.',
    tags: ['Pitch Black Studio', 'Acid Lime Accents', 'Syne Typography', '3D Virtual Worlds'],
    features: ['Acid lime kinetic highlights', 'Kinetic oversized typography', 'Sub-grid structural dividers', 'Scale-on-hover primary CTA'],
    html: `
    <header class="tpl-29-darkstudio">
      <div class="tpl-29-darkstudio__container">
        <div class="tpl-29-darkstudio__sub">● VOID LABS • TOKYO & REYKJAVIK</div>

        <h1 class="tpl-29-darkstudio__title">
          We Build <span>Hyper-Tactile</span> Virtual Worlds.
        </h1>

        <div class="tpl-29-darkstudio__bottom">
          <p class="tpl-29-darkstudio__desc">
            Independent creative studio pioneering spatial direction, real-time procedural aesthetics, and high-fashion digital experiences for forward-thinking brands.
          </p>

          <a href="#start" class="tpl-29-darkstudio__cta">Start A Project →</a>
        </div>
      </div>
    </header>
    `
  },
  {
    id: 30,
    slug: 'template-30',
    cssGroup: '21-30',
    title: 'Interactive Next-Generation Hero',
    category: 'Interactive & Web3',
    categoryKey: 'ai',
    concept: 'Synthetix Spatial OS',
    desc: 'Cutting-edge next-generation hero with interactive canvas mode switcher (Spatial View, Neural Canvas, Collaborative Hub), and cyan grid matrix.',
    tags: ['Next-Gen Spatial OS', 'Mode Switcher Tabs', 'Interactive Canvas', 'Futuristic UI'],
    features: ['Working 3-mode canvas switcher', 'Dynamic stage text and description updates', 'Cyan gradient headline', 'Pulsing coordinate matrix'],
    html: `
    <header class="tpl-30-nextgen">
      <div class="tpl-30-nextgen__container">
        <div class="tpl-30-nextgen__badge">
          <span>● Synthetix OS v4.0 Spatial Computing</span>
        </div>

        <h1 class="tpl-30-nextgen__title">
          Next-Generation Workspaces for <span class="tpl-30-nextgen__title-grad">Multi-Agent Cognition</span>.
        </h1>

        <div class="tpl-30-nextgen__tabs">
          <button type="button" class="tpl-30-nextgen__tab active" data-mode="spatial">Spatial View</button>
          <button type="button" class="tpl-30-nextgen__tab" data-mode="neural">Neural Canvas</button>
          <button type="button" class="tpl-30-nextgen__tab" data-mode="collab">Collaborative Hub</button>
        </div>

        <div class="tpl-30-nextgen__canvas-stage">
          <div class="tpl-30-nextgen__canvas-grid"></div>
          <div class="tpl-30-nextgen__canvas-info">
            <h3 id="nxt-mode-title">Spatial Computing Canvas</h3>
            <p id="nxt-mode-desc">Real-time multi-dimensional workspace with 3D coordinate mapping.</p>
            <div style="margin-top:16px;display:inline-flex;gap:12px;font-size:12px;color:#22d3ee;font-family:monospace;">
              <span>FPS: 120</span> • <span>Nodes: 2,400</span> • <span>Sync: 2.1ms</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    `
  }
];

// Helper to wrap template in full standalone HTML
function buildStandaloneHTML(tpl) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${tpl.title} — Premium Hero Section</title>
  <link rel="stylesheet" href="../css/templates-common.css">
  <link rel="stylesheet" href="../css/templates/tpl-${tpl.cssGroup}.css">
</head>
<body>
  ${tpl.html.trim()}
  <script src="../js/templates-interactions.js"></script>
</body>
</html>`;
}

// Write all 30 HTML template files
templates.forEach(tpl => {
  const filePath = path.join(__dirname, '..', 'templates', `${tpl.slug}.html`);
  fs.writeFileSync(filePath, buildStandaloneHTML(tpl), 'utf8');
  console.log(`Generated: templates/${tpl.slug}.html`);
});

// Write js/templates-data.js for gallery usage
const jsDataContent = `/**
 * templates-data.js
 * Data store for all 30 Hero Section templates in the showcase gallery
 */
const HERO_TEMPLATES = ${JSON.stringify(templates, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '..', 'js', 'templates-data.js'), jsDataContent, 'utf8');
console.log('Generated: js/templates-data.js (All 30 templates indexed)');
