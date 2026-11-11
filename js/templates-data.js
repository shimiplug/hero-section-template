/**
 * templates-data.js
 * Data store for all 30 Hero Section templates in the showcase gallery
 */
const HERO_TEMPLATES = [
  {
    "id": 1,
    "slug": "template-01",
    "cssGroup": "01-10",
    "title": "Modern SaaS Landing Page",
    "category": "SaaS & Software",
    "categoryKey": "saas",
    "concept": "Autonomous Data Pipeline Platform",
    "desc": "High-converting split hero for modern SaaS products with live metrics dashboard, latency graph, interactive tabs, and trial signup.",
    "tags": [
      "Interactive Dashboard",
      "Split Hero",
      "Form Capture",
      "Live Metrics"
    ],
    "features": [
      "Live latency SVG chart",
      "Interactive Revenue/Performance tabs",
      "Instant trial form feedback",
      "Social proof avatar stack"
    ],
    "html": "\n    <header class=\"tpl-01-saas\">\n      <div class=\"tpl-01-saas__glow-1\" aria-hidden=\"true\"></div>\n      <div class=\"tpl-01-saas__glow-2\" aria-hidden=\"true\"></div>\n      <div class=\"tpl-01-saas__grid-pattern\" aria-hidden=\"true\"></div>\n\n      <div class=\"tpl-01-saas__container\">\n        <div class=\"tpl-01-saas__content\">\n          <div class=\"tpl-01-saas__badge\">\n            <span class=\"tpl-01-saas__badge-dot\"></span>\n            <span>Version 3.4 Live — Real-time ETL Sync</span>\n          </div>\n\n          <h1 class=\"tpl-01-saas__title\">\n            Automate Data Flows with <span class=\"tpl-01-saas__title-gradient\">Sub-Second Precision</span>\n          </h1>\n\n          <p class=\"tpl-01-saas__description\">\n            Connect disparate databases, orchestrate distributed transformations, and deliver pristine event streams directly into your operational data warehouse.\n          </p>\n\n          <form class=\"tpl-01-saas__form\" id=\"saas-trial-form\">\n            <input type=\"email\" class=\"tpl-01-saas__input\" placeholder=\"Enter your work email...\" required aria-label=\"Work email\">\n            <button type=\"submit\" class=\"tpl-01-saas__btn-primary\">\n              <span>Start Free 14-Day Trial</span>\n              <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><path d=\"M5 12h14M12 5l7 7-7 7\"/></svg>\n            </button>\n          </form>\n\n          <div class=\"tpl-01-saas__social-proof\">\n            <div class=\"tpl-01-saas__avatars\">\n              <img src=\"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80\" alt=\"Sarah C.\" class=\"tpl-01-saas__avatar\">\n              <img src=\"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80\" alt=\"David K.\" class=\"tpl-01-saas__avatar\">\n              <img src=\"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&h=80&q=80\" alt=\"Elena V.\" class=\"tpl-01-saas__avatar\">\n              <img src=\"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80\" alt=\"Marcus R.\" class=\"tpl-01-saas__avatar\">\n            </div>\n            <div>\n              <div class=\"tpl-01-saas__proof-stars\">★★★★★</div>\n              <div class=\"tpl-01-saas__proof-text\">Trusted by 45,000+ data engineers globally</div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"tpl-01-saas__preview\">\n          <div class=\"tpl-01-saas__preview-header\">\n            <div class=\"tpl-01-saas__window-controls\">\n              <span class=\"tpl-01-saas__control-dot\" style=\"background:#ef4444\"></span>\n              <span class=\"tpl-01-saas__control-dot\" style=\"background:#f59e0b\"></span>\n              <span class=\"tpl-01-saas__control-dot\" style=\"background:#10b981\"></span>\n            </div>\n            <div class=\"tpl-01-saas__tabs\">\n              <button type=\"button\" class=\"tpl-01-saas__tab-btn active\" data-mode=\"performance\">Performance</button>\n              <button type=\"button\" class=\"tpl-01-saas__tab-btn\" data-mode=\"revenue\">Revenue Impact</button>\n            </div>\n          </div>\n\n          <div class=\"tpl-01-saas__stats-grid\">\n            <div class=\"tpl-01-saas__stat-card\">\n              <div class=\"tpl-01-saas__stat-label\">Pipeline Latency</div>\n              <div class=\"tpl-01-saas__stat-val\" id=\"saas-stat-1\">1.24s</div>\n              <div class=\"tpl-01-saas__stat-delta\">↓ 42% vs p95</div>\n            </div>\n            <div class=\"tpl-01-saas__stat-card\">\n              <div class=\"tpl-01-saas__stat-label\">Sync Reliability</div>\n              <div class=\"tpl-01-saas__stat-val\" id=\"saas-stat-2\">99.99%</div>\n              <div class=\"tpl-01-saas__stat-delta\">Zero dropouts</div>\n            </div>\n            <div class=\"tpl-01-saas__stat-card\">\n              <div class=\"tpl-01-saas__stat-label\">Events Processed</div>\n              <div class=\"tpl-01-saas__stat-val\" id=\"saas-stat-3\">48.2M</div>\n              <div class=\"tpl-01-saas__stat-delta\">↑ 18% today</div>\n            </div>\n          </div>\n\n          <div class=\"tpl-01-saas__chart-wrap\">\n            <svg viewBox=\"0 0 400 120\" width=\"100%\" height=\"100%\" style=\"overflow:visible\">\n              <defs>\n                <linearGradient id=\"chartGrad1\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n                  <stop offset=\"0%\" stop-color=\"#6366f1\" stop-opacity=\"0.5\"/>\n                  <stop offset=\"100%\" stop-color=\"#6366f1\" stop-opacity=\"0\"/>\n                </linearGradient>\n              </defs>\n              <path d=\"M0,100 Q60,40 120,70 T240,30 T360,50 L400,20 L400,120 L0,120 Z\" fill=\"url(#chartGrad1)\" />\n              <path d=\"M0,100 Q60,40 120,70 T240,30 T360,50 L400,20\" fill=\"none\" stroke=\"#818cf8\" stroke-width=\"3\" />\n              <circle cx=\"400\" cy=\"20\" r=\"5\" fill=\"#4ade80\" />\n            </svg>\n          </div>\n\n          <div class=\"tpl-01-saas__activity-row\">\n            <span>● Cluster us-east-prod sync healthy</span>\n            <span class=\"tpl-01-saas__status-pill\">Active</span>\n          </div>\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 2,
    "slug": "template-02",
    "cssGroup": "01-10",
    "title": "AI Product Landing Page",
    "category": "AI & Machine Learning",
    "categoryKey": "ai",
    "concept": "Autonomous Multimodal Intelligence",
    "desc": "Cinematic centered hero with glowing ambient mesh, interactive prompt simulation bar, model selector, and dynamic token speed badge.",
    "tags": [
      "AI Prompt Simulation",
      "Dark Mode",
      "Interactive Chips",
      "Cinematic Glow"
    ],
    "features": [
      "Typeable prompt field",
      "Interactive prompt suggestion chips",
      "Simulated neural response",
      "Multi-model selector pills"
    ],
    "html": "\n    <header class=\"tpl-02-ai\">\n      <div class=\"tpl-02-ai__ambient-mesh\" aria-hidden=\"true\"></div>\n\n      <div class=\"tpl-02-ai__container\">\n        <div class=\"tpl-02-ai__badge\">\n          <span class=\"tpl-02-ai__badge-tag\">New</span>\n          <span>Cortex-7B MoE Engine with Zero-Shot Reasoning</span>\n        </div>\n\n        <h1 class=\"tpl-02-ai__title\">\n          Build Intelligent Systems at <span class=\"tpl-02-ai__title-glow\">Hyperscale</span>\n        </h1>\n\n        <p class=\"tpl-02-ai__subtitle\">\n          Orchestrate multi-agent workflows, synthesize structured knowledge graphs, and embed deterministic cognitive capabilities into any codebase.\n        </p>\n\n        <div class=\"tpl-02-ai__prompt-container\">\n          <div class=\"tpl-02-ai__prompt-top\">\n            <div class=\"tpl-02-ai__model-selector\">\n              <span class=\"tpl-02-ai__model-dot\"></span>\n              <span>Cortex-Ultra-v4</span>\n            </div>\n            <span style=\"font-size:11px;color:#9ca3af;font-family:monospace;\">Latency: 12ms • 185 tok/s</span>\n          </div>\n\n          <div class=\"tpl-02-ai__prompt-box\">\n            <input type=\"text\" class=\"tpl-02-ai__input\" placeholder=\"Test the engine: Ask a question or summarize an architecture...\" aria-label=\"AI Prompt Input\">\n            <button type=\"button\" class=\"tpl-02-ai__generate-btn\">\n              <span>Execute</span>\n              <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><path d=\"M5 12h14M12 5l7 7-7 7\"/></svg>\n            </button>\n          </div>\n\n          <div class=\"tpl-02-ai__chips\">\n            <span class=\"tpl-02-ai__chips-label\">Try:</span>\n            <button type=\"button\" class=\"tpl-02-ai__chip\" data-prompt=\"Analyze Kubernetes microservices fault tolerance\">Kubernetes Resiliency</button>\n            <button type=\"button\" class=\"tpl-02-ai__chip\" data-prompt=\"Synthesize Q3 financial projections for SaaS startup\">Financial Synthesis</button>\n            <button type=\"button\" class=\"tpl-02-ai__chip\" data-prompt=\"Generate TypeScript types for distributed state machine\">State Machine Types</button>\n          </div>\n\n          <div class=\"tpl-02-ai__output-preview\" aria-live=\"polite\"></div>\n        </div>\n\n        <div class=\"tpl-02-ai__stats\">\n          <div>\n            <div class=\"tpl-02-ai__stat-number\">99.8%</div>\n            <div class=\"tpl-02-ai__stat-label\">Retrieval Precision</div>\n          </div>\n          <div>\n            <div class=\"tpl-02-ai__stat-number\">12ms</div>\n            <div class=\"tpl-02-ai__stat-label\">Average Time to First Token</div>\n          </div>\n          <div>\n            <div class=\"tpl-02-ai__stat-number\">14.2B+</div>\n            <div class=\"tpl-02-ai__stat-label\">Embeddings Generated Monthly</div>\n          </div>\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 3,
    "slug": "template-03",
    "cssGroup": "01-10",
    "title": "Startup Hero Section",
    "category": "Startup & Growth",
    "categoryKey": "saas",
    "concept": "Series A Venture Launchpad",
    "desc": "High-velocity startup showcase with electric coral accents, kinetic value propositions, cohort roadmap visual, and investor metrics bar.",
    "tags": [
      "High-Velocity",
      "Progress Roadmap",
      "Venture Metrics",
      "Dual CTAs"
    ],
    "features": [
      "Cohort traction meter",
      "Live capital raised metric",
      "Audit booking CTA",
      "Interactive progress indicators"
    ],
    "html": "\n    <header class=\"tpl-03-startup\">\n      <div class=\"tpl-03-startup__container\">\n        <div>\n          <div class=\"tpl-03-startup__pill\">⚡ Batch 14 Cohort Applications Open</div>\n          <h1 class=\"tpl-03-startup__title\">\n            From Zero to <span class=\"tpl-03-startup__highlight\">Series A Traction</span> in 90 Days\n          </h1>\n          <p class=\"tpl-03-startup__desc\">\n            We partner with exceptional technical founders to validate unit economics, acquire paying customers, and architect capital-efficient scaling engines.\n          </p>\n\n          <div class=\"tpl-03-startup__actions\">\n            <a href=\"#audit\" class=\"tpl-03-startup__btn-primary\">Apply for Cohort 14</a>\n            <a href=\"#demo\" class=\"tpl-03-startup__btn-secondary\">\n              <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polygon points=\"10 8 16 12 10 16 10 8\"/></svg>\n              <span>Watch 3-Min Film</span>\n            </a>\n          </div>\n\n          <div class=\"tpl-03-startup__metrics-bar\">\n            <div>\n              <div class=\"tpl-03-startup__metric-val\">$185M+</div>\n              <div class=\"tpl-03-startup__metric-sub\">Follow-on Capital Raised</div>\n            </div>\n            <div>\n              <div class=\"tpl-03-startup__metric-val\">88%</div>\n              <div class=\"tpl-03-startup__metric-sub\">Seed-to-A Conversion Rate</div>\n            </div>\n            <div>\n              <div class=\"tpl-03-startup__metric-val\">34 Exits</div>\n              <div class=\"tpl-03-startup__metric-sub\">Top Tier Acquisitions</div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"tpl-03-startup__card\">\n          <div class=\"tpl-03-startup__cohort-badge\">\n            <strong style=\"color:#ffffff;\">Cohort Q3 Trajectory</strong>\n            <span style=\"color:#ff5757;font-size:12px;font-weight:700;\">● Live Tracking</span>\n          </div>\n\n          <div class=\"tpl-03-startup__progress-item\">\n            <div class=\"tpl-03-startup__progress-label\">\n              <span>Customer Discovery & PMF</span>\n              <strong>100%</strong>\n            </div>\n            <div class=\"tpl-03-startup__progress-bar\">\n              <div class=\"tpl-03-startup__progress-fill\" style=\"width:100%;\"></div>\n            </div>\n          </div>\n\n          <div class=\"tpl-03-startup__progress-item\">\n            <div class=\"tpl-03-startup__progress-label\">\n              <span>Paid Pilot Conversions</span>\n              <strong>84%</strong>\n            </div>\n            <div class=\"tpl-03-startup__progress-bar\">\n              <div class=\"tpl-03-startup__progress-fill\" style=\"width:84%;\"></div>\n            </div>\n          </div>\n\n          <div class=\"tpl-03-startup__progress-item\">\n            <div class=\"tpl-03-startup__progress-label\">\n              <span>Institutional Term Sheets</span>\n              <strong>68%</strong>\n            </div>\n            <div class=\"tpl-03-startup__progress-bar\">\n              <div class=\"tpl-03-startup__progress-fill\" style=\"width:68%;\"></div>\n            </div>\n          </div>\n\n          <div style=\"margin-top:24px;padding:12px;background:rgba(255,255,255,0.04);border-radius:10px;font-size:12px;color:#9ca3af;\">\n            🚀 Average time to first $10k MRR: <strong>32 Days</strong>\n          </div>\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 4,
    "slug": "template-04",
    "cssGroup": "01-10",
    "title": "Creative Agency",
    "category": "Agency & Studio",
    "categoryKey": "creative",
    "concept": "Radical Brand World Builders",
    "desc": "Brutalist-editorial agency hero featuring oversized Syne typography, dynamic outline effects, marquee client ticker, and minimal luxury aesthetic.",
    "tags": [
      "Brutalist Editorial",
      "Syne Typography",
      "Marquee Strip",
      "High Fashion Agency"
    ],
    "features": [
      "Outlined kinetic typography",
      "Continuous client marquee",
      "Sub-grid layout system",
      "Magnetic CTA button"
    ],
    "html": "\n    <header class=\"tpl-04-agency\">\n      <div class=\"tpl-04-agency__container\">\n        <div class=\"tpl-04-agency__header-meta\">\n          <span>Studio Monolith © 2026</span>\n          <span>Creative Direction • Brand Architecture • Spatial Identity</span>\n          <span>Zurich / Paris / Tokyo</span>\n        </div>\n\n        <h1 class=\"tpl-04-agency__headline\">\n          We Design <span class=\"tpl-04-agency__headline-outline\">Radical</span> Brand Worlds For The Bold.\n        </h1>\n\n        <div class=\"tpl-04-agency__grid\">\n          <p class=\"tpl-04-agency__desc\">\n            We exist at the intersection of cultural foresight, tactile craft, and digital provocation. We reject the mundane to sculpt identities that command industry reverence.\n          </p>\n\n          <div class=\"tpl-04-agency__cta-group\">\n            <a href=\"#contact\" class=\"tpl-04-agency__cta-btn\">\n              <span>Commission A Project</span>\n              <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><path d=\"M7 17L17 7M17 7H7M17 7V17\"/></svg>\n            </a>\n          </div>\n        </div>\n\n        <div class=\"tpl-04-agency__marquee\">\n          <span>Acne Studios</span> • <span>B&O Spatial</span> • <span>Polestar</span> • <span>Aesop Digital</span> • <span>Rimowa</span> • <span>Balenciaga Labs</span> • <span>Noma Gastronomy</span>\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 5,
    "slug": "template-05",
    "cssGroup": "01-10",
    "title": "Digital Marketing Agency",
    "category": "Marketing & Sales",
    "categoryKey": "creative",
    "concept": "High-Velocity Performance Marketing",
    "desc": "Conversion-focused agency hero equipped with a working interactive ROI Calculator slider, live ROAS projections, and verified partner badges.",
    "tags": [
      "Interactive ROI Slider",
      "Live Calculations",
      "Social Proof",
      "Conversion Focus"
    ],
    "features": [
      "Ad spend drag slider",
      "Real-time projected revenue update",
      "Google/Meta Partner badges",
      "High contrast primary action"
    ],
    "html": "\n    <header class=\"tpl-05-marketing\">\n      <div class=\"tpl-05-marketing__container\">\n        <div>\n          <div class=\"tpl-05-marketing__badge\">\n            <span>★ Premier Google & Meta Scaling Partner</span>\n          </div>\n          <h1 class=\"tpl-05-marketing__title\">\n            We Turn Ad Spend Into <span>Predictable Pipeline</span>\n          </h1>\n          <p class=\"tpl-05-marketing__desc\">\n            Stop burning budget on vanity clicks. We combine algorithmic bid optimization, high-converting creative testing, and multi-touch attribution to scale your revenue.\n          </p>\n\n          <div class=\"tpl-05-marketing__cta-row\">\n            <a href=\"#audit\" class=\"tpl-05-marketing__btn\">Claim Free Growth Audit</a>\n            <span style=\"font-size:13px;color:#64748b;\">No commitment • 48hr delivery</span>\n          </div>\n\n          <div style=\"display:flex;gap:20px;font-size:13px;font-weight:600;color:#334155;\">\n            <span>✓ Average 3.8x ROAS</span>\n            <span>✓ $48M+ Managed Annually</span>\n            <span>✓ 90-Day Guarantee</span>\n          </div>\n        </div>\n\n        <div class=\"tpl-05-marketing__calculator\">\n          <div class=\"tpl-05-marketing__calc-title\">Interactive ROI Calculator</div>\n          <div class=\"tpl-05-marketing__calc-sub\">Slide to simulate monthly growth potential</div>\n\n          <div class=\"tpl-05-marketing__slider-wrap\">\n            <div class=\"tpl-05-marketing__slider-label\">\n              <span>Target Monthly Ad Spend:</span>\n              <strong id=\"mkt-spend-val\" style=\"color:#2563eb;\">$25,000</strong>\n            </div>\n            <input type=\"range\" class=\"tpl-05-marketing__range\" id=\"mkt-spend-range\" min=\"5000\" max=\"100000\" step=\"5000\" value=\"25000\" aria-label=\"Ad Spend Slider\">\n          </div>\n\n          <div class=\"tpl-05-marketing__results\">\n            <div>\n              <div class=\"tpl-05-marketing__result-lbl\">Estimated Monthly Revenue</div>\n              <div class=\"tpl-05-marketing__result-num\" id=\"mkt-rev-val\">$106,250</div>\n            </div>\n            <div>\n              <div class=\"tpl-05-marketing__result-lbl\">Projected Performance</div>\n              <div class=\"tpl-05-marketing__result-num\" id=\"mkt-roas-val\" style=\"color:#10b981;\">4.25x ROAS</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 6,
    "slug": "template-06",
    "cssGroup": "01-10",
    "title": "Personal Portfolio",
    "category": "Portfolio & Personal",
    "categoryKey": "creative",
    "concept": "Principal Product Designer Portfolio",
    "desc": "Editorial Scandinavian-inspired portfolio hero with warm stone tones, high-res portrait card, active project availability badge, and direct resume CTA.",
    "tags": [
      "Scandinavian Warmth",
      "Editorial Typography",
      "Status Badge",
      "Personal Brand"
    ],
    "features": [
      "Live project availability status",
      "Skill pills",
      "Download CV action",
      "High-res portrait elevation"
    ],
    "html": "\n    <header class=\"tpl-06-personal\">\n      <div class=\"tpl-06-personal__container\">\n        <div class=\"tpl-06-personal__image-card\">\n          <img src=\"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80\" alt=\"Elena Rostova Portrait\" class=\"tpl-06-personal__photo\">\n          <div class=\"tpl-06-personal__status-card\">\n            <span class=\"tpl-06-personal__available-dot\"></span>\n            <span>Available for select Q3 projects & advising</span>\n          </div>\n        </div>\n\n        <div>\n          <div class=\"tpl-06-personal__lead\">Elena Rostova — Product & Systems Lead</div>\n          <h1 class=\"tpl-06-personal__title\">\n            Crafting serene, human-centered digital experiences for complex ecosystems.\n          </h1>\n          <p class=\"tpl-06-personal__bio\">\n            Previously Staff Designer at Stripe and Head of Design Systems at Linear. Currently consulting for early-stage founders to turn ambitious abstractions into intuitive software.\n          </p>\n\n          <div class=\"tpl-06-personal__tag-row\">\n            <span class=\"tpl-06-personal__tag\">Design Systems</span>\n            <span class=\"tpl-06-personal__tag\">Interaction Architecture</span>\n            <span class=\"tpl-06-personal__tag\">Spatial UI</span>\n            <span class=\"tpl-06-personal__tag\">Figma Tokens</span>\n          </div>\n\n          <div class=\"tpl-06-personal__actions\">\n            <a href=\"#contact\" class=\"tpl-06-personal__btn-dark\">Get in Touch</a>\n            <a href=\"#work\" style=\"font-size:14px;font-weight:600;text-decoration:underline;\">View Selected Works (2024-2026)</a>\n          </div>\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 7,
    "slug": "template-07",
    "cssGroup": "01-10",
    "title": "Developer Portfolio",
    "category": "Developer & Tech",
    "categoryKey": "saas",
    "concept": "Senior Distributed Systems Architect",
    "desc": "Terminal-inspired developer hero with language-switching code editor, clean syntax highlighting, status indicators, and GitHub-style styling.",
    "tags": [
      "IDE Terminal Mockup",
      "Interactive Code Tabs",
      "Dark Slate Theme",
      "Systems Engineering"
    ],
    "features": [
      "Go / YAML / Rust code tab switcher",
      "Health indicator badge",
      "Tech stack badges",
      "Fast terminal aesthetic"
    ],
    "html": "\n    <header class=\"tpl-07-developer\">\n      <div class=\"tpl-07-developer__container\">\n        <div>\n          <div class=\"tpl-07-developer__status-bar\">\n            <span>● 100% test coverage • 0 active incidents</span>\n          </div>\n\n          <h1 class=\"tpl-07-developer__title\">\n            Architecting <span>Resilient Systems</span> That Handle Billions of Events.\n          </h1>\n\n          <p class=\"tpl-07-developer__desc\">\n            Hi, I’m Alex Chen. Senior Infrastructure Architect specializing in lock-free concurrency, distributed consensus (Raft/Paxos), and multi-region Kubernetes topologies.\n          </p>\n\n          <div class=\"tpl-07-developer__tech-stack\">\n            <span class=\"tpl-07-developer__tech-pill\">Go</span>\n            <span class=\"tpl-07-developer__tech-pill\">Rust</span>\n            <span class=\"tpl-07-developer__tech-pill\">Kubernetes</span>\n            <span class=\"tpl-07-developer__tech-pill\">eBPF</span>\n            <span class=\"tpl-07-developer__tech-pill\">gRPC</span>\n            <span class=\"tpl-07-developer__tech-pill\">PostgreSQL</span>\n          </div>\n\n          <div class=\"tpl-07-developer__actions\">\n            <a href=\"#github\" class=\"tpl-07-developer__btn\">Inspect GitHub Repos</a>\n            <a href=\"#cv\" style=\"color:#58a6ff;font-size:14px;display:flex;align-items:center;gap:6px;\">Read Whitepapers →</a>\n          </div>\n        </div>\n\n        <div class=\"tpl-07-developer__ide\">\n          <div class=\"tpl-07-developer__ide-header\">\n            <div class=\"tpl-07-developer__ide-tabs\">\n              <span class=\"tpl-07-developer__ide-tab active\" data-lang=\"go\">server.go</span>\n              <span class=\"tpl-07-developer__ide-tab\" data-lang=\"yaml\">cluster.yaml</span>\n              <span class=\"tpl-07-developer__ide-tab\" data-lang=\"rust\">buffer.rs</span>\n            </div>\n            <span style=\"font-size:11px;color:#8b949e;\">UTF-8 • LF</span>\n          </div>\n\n          <pre class=\"tpl-07-developer__code-block\"><code><span class=\"tpl-07-developer__keyword\">package</span> main\n\n<span class=\"tpl-07-developer__keyword\">import</span> (\n\t<span class=\"tpl-07-developer__str\">\"fmt\"</span>\n\t<span class=\"tpl-07-developer__str\">\"net/http\"</span>\n)\n\n<span class=\"tpl-07-developer__keyword\">func</span> <span class=\"tpl-07-developer__fn\">Handler</span>(w http.ResponseWriter, r *http.Request) {\n\tfmt.<span class=\"tpl-07-developer__fn\">Fprintf</span>(w, <span class=\"tpl-07-developer__str\">\"Cluster status: healthy | Latency: 0.8ms\"</span>)\n}</code></pre>\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 8,
    "slug": "template-08",
    "cssGroup": "01-10",
    "title": "Business Consulting",
    "category": "Corporate & Business",
    "categoryKey": "business",
    "concept": "Global Executive Strategic Advisory",
    "desc": "Prestigious corporate consulting hero with navy & champagne gold accents, serif typography, and interactive strategic advisory pillars.",
    "tags": [
      "Executive Consulting",
      "Gold Accents",
      "Strategic Pillars",
      "Fortune 500"
    ],
    "features": [
      "Interactive strategic pillar cards",
      "Prestige typography",
      "Advisory booking drawer",
      "High credentialing metrics"
    ],
    "html": "\n    <header class=\"tpl-08-consulting\">\n      <div class=\"tpl-08-consulting__container\">\n        <span class=\"tpl-08-consulting__tag\">Vanguard Global Partners • Strategic Advisory</span>\n\n        <h1 class=\"tpl-08-consulting__headline\">\n          Steering Global Enterprises Through Seismic Market Transformation.\n        </h1>\n\n        <p class=\"tpl-08-consulting__lead\">\n          We counsel Fortune 100 boards, sovereign funds, and visionary leadership teams on cross-border M&A, enterprise AI integration, and capital reallocation.\n        </p>\n\n        <a href=\"#consultation\" style=\"display:inline-block;background:#d4af37;color:#0b1526;padding:16px 36px;border-radius:4px;font-weight:700;font-size:15px;\">Schedule Confidential Advisory</a>\n\n        <div class=\"tpl-08-consulting__pillars\">\n          <div class=\"tpl-08-consulting__pillar-card\">\n            <div class=\"tpl-08-consulting__pillar-num\">PILLAR I</div>\n            <h3 class=\"tpl-08-consulting__pillar-title\">Autonomous AI Strategy</h3>\n            <p class=\"tpl-08-consulting__pillar-desc\">Operationalizing machine intelligence across legacy enterprise architectures to capture margin efficiency.</p>\n          </div>\n\n          <div class=\"tpl-08-consulting__pillar-card\">\n            <div class=\"tpl-08-consulting__pillar-num\">PILLAR II</div>\n            <h3 class=\"tpl-08-consulting__pillar-title\">Cross-Border M&A</h3>\n            <p class=\"tpl-08-consulting__pillar-desc\">Structuring complex multi-jurisdictional acquisitions, carve-outs, and strategic post-merger integration.</p>\n          </div>\n\n          <div class=\"tpl-08-consulting__pillar-card\">\n            <div class=\"tpl-08-consulting__pillar-num\">PILLAR III</div>\n            <h3 class=\"tpl-08-consulting__pillar-title\">Capital Reallocation</h3>\n            <p class=\"tpl-08-consulting__pillar-desc\">Optimizing balance sheets, hedging volatility, and deploying institutional capital into high-yield frontiers.</p>\n          </div>\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 9,
    "slug": "template-09",
    "cssGroup": "01-10",
    "title": "Corporate Business",
    "category": "Corporate & Business",
    "categoryKey": "business",
    "concept": "Sustainable Infrastructure & Capital Holdings",
    "desc": "Authoritative corporate hero with pristine grid layout, high-impact glass architectural photography, and verified institutional impact counters.",
    "tags": [
      "Corporate Authority",
      "Impact Counters",
      "Architectural Visual",
      "Investor Relations"
    ],
    "features": [
      "Clean enterprise aesthetics",
      "ESG impact counters",
      "Annual report download CTA",
      "Crisp institutional grid"
    ],
    "html": "\n    <header class=\"tpl-09-corporate\">\n      <div class=\"tpl-09-corporate__container\">\n        <div>\n          <div class=\"tpl-09-corporate__label\">Aegis Capital & Infrastructure Holdings</div>\n          <h1 class=\"tpl-09-corporate__title\">\n            Building Resilient Global Infrastructure for Sustainable Decades.\n          </h1>\n          <p class=\"tpl-09-corporate__desc\">\n            We originate, finance, and operate essential utility grids, carbon-neutral logistics corridors, and high-efficiency renewable energy facilities worldwide.\n          </p>\n\n          <div class=\"tpl-09-corporate__actions\">\n            <a href=\"#investor\" class=\"tpl-09-corporate__btn\">Investor Relations Portal</a>\n            <a href=\"#report\" style=\"display:flex;align-items:center;gap:8px;font-weight:600;color:#0284c7;\">Download 2025 Impact Report ↓</a>\n          </div>\n\n          <div class=\"tpl-09-corporate__stats\">\n            <div>\n              <div class=\"tpl-09-corporate__stat-num\">$8.4B</div>\n              <div class=\"tpl-09-corporate__stat-lbl\">Assets Under Custody</div>\n            </div>\n            <div>\n              <div class=\"tpl-09-corporate__stat-num\">4.2 GW</div>\n              <div class=\"tpl-09-corporate__stat-lbl\">Clean Energy Generated</div>\n            </div>\n            <div>\n              <div class=\"tpl-09-corporate__stat-num\">28 Countries</div>\n              <div class=\"tpl-09-corporate__stat-lbl\">Operational Footprint</div>\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <img src=\"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80\" alt=\"Corporate Glass Architecture\" class=\"tpl-09-corporate__image\">\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 10,
    "slug": "template-10",
    "cssGroup": "01-10",
    "title": "E-commerce Product Showcase",
    "category": "E-commerce & Retail",
    "categoryKey": "lifestyle",
    "concept": "Spatial Audio Studio Headphones",
    "desc": "Sleek luxury hardware product showcase featuring an interactive color customizer swatch, 360 audio specifications, and direct cart trigger.",
    "tags": [
      "Product Showcase",
      "Color Customizer",
      "Hardware Tech",
      "Conversion Oriented"
    ],
    "features": [
      "Dynamic color customizer dots",
      "Color title switcher",
      "Visual filter shifts",
      "Verified reviews rating"
    ],
    "html": "\n    <header class=\"tpl-10-ecommerce\">\n      <div class=\"tpl-10-ecommerce__container\">\n        <div class=\"tpl-10-ecommerce__product-stage\">\n          <img src=\"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80\" alt=\"Aura Wireless Headphones\" class=\"tpl-10-ecommerce__img\">\n\n          <div class=\"tpl-10-ecommerce__color-picker\">\n            <span class=\"tpl-10-ecommerce__color-dot active\" data-color=\"Matte Obsidian\" style=\"background:#1d1d1f;\" title=\"Matte Obsidian\"></span>\n            <span class=\"tpl-10-ecommerce__color-dot\" data-color=\"Titanium Silver\" style=\"background:#d1d5db;\" title=\"Titanium Silver\"></span>\n            <span class=\"tpl-10-ecommerce__color-dot\" data-color=\"Rose Gold\" style=\"background:#e0a899;\" title=\"Rose Gold\"></span>\n          </div>\n        </div>\n\n        <div>\n          <span style=\"font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;color:#0071e3;\">Aura Series 4 Pro</span>\n          <h1 class=\"tpl-10-ecommerce__headline\">\n            Pure Spatial Acoustics. Zero Distraction.\n          </h1>\n\n          <div class=\"tpl-10-ecommerce__price\">\n            $399 <span style=\"font-size:15px;color:#6e6e73;font-weight:400;\">(Finish: <strong id=\"ecom-color-name\">Matte Obsidian</strong>)</span>\n          </div>\n\n          <p class=\"tpl-10-ecommerce__desc\">\n            Custom engineered 45mm neodymium drivers, 40-hour lossless playback, adaptive active noise cancellation, and calibrated memory-foam ergonomics.\n          </p>\n\n          <div style=\"display:flex;align-items:center;gap:20px;margin-bottom:32px;\">\n            <a href=\"#bag\" class=\"tpl-10-ecommerce__btn\">Add to Bag • $399</a>\n            <span style=\"font-size:13px;color:#10b981;font-weight:600;\">✓ In Stock — Ships Today</span>\n          </div>\n\n          <div style=\"font-size:12px;color:#6e6e73;display:flex;gap:24px;\">\n            <span>★ 4.9/5 from 3,200+ audiophiles</span>\n            <span>2-Year Global Warranty</span>\n            <span>Free 30-Day Returns</span>\n          </div>\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 11,
    "slug": "template-11",
    "cssGroup": "11-20",
    "title": "Fashion Brand",
    "category": "Fashion & Luxury",
    "categoryKey": "lifestyle",
    "concept": "Haute Couture Editorial Lookbook",
    "desc": "High-fashion editorial layout with serif typography, dual asymmetrical lookbook photography cards, and minimalist collection browsing CTA.",
    "tags": [
      "Editorial Fashion",
      "Couture Lookbook",
      "Serif Typography",
      "Asymmetric Composition"
    ],
    "features": [
      "Dual photo editorial collage",
      "Cormorant Garamond typography",
      "Season indicator",
      "Smooth arrow hover effect"
    ],
    "html": "\n    <header class=\"tpl-11-fashion\">\n      <div class=\"tpl-11-fashion__container\">\n        <div>\n          <span class=\"tpl-11-fashion__season\">Collection 08 • Autumn / Winter 2026</span>\n          <h1 class=\"tpl-11-fashion__title\">\n            Maison L’Ombre: <em>Sculptural Silhouettes</em> & Tactile Wool.\n          </h1>\n          <p class=\"tpl-11-fashion__desc\">\n            An exploration of raw volcanic textures, hand-spun alpaca fibers, and structured outerwear designed for the minimalist wanderer.\n          </p>\n          <a href=\"#collection\" class=\"tpl-11-fashion__cta\">\n            <span>Discover The Runway Lookbook</span>\n            <span>→</span>\n          </a>\n        </div>\n\n        <div class=\"tpl-11-fashion__gallery\">\n          <img src=\"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80\" alt=\"Haute Couture Coat Model\" class=\"tpl-11-fashion__img-primary\">\n          <img src=\"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80\" alt=\"Model Portrait Detail\" class=\"tpl-11-fashion__img-secondary\">\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 12,
    "slug": "template-12",
    "cssGroup": "11-20",
    "title": "Luxury Brand",
    "category": "Fashion & Luxury",
    "categoryKey": "lifestyle",
    "concept": "Haute Horlogerie Swiss Chronograph",
    "desc": "Ultra-luxury watchmaker hero in obsidian black and champagne gold foil styling with centered serif prestige headline and concierge booking trigger.",
    "tags": [
      "Swiss Horlogerie",
      "Gold Accents",
      "Obsidian Luxury",
      "Private Concierge"
    ],
    "features": [
      "Ambient gold radial glow",
      "Handcrafted typography",
      "Private concierge appointment CTA",
      "Exclusivity credentials"
    ],
    "html": "\n    <header class=\"tpl-12-luxury\">\n      <div class=\"tpl-12-luxury__radial\" aria-hidden=\"true\"></div>\n\n      <div class=\"tpl-12-luxury__container\">\n        <div class=\"tpl-12-luxury__pretitle\">Geneva Manufacture Horlogère • Est. 1888</div>\n        <h1 class=\"tpl-12-luxury__title\">The Perpetual Chronograph 1888</h1>\n        <p class=\"tpl-12-luxury__desc\">\n          Hand-finished in solid 18k rose gold with a celestial tourbillon movement. Limited to eight individually numbered timepieces worldwide.\n        </p>\n        <a href=\"#concierge\" class=\"tpl-12-luxury__btn\">Book Private Salon Viewing</a>\n      </div>\n    </header>\n    "
  },
  {
    "id": 13,
    "slug": "template-13",
    "cssGroup": "11-20",
    "title": "Real Estate",
    "category": "Real Estate & Properties",
    "categoryKey": "lifestyle",
    "concept": "Waterfront Penthouse Collection",
    "desc": "High-end architectural real estate hero with an embedded interactive property search bar, location picker, and luxury waterfront backdrop.",
    "tags": [
      "Waterfront Real Estate",
      "Search Bar Component",
      "High-End Architecture",
      "Lead Capture"
    ],
    "features": [
      "Location & price dropdown filter",
      "Full-bleed photography background",
      "Average ROI badge",
      "Instant property lookup button"
    ],
    "html": "\n    <header class=\"tpl-13-realestate\" style=\"background-image: url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80');\">\n      <div class=\"tpl-13-realestate__overlay\"></div>\n\n      <div class=\"tpl-13-realestate__container\">\n        <span class=\"tpl-13-realestate__badge\">Exclusive Waterfront Residences</span>\n        <h1 class=\"tpl-13-realestate__title\">Find Your Sanctum Above The Ocean Horizon</h1>\n\n        <form class=\"tpl-13-realestate__search-bar\" id=\"re-search-form\">\n          <div class=\"tpl-13-realestate__field\">\n            <label for=\"re-loc\">Location</label>\n            <select id=\"re-loc\">\n              <option>Biscayne Bay, Miami</option>\n              <option>Dubai Marina, UAE</option>\n              <option>Monaco Harbor</option>\n            </select>\n          </div>\n          <div class=\"tpl-13-realestate__field\">\n            <label for=\"re-type\">Property Type</label>\n            <select id=\"re-type\">\n              <option>Sky Penthouse (4-5 Bed)</option>\n              <option>Private Island Villa</option>\n              <option>Waterfront Duplex</option>\n            </select>\n          </div>\n          <div class=\"tpl-13-realestate__field\">\n            <label for=\"re-price\">Price Tier</label>\n            <select id=\"re-price\">\n              <option>$5M - $12M</option>\n              <option>$12M - $25M</option>\n              <option>$25M+</option>\n            </select>\n          </div>\n          <button type=\"submit\" class=\"tpl-13-realestate__search-btn\">Search Properties</button>\n        </form>\n      </div>\n    </header>\n    "
  },
  {
    "id": 14,
    "slug": "template-14",
    "cssGroup": "11-20",
    "title": "Architecture & Interior Design",
    "category": "Architecture & Design",
    "categoryKey": "lifestyle",
    "concept": "Spatial Geometry & Biophilic Architecture",
    "desc": "Minimalist Swiss architectural hero with interactive project tab selector, geometric coordinate badges, and Dezeen award credentials.",
    "tags": [
      "Architectural Brutalism",
      "Project Tab Switcher",
      "Biophilic Design",
      "Minimalist Grid"
    ],
    "features": [
      "Interactive architectural project tabs",
      "Dynamic project title/photo switcher",
      "Clean geometric lines",
      "Pritzker finalist laurels"
    ],
    "html": "\n    <header class=\"tpl-14-architecture\">\n      <div class=\"tpl-14-architecture__container\">\n        <div>\n          <div class=\"tpl-14-architecture__label\">Kroma Architecture Studio • 2026 Index</div>\n          <h1 class=\"tpl-14-architecture__title\">\n            Spatial Geometry Defined by Light and Natural Stone.\n          </h1>\n\n          <div class=\"tpl-14-architecture__tabs\">\n            <button type=\"button\" class=\"tpl-14-architecture__tab active\" data-proj=\"p1\">01. Pavilion X</button>\n            <button type=\"button\" class=\"tpl-14-architecture__tab\" data-proj=\"p2\">02. Villa Nordic</button>\n            <button type=\"button\" class=\"tpl-14-architecture__tab\" data-proj=\"p3\">03. Atrium Tower</button>\n          </div>\n\n          <p style=\"font-size:15px;color:#666;line-height:1.6;margin-bottom:24px;\">\n            Current Project: <strong id=\"arch-proj-title\" style=\"color:#111;\">Pavilion X - Zurich</strong>.<br>\n            A 1,400 sq. meter residence engineered with carbon-negative rammed earth and floor-to-ceiling glass pavilions.\n          </p>\n\n          <a href=\"#monograph\" style=\"font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;border-bottom:1px solid #111;padding-bottom:2px;\">Request Studio Monograph →</a>\n        </div>\n\n        <div class=\"tpl-14-architecture__img-wrap\">\n          <img src=\"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80\" alt=\"Architectural Modern Residence\" class=\"tpl-14-architecture__img\">\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 15,
    "slug": "template-15",
    "cssGroup": "11-20",
    "title": "Restaurant and Food",
    "category": "Food & Hospitality",
    "categoryKey": "lifestyle",
    "concept": "Artisanal Organic Gastronomy Bistro",
    "desc": "Sensory gastronomy hero with warm forest green & gold accents, Michelin star badge, and interactive table reservation booking form.",
    "tags": [
      "Gastronomy",
      "Table Reservation",
      "Michelin Star",
      "Warm Sensory Palette"
    ],
    "features": [
      "Working reservation widget with confirmation",
      "Michelin accolades",
      "Mouthwatering food photography",
      "Tasting menu preview"
    ],
    "html": "\n    <header class=\"tpl-15-restaurant\">\n      <div class=\"tpl-15-restaurant__container\">\n        <div>\n          <div class=\"tpl-15-restaurant__badge\">\n            <span>★ Two Michelin Stars 2026 • Botanica Bistro</span>\n          </div>\n\n          <h1 class=\"tpl-15-restaurant__title\">\n            Artful Gastronomy Inspired by Earth’s Seasonal Harvest.\n          </h1>\n\n          <p class=\"tpl-15-restaurant__desc\">\n            Chef Julien Moreau presents an intimate 9-course tasting menu exploring biodynamic heirloom botanicals, wild coastal catches, and vintage pairings.\n          </p>\n\n          <div class=\"tpl-15-restaurant__booking\">\n            <form id=\"rst-booking-form\">\n              <div class=\"tpl-15-restaurant__form-grid\">\n                <div class=\"tpl-15-restaurant__field\">\n                  <label for=\"rst-date\">Reservation Date</label>\n                  <input type=\"date\" id=\"rst-date\" value=\"2026-11-05\">\n                </div>\n                <div class=\"tpl-15-restaurant__field\">\n                  <label for=\"rst-guests\">Guests</label>\n                  <select id=\"rst-guests\">\n                    <option>2 Guests (Dining Room)</option>\n                    <option>4 Guests (Chef's Counter)</option>\n                    <option>6 Guests (Private Salon)</option>\n                  </select>\n                </div>\n              </div>\n              <button type=\"submit\" class=\"tpl-15-restaurant__btn\">Reserve a Table</button>\n            </form>\n          </div>\n        </div>\n\n        <div>\n          <img src=\"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80\" alt=\"Plated Gourmet Dish\" class=\"tpl-15-restaurant__img\">\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 16,
    "slug": "template-16",
    "cssGroup": "11-20",
    "title": "Travel and Tourism",
    "category": "Travel & Adventure",
    "categoryKey": "lifestyle",
    "concept": "Bespoke Remote Expeditions",
    "desc": "Cinematic wilderness travel hero with panoramic mountain backdrop, vibrant teal accents, destination planner, and video trailer trigger.",
    "tags": [
      "Adventure Travel",
      "Wilderness Expeditions",
      "Panoramic Banner",
      "Video Showreel"
    ],
    "features": [
      "Expedition selector",
      "Cinematic photography",
      "Direct inquiry CTA",
      "Weather and itinerary preview"
    ],
    "html": "\n    <header class=\"tpl-16-travel\" style=\"background-image: url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80');\">\n      <div class=\"tpl-16-travel__overlay\"></div>\n\n      <div class=\"tpl-16-travel__container\">\n        <span class=\"tpl-16-travel__tag\">Nomad Trails • Uncharted Expeditions</span>\n        <h1 class=\"tpl-16-travel__title\">Journey to the Edge of the Known World</h1>\n        <p class=\"tpl-16-travel__lead\">\n          Curated small-group journeys through Patagonia’s glacial fjords, the dramatic peaks of Norway, and high-altitude Himalayan trails.\n        </p>\n\n        <div class=\"tpl-16-travel__cta-row\">\n          <a href=\"#expeditions\" class=\"tpl-16-travel__btn\">Explore 2026 Itineraries</a>\n          <a href=\"#film\" style=\"border:1px solid rgba(255,255,255,0.4);color:#ffffff;padding:14px 28px;border-radius:999px;font-weight:600;font-size:15px;\">Watch Film (3:15)</a>\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 17,
    "slug": "template-17",
    "cssGroup": "11-20",
    "title": "Fitness and Gym",
    "category": "Health & Fitness",
    "categoryKey": "lifestyle",
    "concept": "High-Performance Athletic Club",
    "desc": "High-energy dark mode fitness hero with volt neon lime accents, italicized heavyweight typography, and instant 7-day free trial pass claim.",
    "tags": [
      "High Intensity Fitness",
      "Volt Neon Accents",
      "Bold Condensed Type",
      "Free Trial Pass"
    ],
    "features": [
      "High-contrast neon styling",
      "Instant day pass CTA",
      "Dynamic athlete imagery",
      "Class schedule highlights"
    ],
    "html": "\n    <header class=\"tpl-17-fitness\">\n      <div class=\"tpl-17-fitness__container\">\n        <div>\n          <div class=\"tpl-17-fitness__badge\">\n            <span>● IronCore Performance Club</span>\n          </div>\n\n          <h1 class=\"tpl-17-fitness__title\">\n            Forge Relentless <span>Power & Stamina</span>.\n          </h1>\n\n          <p class=\"tpl-17-fitness__desc\">\n            Olympic lifting platforms, hypoxic sprint labs, cold plunge hydrotherapy, and world-class strength coaching designed to push your physiological threshold.\n          </p>\n\n          <a href=\"#trial\" class=\"tpl-17-fitness__btn\">Claim 7-Day Free All-Access Pass</a>\n\n          <div style=\"margin-top:32px;display:flex;gap:24px;font-size:13px;font-weight:700;\">\n            <span>✓ 24/7 Biometric Access</span>\n            <span>✓ Unlimited Hydrotherapy</span>\n            <span>✓ Certified Coaches</span>\n          </div>\n        </div>\n\n        <div>\n          <img src=\"https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80\" alt=\"Athletic Training Session\" class=\"tpl-17-fitness__img\">\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 18,
    "slug": "template-18",
    "cssGroup": "11-20",
    "title": "Healthcare and Medical",
    "category": "Health & Medical",
    "categoryKey": "lifestyle",
    "concept": "Next-Gen Concierge Telehealth",
    "desc": "Trustworthy telehealth hero in calming clinical mint & emerald tones with active doctor indicator, symptom search, and HIPAA security guarantee.",
    "tags": [
      "Concierge Health",
      "Telehealth Online",
      "Doctor Availability",
      "HIPAA Certified"
    ],
    "features": [
      "Active doctor counter badge",
      "Instant consultation booking",
      "Clinical photography card",
      "HIPAA compliant security mark"
    ],
    "html": "\n    <header class=\"tpl-18-healthcare\">\n      <div class=\"tpl-18-healthcare__container\">\n        <div>\n          <div class=\"tpl-18-healthcare__status\">\n            <span>● 18 Board-Certified Physicians Online Now</span>\n          </div>\n\n          <h1 class=\"tpl-18-healthcare__title\">\n            Compassionate Primary Care, <span>Available Anytime</span>.\n          </h1>\n\n          <p class=\"tpl-18-healthcare__desc\">\n            Consult top specialists via video in under 15 minutes, access same-day prescription delivery, and monitor health metrics in one secure app.\n          </p>\n\n          <div style=\"display:flex;gap:16px;align-items:center;\">\n            <a href=\"#book\" class=\"tpl-18-healthcare__btn\">Start Immediate Consultation</a>\n            <span style=\"font-size:13px;color:#059669;font-weight:600;\">✓ $0 Copay with most insurance</span>\n          </div>\n        </div>\n\n        <div class=\"tpl-18-healthcare__card\">\n          <img src=\"https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80\" alt=\"Doctor with Patient Tablet\" class=\"tpl-18-healthcare__img\">\n          <div style=\"margin-top:16px;display:flex;justify-content:space-between;align-items:center;font-size:13px;font-weight:600;\">\n            <span>Novacare Telehealth Network</span>\n            <span style=\"color:#059669;\">HIPAA Compliant • 256-Bit Encrypted</span>\n          </div>\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 19,
    "slug": "template-19",
    "cssGroup": "11-20",
    "title": "Online Education",
    "category": "Education & Courses",
    "categoryKey": "saas",
    "concept": "SkillForge Academy & Masterclasses",
    "desc": "Collegiate modern learning hero with integrated course search input, accredited curriculum badges, and student enrollment counter.",
    "tags": [
      "Online Academy",
      "Course Search",
      "Accredited Mentors",
      "Student Proof"
    ],
    "features": [
      "Live course search input",
      "Skill suggestion pills",
      "Student enrollment badge",
      "High-impact headline"
    ],
    "html": "\n    <header class=\"tpl-19-education\">\n      <div class=\"tpl-19-education__container\">\n        <span class=\"tpl-19-education__badge\">SkillForge University • Accredited 2026</span>\n        <h1 class=\"tpl-19-education__title\">\n          Master High-Income Technical Skills from World-Class Practitioners.\n        </h1>\n        <p style=\"font-size:18px;color:#6b7280;max-width:680px;margin:0 auto;\">\n          Accelerated cohorts in AI Engineering, Distributed Cloud Architecture, and Product Strategy. Complete with real portfolio capstones.\n        </p>\n\n        <form class=\"tpl-19-education__search\" id=\"edu-search-form\">\n          <input type=\"text\" class=\"tpl-19-education__input\" placeholder=\"Search 450+ courses: 'Rust', 'LLM Tuning', 'System Design'...\" aria-label=\"Search courses\">\n          <button type=\"submit\" class=\"tpl-19-education__search-btn\">Find Courses</button>\n        </form>\n\n        <div style=\"font-size:13px;color:#6b7280;margin-top:24px;\">\n          ★ Rated 4.9/5 by 65,000+ engineers from Google, Amazon & Stripe\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 20,
    "slug": "template-20",
    "cssGroup": "11-20",
    "title": "Course and Coaching",
    "category": "Education & Courses",
    "categoryKey": "business",
    "concept": "Executive Founder Leadership Accelerator",
    "desc": "High-ticket coaching hero featuring a live ticking countdown timer to cohort enrollment closure, money-back guarantee, and syllabus CTA.",
    "tags": [
      "Executive Coaching",
      "Live Countdown Timer",
      "Cohort Scarcity",
      "High Ticket"
    ],
    "features": [
      "Live ticking countdown clock",
      "Syllabus download action",
      "Cohort seats remaining tracker",
      "Amber contrast accents"
    ],
    "html": "\n    <header class=\"tpl-20-coaching\">\n      <div class=\"tpl-20-coaching__container\">\n        <div>\n          <span class=\"tpl-20-coaching__badge\">Founder Mastery 8-Week Cohort</span>\n          <h1 class=\"tpl-20-coaching__title\">\n            The Executive Playbook for Scaling from $1M to $20M ARR.\n          </h1>\n          <p style=\"font-size:17px;color:#94a3b8;line-height:1.6;margin-bottom:32px;\">\n            Intensive private cohort for B2B tech CEOs. Master enterprise sales motions, operational delegation, and board governance.\n          </p>\n\n          <div style=\"display:flex;gap:16px;\">\n            <a href=\"#syllabus\" style=\"color:#f59e0b;font-weight:700;display:flex;align-items:center;gap:6px;\">Download Complete 8-Week Syllabus ↓</a>\n          </div>\n        </div>\n\n        <div class=\"tpl-20-coaching__timer-card\">\n          <strong style=\"font-size:14px;color:#f59e0b;text-transform:uppercase;letter-spacing:0.1em;\">Cohort Enrollment Closes In:</strong>\n\n          <div class=\"tpl-20-coaching__timer-grid\">\n            <div class=\"tpl-20-coaching__time-box\">\n              <div class=\"tpl-20-coaching__time-num\" id=\"cch-days\">14</div>\n              <div class=\"tpl-20-coaching__time-lbl\">Days</div>\n            </div>\n            <div class=\"tpl-20-coaching__time-box\">\n              <div class=\"tpl-20-coaching__time-num\" id=\"cch-hours\">08</div>\n              <div class=\"tpl-20-coaching__time-lbl\">Hours</div>\n            </div>\n            <div class=\"tpl-20-coaching__time-box\">\n              <div class=\"tpl-20-coaching__time-num\" id=\"cch-mins\">42</div>\n              <div class=\"tpl-20-coaching__time-lbl\">Mins</div>\n            </div>\n            <div class=\"tpl-20-coaching__time-box\">\n              <div class=\"tpl-20-coaching__time-num\" id=\"cch-secs\">19</div>\n              <div class=\"tpl-20-coaching__time-lbl\">Secs</div>\n            </div>\n          </div>\n\n          <div style=\"font-size:12px;color:#94a3b8;margin-bottom:16px;\">Only 4 seats remaining for Q3</div>\n          <button type=\"button\" class=\"tpl-20-coaching__btn\">Apply For Cohort Seat</button>\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 21,
    "slug": "template-21",
    "cssGroup": "21-30",
    "title": "Mobile App Promotion",
    "category": "Mobile & Apps",
    "categoryKey": "saas",
    "concept": "SpendFlow Smart Financial Assistant",
    "desc": "Smartphone mockup hero with floating glassmorphic push notifications, official App Store & Google Play badges, and QR scan preview.",
    "tags": [
      "Phone Mockup",
      "Floating Notifications",
      "App Store Badges",
      "Mobile App"
    ],
    "features": [
      "CSS-rendered smartphone mockup",
      "Floating transaction alert cards",
      "Store download buttons",
      "4.9 App Store rating"
    ],
    "html": "\n    <header class=\"tpl-21-mobileapp\">\n      <div class=\"tpl-21-mobileapp__container\">\n        <div>\n          <div class=\"tpl-21-mobileapp__badge\">★ App Store Award Winner 2026</div>\n          <h1 class=\"tpl-21-mobileapp__title\">Financial Clarity In The Palm of Your Hand</h1>\n          <p class=\"tpl-21-mobileapp__desc\">\n            Connect all bank accounts, automate high-yield savings, and gain autonomous insights that eliminate unnecessary recurring expenses.\n          </p>\n\n          <div class=\"tpl-21-mobileapp__stores\">\n            <a href=\"#appstore\" class=\"tpl-21-mobileapp__store-btn\">\n              <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.35-.58.66-.99 1.72-.88 2.74 1.01.08 2.05-.53 2.6-1.24z\"/></svg>\n              <div class=\"tpl-21-mobileapp__store-text\">\n                <small>Download on</small>\n                <strong>Apple App Store</strong>\n              </div>\n            </a>\n\n            <a href=\"#playstore\" class=\"tpl-21-mobileapp__store-btn\">\n              <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M3 20.5v-17c0-.83.67-1.5 1.5-1.5.38 0 .74.15 1.01.41l9.9 9.9-9.9 9.9c-.27.26-.63.41-1.01.41-.83 0-1.5-.67-1.5-1.22zm11.72-8.5l2.42-2.42-12.72-7.35 10.3 9.77zm0 0l-10.3 9.77 12.72-7.35-2.42-2.42z\"/></svg>\n              <div class=\"tpl-21-mobileapp__store-text\">\n                <small>Get it on</small>\n                <strong>Google Play</strong>\n              </div>\n            </a>\n          </div>\n\n          <div style=\"font-size:13px;color:#94a3b8;\">4.9 ★ Rating across 42,000+ reviews • Free forever tier available</div>\n        </div>\n\n        <div class=\"tpl-21-mobileapp__mockup-wrap\">\n          <div class=\"tpl-21-mobileapp__phone\">\n            <div class=\"tpl-21-mobileapp__phone-notch\"></div>\n            <div class=\"tpl-21-mobileapp__phone-screen\">\n              <div style=\"font-size:12px;color:#94a3b8;\">Total Net Liquidity</div>\n              <div style=\"font-size:24px;font-weight:800;color:#ffffff;margin-top:4px;\">$64,820.50</div>\n              <div style=\"height:100px;background:rgba(59,130,246,0.15);border-radius:12px;margin-top:16px;border:1px solid rgba(59,130,246,0.3);padding:10px;\">\n                <div style=\"font-size:11px;color:#93c5fd;\">Autonomous Yield Generator</div>\n                <div style=\"font-size:16px;font-weight:700;color:#ffffff;margin-top:4px;\">+ $284.12 Earned</div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"tpl-21-mobileapp__float-card tpl-21-mobileapp__float-card--left\">\n            <span>⚡ Salary Deposit: <strong>+$6,250</strong></span>\n          </div>\n\n          <div class=\"tpl-21-mobileapp__float-card tpl-21-mobileapp__float-card--right\">\n            <span>🛡️ Auto-Saved: <strong>$140.00</strong></span>\n          </div>\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 22,
    "slug": "template-22",
    "cssGroup": "21-30",
    "title": "Fintech and Financial Services",
    "category": "Finance & Fintech",
    "categoryKey": "business",
    "concept": "Multi-Currency Global Treasury",
    "desc": "Modern neo-bank hero with deep sapphire & emerald tones, real-time interactive currency converter calculator, and institutional compliance badges.",
    "tags": [
      "Neo-Bank",
      "Currency Converter",
      "Global Treasury",
      "SOC2 Compliant"
    ],
    "features": [
      "Working USD/EUR live exchange calculator",
      "Instant recalculation on typing",
      "Regulatory compliance marks",
      "Zero hidden fees claim"
    ],
    "html": "\n    <header class=\"tpl-22-fintech\">\n      <div class=\"tpl-22-fintech__container\">\n        <div>\n          <div class=\"tpl-22-fintech__pill\">● PayVortex Global Treasury 2.0</div>\n          <h1 class=\"tpl-22-fintech__title\">\n            Global Payments and FX Without The <span>Hidden Margins</span>.\n          </h1>\n          <p class=\"tpl-22-fintech__desc\">\n            Hold 40+ currencies, execute algorithmic FX hedging, and issue virtual corporate cards globally with zero international wire surcharges.\n          </p>\n\n          <div style=\"display:flex;gap:24px;font-size:13px;color:#94a3b8;\">\n            <span>✓ SOC2 Type II Certified</span>\n            <span>✓ FDIC Insured up to $2.5M</span>\n            <span>✓ Real-time SWIFT & SEPA</span>\n          </div>\n        </div>\n\n        <div class=\"tpl-22-fintech__calc-card\">\n          <div class=\"tpl-22-fintech__calc-header\">\n            <span>Live Currency Conversion</span>\n            <span style=\"color:#10b981;font-size:13px;\">Interbank Spot Rate</span>\n          </div>\n\n          <div class=\"tpl-22-fintech__currency-box\">\n            <div class=\"tpl-22-fintech__currency-label\">You Send</div>\n            <div class=\"tpl-22-fintech__currency-val\">\n              <input type=\"number\" id=\"fin-usd-input\" value=\"10000\" min=\"100\" step=\"100\" aria-label=\"USD amount\">\n              <span>USD</span>\n            </div>\n          </div>\n\n          <div style=\"text-align:center;font-size:12px;color:#94a3b8;margin:8px 0;\">↓ Guaranteed FX Rate: 1 USD = 0.92 EUR (0% Markup)</div>\n\n          <div class=\"tpl-22-fintech__currency-box\">\n            <div class=\"tpl-22-fintech__currency-label\">Recipient Receives</div>\n            <div class=\"tpl-22-fintech__currency-val\">\n              <strong id=\"fin-eur-output\">€9,200.00</strong>\n              <span>EUR</span>\n            </div>\n          </div>\n\n          <button type=\"button\" class=\"tpl-22-fintech__btn\">Open Business Treasury Account</button>\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 23,
    "slug": "template-23",
    "cssGroup": "21-30",
    "title": "Cybersecurity Product",
    "category": "Security & Enterprise",
    "categoryKey": "saas",
    "concept": "Autonomous Zero-Trust Threat Neutralization",
    "desc": "High-tech cyber defense dark interface with live simulated threats blocked counter, cyber-grid mesh, and live penetration audit CTA.",
    "tags": [
      "Cybersecurity",
      "Live Threat Counter",
      "Zero-Trust",
      "High Tech Dark"
    ],
    "features": [
      "Incrementing real-time threats blocked counter",
      "Cyan defense grid",
      "Instant breach audit trigger",
      "Zero-trust architecture details"
    ],
    "html": "\n    <header class=\"tpl-23-cybersecurity\">\n      <div class=\"tpl-23-cybersecurity__container\">\n        <div class=\"tpl-23-cybersecurity__alert\">\n          <span>🛡️ Threat Intelligence Feed: ACTIVE</span>\n        </div>\n\n        <h1 class=\"tpl-23-cybersecurity__title\">\n          Autonomous Zero-Trust Neutralization for Cloud Workloads.\n        </h1>\n\n        <p class=\"tpl-23-cybersecurity__lead\">\n          Continuous cryptographic identity verification, automated lateral movement isolation, and sub-second kernel-level exploit prevention.\n        </p>\n\n        <div class=\"tpl-23-cybersecurity__actions\">\n          <a href=\"#audit\" class=\"tpl-23-cybersecurity__btn\">Request Adversarial Attack Simulation</a>\n        </div>\n\n        <div class=\"tpl-23-cybersecurity__threat-bar\">\n          <div class=\"tpl-23-cybersecurity__threat-item\">\n            <strong id=\"sec-threat-counter\">2,847,190</strong>\n            <span>Threats Neutralized Today</span>\n          </div>\n          <div class=\"tpl-23-cybersecurity__threat-item\">\n            <strong>0.04 ms</strong>\n            <span>Kernel Micro-Isolation</span>\n          </div>\n          <div class=\"tpl-23-cybersecurity__threat-item\">\n            <strong>100%</strong>\n            <span>Zero-Day Exploit Mitigation</span>\n          </div>\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 24,
    "slug": "template-24",
    "cssGroup": "21-30",
    "title": "Photography Portfolio",
    "category": "Portfolio & Media",
    "categoryKey": "media",
    "concept": "Documentary & Editorial Photography",
    "desc": "Immersive full-bleed photography hero with camera EXIF technical metadata badge, clean minimal typography, and exhibition inquiry action.",
    "tags": [
      "Full Bleed Photo",
      "EXIF Camera Data",
      "Monochrome Minimal",
      "Gallery Inquiry"
    ],
    "features": [
      "Dynamic EXIF camera metadata bar",
      "Immersive full-screen background",
      "Gallery exhibition booking",
      "Minimalist aesthetics"
    ],
    "html": "\n    <header class=\"tpl-24-photography\" style=\"background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80');\">\n      <div class=\"tpl-24-photography__overlay\"></div>\n\n      <div class=\"tpl-24-photography__container\">\n        <div class=\"tpl-24-photography__exif\">\n          LEICA M11-P • 35MM SUMMICRON-M F/2 • 1/1000S • ISO 64 • ICELANDIC HIGHLANDS\n        </div>\n\n        <h1 class=\"tpl-24-photography__title\">\n          Silent Solitudes: Landscapes in Transition\n        </h1>\n\n        <div style=\"display:flex;gap:20px;align-items:center;\">\n          <a href=\"#exhibition\" class=\"tpl-24-photography__btn\">Exhibition Tickets (Berlin & Tokyo)</a>\n          <a href=\"#inquiry\" style=\"color:#ffffff;font-size:14px;text-decoration:underline;\">Print Catalog Inquiry →</a>\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 25,
    "slug": "template-25",
    "cssGroup": "21-30",
    "title": "Video Production Agency",
    "category": "Agency & Studio",
    "categoryKey": "media",
    "concept": "Cinematic Commercials & Film",
    "desc": "Widescreen cinematic letterbox hero with Cannes Lions festival laurels, dark atmospheric mood, and working showreel playback trigger.",
    "tags": [
      "Cinematic Letterbox",
      "Festival Laurels",
      "Showreel Trigger",
      "Commercial Cinema"
    ],
    "features": [
      "Cannes Lions & Tribeca laurels",
      "Interactive showreel play trigger",
      "Cinematic widescreen frame",
      "Film festival credentials"
    ],
    "html": "\n    <header class=\"tpl-25-videoproduction\" style=\"background-image: url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80');\">\n      <div class=\"tpl-25-videoproduction__overlay\"></div>\n\n      <div class=\"tpl-25-videoproduction__container\">\n        <div class=\"tpl-25-videoproduction__laurels\">\n          ★ Cannes Lions Grand Prix 2025 • Tribeca Selection • Vimeo Staff Pick of the Year\n        </div>\n\n        <h1 class=\"tpl-25-videoproduction__title\">\n          We Direct Cinematic Stories That Resonate Across Generations.\n        </h1>\n\n        <div class=\"tpl-25-videoproduction__play-wrap\" id=\"vid-play-trigger\">\n          <div class=\"tpl-25-videoproduction__play-icon\">\n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"#ffffff\"><polygon points=\"6 4 20 12 6 20 6 4\"/></svg>\n          </div>\n          <span style=\"font-size:14px;font-weight:700;color:#ffffff;text-transform:uppercase;letter-spacing:0.1em;\">Watch Agency Showreel (2:30)</span>\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 26,
    "slug": "template-26",
    "cssGroup": "21-30",
    "title": "Event and Conference",
    "category": "Events & Communities",
    "categoryKey": "media",
    "concept": "FutureSync Global Design & AI Summit",
    "desc": "Dynamic festival hero with live ticking event countdown timer, summit dates badge, keynote speakers highlight, and Early Bird pass registration.",
    "tags": [
      "Conference Summit",
      "Live Event Countdown",
      "Early Bird Pass",
      "Keynote Speakers"
    ],
    "features": [
      "Live ticking summit countdown",
      "San Francisco & Online dates badge",
      "Speaker credential badges",
      "Early bird discount lock"
    ],
    "html": "\n    <header class=\"tpl-26-event\">\n      <div class=\"tpl-26-event__container\">\n        <div>\n          <span class=\"tpl-26-event__date-badge\">November 12-14, 2026 • San Francisco & Global Stream</span>\n          <h1 class=\"tpl-26-event__title\">\n            The Frontier Summit on AI, Design Systems & Spatial Software.\n          </h1>\n          <p class=\"tpl-26-event__desc\">\n            Join 3,500+ design executives, research scientists, and founding engineers for 3 days of deep-dive keynotes, technical labs, and executive roundtables.\n          </p>\n\n          <a href=\"#register\" class=\"tpl-26-event__btn\">Register Early Bird Pass (Save 40%)</a>\n        </div>\n\n        <div class=\"tpl-26-event__countdown-card\">\n          <strong style=\"color:#ffffff;font-size:13px;text-transform:uppercase;letter-spacing:0.1em;\">Summit Commences In:</strong>\n\n          <div class=\"tpl-26-event__timer-grid\">\n            <div>\n              <div class=\"tpl-26-event__timer-val\" id=\"ev-days\">24</div>\n              <div class=\"tpl-26-event__timer-lbl\">Days</div>\n            </div>\n            <div>\n              <div class=\"tpl-26-event__timer-val\" id=\"ev-hours\">16</div>\n              <div class=\"tpl-26-event__timer-lbl\">Hours</div>\n            </div>\n            <div>\n              <div class=\"tpl-26-event__timer-val\" id=\"ev-mins\">30</div>\n              <div class=\"tpl-26-event__timer-lbl\">Mins</div>\n            </div>\n            <div>\n              <div class=\"tpl-26-event__timer-val\" id=\"ev-secs\">45</div>\n              <div class=\"tpl-26-event__timer-lbl\">Secs</div>\n            </div>\n          </div>\n\n          <div style=\"margin-top:20px;font-size:12px;color:#c4b5fd;\">Keynotes from Figma, OpenAI, Apple & MIT Media Lab</div>\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 27,
    "slug": "template-27",
    "cssGroup": "21-30",
    "title": "Newsletter and Lead Generation",
    "category": "Newsletter & Leads",
    "categoryKey": "media",
    "concept": "The Frontier Briefing",
    "desc": "High-conversion editorial lead magnet with 1-click email subscription validation, social proof counter (85,000+ readers), and clean minimalist styling.",
    "tags": [
      "Lead Magnet",
      "Newsletter Capture",
      "Instant Validation",
      "Social Proof"
    ],
    "features": [
      "Instant 1-click subscription confirmation",
      "Zero spam pledge",
      "Executive subscriber count",
      "Editorial clarity"
    ],
    "html": "\n    <header class=\"tpl-27-newsletter\">\n      <div class=\"tpl-27-newsletter__container\">\n        <div class=\"tpl-27-newsletter__eyebrow\">Weekly Executive Intelligence</div>\n        <h1 class=\"tpl-27-newsletter__title\">\n          The Frontier Brief: Deep Insights on AI, Systems & Venture.\n        </h1>\n        <p class=\"tpl-27-newsletter__lead\">\n          Every Thursday, we dissect technical papers, analyze foundational model benchmarks, and deliver actionable strategy directly to your inbox.\n        </p>\n\n        <form class=\"tpl-27-newsletter__form\">\n          <input type=\"email\" class=\"tpl-27-newsletter__input\" placeholder=\"Your work email...\" required aria-label=\"Work email for newsletter\">\n          <button type=\"submit\" class=\"tpl-27-newsletter__btn\">Subscribe</button>\n        </form>\n\n        <div class=\"tpl-27-newsletter__note\">\n          Join 85,000+ founders, research leads, and tech executives. No spam, unsubscribe anytime.\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 28,
    "slug": "template-28",
    "cssGroup": "21-30",
    "title": "Minimalist Editorial",
    "category": "Editorial & Publishing",
    "categoryKey": "media",
    "concept": "The Dialogue Review Journal",
    "desc": "Classic print-inspired digital journal with issue #42 banner, Cormorant Garamond serif headline, reading time indicator, and essay excerpt.",
    "tags": [
      "Print Inspired",
      "Journalism",
      "Cormorant Serif",
      "Reading Indicator"
    ],
    "features": [
      "Issue #42 publication header",
      "Reading time estimate (8 min read)",
      "Clean print typography",
      "Direct essay link"
    ],
    "html": "\n    <header class=\"tpl-28-editorial\">\n      <div class=\"tpl-28-editorial__container\">\n        <div class=\"tpl-28-editorial__issue-bar\">\n          <span>The Dialogue Review • Vol. XLII</span>\n          <span>Critical Essays on Philosophy & Technology</span>\n          <span>Autumn 2026</span>\n        </div>\n\n        <h1 class=\"tpl-28-editorial__headline\">\n          On The Fragility of Attention in an Era of Synthetic Consensus.\n        </h1>\n\n        <p class=\"tpl-28-editorial__excerpt\">\n          An investigation into how algorithmic homogenisation threatens aesthetic divergence, and why slow, tactile intellectual craftsmanship remains our most vital cultural bulwark.\n        </p>\n\n        <div style=\"display:flex;align-items:center;gap:24px;\">\n          <a href=\"#read\" class=\"tpl-28-editorial__read-link\">Read Full Essay (8 Min)</a>\n          <span style=\"font-size:13px;color:#57534e;\">By Dr. Julian Vance • Cambridge University</span>\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 29,
    "slug": "template-29",
    "cssGroup": "21-30",
    "title": "Dark Premium Creative Studio",
    "category": "Agency & Studio",
    "categoryKey": "creative",
    "concept": "VOID 3D Virtual Worlds & Creative Direction",
    "desc": "Pitch-black luxury creative studio hero with electric acid lime typography accents, oversized Syne styling, and magnetic project inquiry CTA.",
    "tags": [
      "Pitch Black Studio",
      "Acid Lime Accents",
      "Syne Typography",
      "3D Virtual Worlds"
    ],
    "features": [
      "Acid lime kinetic highlights",
      "Kinetic oversized typography",
      "Sub-grid structural dividers",
      "Scale-on-hover primary CTA"
    ],
    "html": "\n    <header class=\"tpl-29-darkstudio\">\n      <div class=\"tpl-29-darkstudio__container\">\n        <div class=\"tpl-29-darkstudio__sub\">● VOID LABS • TOKYO & REYKJAVIK</div>\n\n        <h1 class=\"tpl-29-darkstudio__title\">\n          We Build <span>Hyper-Tactile</span> Virtual Worlds.\n        </h1>\n\n        <div class=\"tpl-29-darkstudio__bottom\">\n          <p class=\"tpl-29-darkstudio__desc\">\n            Independent creative studio pioneering spatial direction, real-time procedural aesthetics, and high-fashion digital experiences for forward-thinking brands.\n          </p>\n\n          <a href=\"#start\" class=\"tpl-29-darkstudio__cta\">Start A Project →</a>\n        </div>\n      </div>\n    </header>\n    "
  },
  {
    "id": 30,
    "slug": "template-30",
    "cssGroup": "21-30",
    "title": "Interactive Next-Generation Hero",
    "category": "Interactive & Web3",
    "categoryKey": "ai",
    "concept": "Synthetix Spatial OS",
    "desc": "Cutting-edge next-generation hero with interactive canvas mode switcher (Spatial View, Neural Canvas, Collaborative Hub), and cyan grid matrix.",
    "tags": [
      "Next-Gen Spatial OS",
      "Mode Switcher Tabs",
      "Interactive Canvas",
      "Futuristic UI"
    ],
    "features": [
      "Working 3-mode canvas switcher",
      "Dynamic stage text and description updates",
      "Cyan gradient headline",
      "Pulsing coordinate matrix"
    ],
    "html": "\n    <header class=\"tpl-30-nextgen\">\n      <div class=\"tpl-30-nextgen__container\">\n        <div class=\"tpl-30-nextgen__badge\">\n          <span>● Synthetix OS v4.0 Spatial Computing</span>\n        </div>\n\n        <h1 class=\"tpl-30-nextgen__title\">\n          Next-Generation Workspaces for <span class=\"tpl-30-nextgen__title-grad\">Multi-Agent Cognition</span>.\n        </h1>\n\n        <div class=\"tpl-30-nextgen__tabs\">\n          <button type=\"button\" class=\"tpl-30-nextgen__tab active\" data-mode=\"spatial\">Spatial View</button>\n          <button type=\"button\" class=\"tpl-30-nextgen__tab\" data-mode=\"neural\">Neural Canvas</button>\n          <button type=\"button\" class=\"tpl-30-nextgen__tab\" data-mode=\"collab\">Collaborative Hub</button>\n        </div>\n\n        <div class=\"tpl-30-nextgen__canvas-stage\">\n          <div class=\"tpl-30-nextgen__canvas-grid\"></div>\n          <div class=\"tpl-30-nextgen__canvas-info\">\n            <h3 id=\"nxt-mode-title\">Spatial Computing Canvas</h3>\n            <p id=\"nxt-mode-desc\">Real-time multi-dimensional workspace with 3D coordinate mapping.</p>\n            <div style=\"margin-top:16px;display:inline-flex;gap:12px;font-size:12px;color:#22d3ee;font-family:monospace;\">\n              <span>FPS: 120</span> • <span>Nodes: 2,400</span> • <span>Sync: 2.1ms</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n    "
  }
];
