/**
 * Hero Section Block - Premium Templates Interactive Behaviors
 * Pure Vanilla JavaScript - Zero external dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  initTemplateInteractions();
});

function initTemplateInteractions() {
  // --------------------------------------------------------------------------
  // Template 01: Modern SaaS (Tabs & Trial Form)
  // --------------------------------------------------------------------------
  const tpl01 = document.querySelector('.tpl-01-saas');
  if (tpl01) {
    const tabs = tpl01.querySelectorAll('.tpl-01-saas__tab-btn');
    const statVal1 = tpl01.querySelector('#saas-stat-1');
    const statVal2 = tpl01.querySelector('#saas-stat-2');
    const statVal3 = tpl01.querySelector('#saas-stat-3');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const mode = tab.dataset.mode;
        if (mode === 'revenue') {
          if (statVal1) statVal1.textContent = '$142.8k';
          if (statVal2) statVal2.textContent = '3.8x';
          if (statVal3) statVal3.textContent = '99.4%';
        } else {
          if (statVal1) statVal1.textContent = '1.24s';
          if (statVal2) statVal2.textContent = '99.99%';
          if (statVal3) statVal3.textContent = '48.2M';
        }
      });
    });

    const form = tpl01.querySelector('.tpl-01-saas__form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.tpl-01-saas__btn-primary');
        const input = form.querySelector('.tpl-01-saas__input');
        if (input && input.value) {
          const originalText = btn.innerHTML;
          btn.innerHTML = '<span>✓ Access Granted</span>';
          btn.style.background = '#10b981';
          setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            input.value = '';
          }, 3000);
        }
      });
    }
  }

  // --------------------------------------------------------------------------
  // Template 02: AI Product (Prompt Generator & Chips)
  // --------------------------------------------------------------------------
  const tpl02 = document.querySelector('.tpl-02-ai');
  if (tpl02) {
    const input = tpl02.querySelector('.tpl-02-ai__input');
    const chips = tpl02.querySelectorAll('.tpl-02-ai__chip');
    const output = tpl02.querySelector('.tpl-02-ai__output-preview');
    const generateBtn = tpl02.querySelector('.tpl-02-ai__generate-btn');

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        if (input) {
          input.value = chip.dataset.prompt || chip.textContent;
          triggerSimulatedAI(input.value);
        }
      });
    });

    if (generateBtn) {
      generateBtn.addEventListener('click', () => {
        if (input && input.value.trim()) {
          triggerSimulatedAI(input.value);
        }
      });
    }

    function triggerSimulatedAI(promptText) {
      if (!output) return;
      output.classList.add('show');
      output.innerHTML = '<em>⚡ Neural Engine processing... (185 tokens/sec)</em>';
      setTimeout(() => {
        output.innerHTML = `<strong>AI Synthesis:</strong> Analysis complete for <em>"${promptText}"</em>. Generated 4 high-dimensional vectors with 99.8% semantic confidence. Ready for pipeline integration.`;
      }, 700);
    }
  }

  // --------------------------------------------------------------------------
  // Template 05: Digital Marketing (ROI Calculator Slider)
  // --------------------------------------------------------------------------
  const tpl05 = document.querySelector('.tpl-05-marketing');
  if (tpl05) {
    const slider = tpl05.querySelector('#mkt-spend-range');
    const spendDisplay = tpl05.querySelector('#mkt-spend-val');
    const revenueDisplay = tpl05.querySelector('#mkt-rev-val');
    const roasDisplay = tpl05.querySelector('#mkt-roas-val');

    if (slider) {
      slider.addEventListener('input', () => {
        const val = parseInt(slider.value, 10);
        if (spendDisplay) spendDisplay.textContent = '$' + val.toLocaleString();
        const estRevenue = Math.round(val * 4.25);
        if (revenueDisplay) revenueDisplay.textContent = '$' + estRevenue.toLocaleString();
        if (roasDisplay) roasDisplay.textContent = '4.25x ROAS';
      });
    }
  }

  // --------------------------------------------------------------------------
  // Template 07: Developer IDE Tabs & Runner
  // --------------------------------------------------------------------------
  const tpl07 = document.querySelector('.tpl-07-developer');
  if (tpl07) {
    const tabs = tpl07.querySelectorAll('.tpl-07-developer__ide-tab');
    const codeContainer = tpl07.querySelector('.tpl-07-developer__code-block');

    const snippets = {
      go: `<span class="tpl-07-developer__keyword">package</span> main\n\n<span class="tpl-07-developer__keyword">import</span> (<n\t"fmt"\n\t"net/http"\n)\n\n<span class="tpl-07-developer__keyword">func</span> <span class="tpl-07-developer__fn">Handler</span>(w http.ResponseWriter, r *http.Request) {\n\tfmt.<span class="tpl-07-developer__fn">Fprintf</span>(w, <span class="tpl-07-developer__str">"Cluster status: healthy | Latency: 0.8ms"</span>)\n}`,
      yaml: `<span class="tpl-07-developer__comment"># Distributed Service Mesh</span>\n<span class="tpl-07-developer__keyword">apiVersion</span>: apps/v1\n<span class="tpl-07-developer__keyword">kind</span>: Deployment\n<span class="tpl-07-developer__keyword">metadata</span>:\n  <span class="tpl-07-developer__str">name</span>: core-gateway\n<span class="tpl-07-developer__keyword">spec</span>:\n  <span class="tpl-07-developer__str">replicas</span>: 12\n  <span class="tpl-07-developer__str">strategy</span>: RollingUpdate`,
      rust: `<span class="tpl-07-developer__comment">// High-throughput lock-free ring buffer</span>\n<span class="tpl-07-developer__keyword">pub struct</span> <span class="tpl-07-developer__fn">RingBuffer</span>&lt;T&gt; {\n    buffer: Vec&lt;AtomicPtr&lt;T&gt;&gt;,\n    capacity: usize,\n}\n\n<span class="tpl-07-developer__keyword">impl</span>&lt;T&gt; <span class="tpl-07-developer__fn">RingBuffer</span>&lt;T&gt; {\n    <span class="tpl-07-developer__keyword">pub fn</span> <span class="tpl-07-developer__fn">new</span>(cap: usize) -&gt; Self { ... }\n}`
    };

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const lang = tab.dataset.lang;
        if (codeContainer && snippets[lang]) {
          codeContainer.innerHTML = snippets[lang];
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // Template 10: E-commerce Headphone Color Switcher
  // --------------------------------------------------------------------------
  const tpl10 = document.querySelector('.tpl-10-ecommerce');
  if (tpl10) {
    const dots = tpl10.querySelectorAll('.tpl-10-ecommerce__color-dot');
    const colorTitle = tpl10.querySelector('#ecom-color-name');
    const img = tpl10.querySelector('.tpl-10-ecommerce__img');

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        const color = dot.dataset.color;
        if (colorTitle) colorTitle.textContent = color;
        if (img) {
          if (color === 'Titanium Silver') {
            img.style.filter = 'brightness(1.2) contrast(1.05)';
          } else if (color === 'Rose Gold') {
            img.style.filter = 'sepia(0.3) hue-rotate(320deg) saturate(1.4)';
          } else {
            img.style.filter = 'none';
          }
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // Template 14: Architecture Tabs
  // --------------------------------------------------------------------------
  const tpl14 = document.querySelector('.tpl-14-architecture');
  if (tpl14) {
    const tabs = tpl14.querySelectorAll('.tpl-14-architecture__tab');
    const title = tpl14.querySelector('#arch-proj-title');
    const img = tpl14.querySelector('.tpl-14-architecture__img');

    const archProjects = {
      p1: { name: 'Pavilion X - Zurich', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80' },
      p2: { name: 'Villa Nordic - Oslo', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80' },
      p3: { name: 'Atrium Tower - Tokyo', img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80' }
    };

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const id = tab.dataset.proj;
        if (archProjects[id]) {
          if (title) title.textContent = archProjects[id].name;
          if (img) img.src = archProjects[id].img;
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // Template 15: Restaurant Booking Submission
  // --------------------------------------------------------------------------
  const tpl15 = document.querySelector('.tpl-15-restaurant');
  if (tpl15) {
    const form = tpl15.querySelector('#rst-booking-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.tpl-15-restaurant__btn');
        btn.textContent = '✓ Table Confirmed!';
        btn.style.background = '#4ade80';
        setTimeout(() => {
          btn.textContent = 'Reserve a Table';
          btn.style.background = '';
        }, 3000);
      });
    }
  }

  // --------------------------------------------------------------------------
  // Template 20 & 26: Live Countdown Timers
  // --------------------------------------------------------------------------
  initCountdowns();

  // --------------------------------------------------------------------------
  // Template 22: Fintech Currency Converter
  // --------------------------------------------------------------------------
  const tpl22 = document.querySelector('.tpl-22-fintech');
  if (tpl22) {
    const usdInput = tpl22.querySelector('#fin-usd-input');
    const eurOutput = tpl22.querySelector('#fin-eur-output');
    if (usdInput && eurOutput) {
      usdInput.addEventListener('input', () => {
        const val = parseFloat(usdInput.value) || 0;
        const converted = (val * 0.92).toFixed(2);
        eurOutput.textContent = '€' + parseFloat(converted).toLocaleString();
      });
    }
  }

  // --------------------------------------------------------------------------
  // Template 23: Cybersecurity Threat Live Counter
  // --------------------------------------------------------------------------
  const tpl23 = document.querySelector('.tpl-23-cybersecurity');
  if (tpl23) {
    const counterEl = tpl23.querySelector('#sec-threat-counter');
    if (counterEl) {
      let count = 2847190;
      setInterval(() => {
        count += Math.floor(Math.random() * 5) + 1;
        counterEl.textContent = count.toLocaleString();
      }, 2000);
    }
  }

  // --------------------------------------------------------------------------
  // Template 27: Newsletter Instant Form Feedback
  // --------------------------------------------------------------------------
  const tpl27 = document.querySelector('.tpl-27-newsletter');
  if (tpl27) {
    const form = tpl27.querySelector('.tpl-27-newsletter__form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('.tpl-27-newsletter__input');
        const btn = form.querySelector('.tpl-27-newsletter__btn');
        if (input && input.value) {
          btn.textContent = '✓ Subscribed!';
          btn.style.background = '#10b981';
          setTimeout(() => {
            btn.textContent = 'Subscribe';
            btn.style.background = '';
            input.value = '';
          }, 3000);
        }
      });
    }
  }

  // --------------------------------------------------------------------------
  // Template 30: NextGen Spatial Mode Switcher
  // --------------------------------------------------------------------------
  const tpl30 = document.querySelector('.tpl-30-nextgen');
  if (tpl30) {
    const tabs = tpl30.querySelectorAll('.tpl-30-nextgen__tab');
    const title = tpl30.querySelector('#nxt-mode-title');
    const desc = tpl30.querySelector('#nxt-mode-desc');

    const modes = {
      spatial: { title: 'Spatial Computing Canvas', desc: 'Real-time multi-dimensional workspace with 3D coordinate mapping.' },
      neural: { title: 'Neural Thought Canvas', desc: 'Autonomous thought-chain synthesis and graph-level cognitive maps.' },
      collab: { title: 'Collaborative Global Hub', desc: 'Sub-5ms peer-to-peer sync across distributed spatial environments.' }
    };

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const mode = tab.dataset.mode;
        if (modes[mode]) {
          if (title) title.textContent = modes[mode].title;
          if (desc) desc.textContent = modes[mode].desc;
        }
      });
    });
  }
}

function initCountdowns() {
  // Target date: 14 days from now
  const targetDate = new Date().getTime() + (14 * 24 * 60 * 60 * 1000);

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) return;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update Template 20
    const d20 = document.getElementById('cch-days');
    const h20 = document.getElementById('cch-hours');
    const m20 = document.getElementById('cch-mins');
    const s20 = document.getElementById('cch-secs');
    if (d20) d20.textContent = String(days).padStart(2, '0');
    if (h20) h20.textContent = String(hours).padStart(2, '0');
    if (m20) m20.textContent = String(minutes).padStart(2, '0');
    if (s20) s20.textContent = String(seconds).padStart(2, '0');

    // Update Template 26
    const d26 = document.getElementById('ev-days');
    const h26 = document.getElementById('ev-hours');
    const m26 = document.getElementById('ev-mins');
    const s26 = document.getElementById('ev-secs');
    if (d26) d26.textContent = String(days).padStart(2, '0');
    if (h26) h26.textContent = String(hours).padStart(2, '0');
    if (m26) m26.textContent = String(minutes).padStart(2, '0');
    if (s26) s26.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}
