/**
 * Hero Section Block - Premium Template Library Showcase
 * Gallery Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initGalleryApp();
});

function initGalleryApp() {
  const grid = document.getElementById('gallery-grid');
  const searchInput = document.getElementById('search-input');
  const categoryButtons = document.querySelectorAll('.gal-cat-btn');
  const countBadge = document.getElementById('template-count');

  // Modal elements
  const modal = document.getElementById('preview-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalTag = document.getElementById('modal-tag');
  const modalFrameContainer = document.getElementById('frame-container');
  const modalIframe = document.getElementById('modal-iframe');
  const modalClose = document.getElementById('modal-close');
  const deviceButtons = document.querySelectorAll('.gal-device-btn');
  const openExternalBtn = document.getElementById('modal-open-external');
  const copyCodeBtn = document.getElementById('modal-copy-code');

  // Code modal elements
  const codeModal = document.getElementById('code-modal');
  const codeModalClose = document.getElementById('code-modal-close');
  const codeContent = document.getElementById('code-content');
  const codeCopyAction = document.getElementById('code-copy-action');

  let currentCategory = 'all';
  let currentSearch = '';
  let activeTemplate = null;

  // Render initial cards
  renderGallery();

  // Category filter handlers
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderGallery();
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      renderGallery();
    });
  }

  function renderGallery() {
    if (!grid || typeof HERO_TEMPLATES === 'undefined') return;

    const filtered = HERO_TEMPLATES.filter(tpl => {
      const matchesCategory = (currentCategory === 'all') || (tpl.categoryKey === currentCategory);
      const matchesSearch = !currentSearch ||
        tpl.title.toLowerCase().includes(currentSearch) ||
        tpl.category.toLowerCase().includes(currentSearch) ||
        tpl.concept.toLowerCase().includes(currentSearch) ||
        tpl.tags.some(t => t.toLowerCase().includes(currentSearch));

      return matchesCategory && matchesSearch;
    });

    if (countBadge) {
      countBadge.textContent = `${filtered.length} of ${HERO_TEMPLATES.length} templates`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #94a3b8;">
          <h3 style="font-size: 20px; color: #ffffff; margin-bottom: 8px;">No templates found</h3>
          <p>Try searching for a different keyword or select another category filter.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(tpl => `
      <article class="gal-card" data-id="${tpl.id}">
        <div class="gal-card__preview" onclick="openPreviewModal(${tpl.id})">
          <div class="gal-card__iframe-wrap">
            <iframe class="gal-card__iframe" src="templates/${tpl.slug}.html" loading="lazy" tabindex="-1" title="${tpl.title} preview"></iframe>
          </div>
          <div class="gal-card__preview-overlay">
            <span class="gal-card__preview-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              <span>Interactive Preview</span>
            </span>
          </div>
        </div>

        <div class="gal-card__body">
          <div class="gal-card__meta">
            <span class="gal-card__cat-pill">${tpl.category}</span>
            <span class="gal-card__num">#${String(tpl.id).padStart(2, '0')}</span>
          </div>

          <h2 class="gal-card__title">${tpl.title}</h2>
          <div class="gal-card__concept">${tpl.concept}</div>
          <p class="gal-card__desc">${tpl.desc}</p>

          <div class="gal-card__tags">
            ${tpl.tags.map(t => `<span class="gal-card__tag">${t}</span>`).join('')}
          </div>

          <div class="gal-card__footer">
            <button type="button" class="gal-card__btn-view" onclick="openPreviewModal(${tpl.id})">
              <span>Preview Demo</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button type="button" class="gal-card__btn-action" title="Inspect Clean HTML" onclick="openCodeModal(${tpl.id})">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              <span>Code</span>
            </button>
            <a href="templates/${tpl.slug}.html" target="_blank" class="gal-card__btn-action" title="Open Standalone Page">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
            </a>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Preview Modal functions
  window.openPreviewModal = function(id) {
    const tpl = HERO_TEMPLATES.find(t => t.id === id);
    if (!tpl || !modal) return;
    activeTemplate = tpl;

    modalTitle.textContent = `${String(tpl.id).padStart(2, '0')}. ${tpl.title}`;
    modalTag.textContent = tpl.category;
    modalIframe.src = `templates/${tpl.slug}.html`;

    if (openExternalBtn) {
      openExternalBtn.href = `templates/${tpl.slug}.html`;
    }

    // Default to Desktop
    setDevice('desktop');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modalIframe.src = 'about:blank';
    document.body.style.overflow = '';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  // Device switcher
  function setDevice(device) {
    deviceButtons.forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector(`.gal-device-btn[data-device="${device}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    if (modalFrameContainer) {
      modalFrameContainer.className = `gal-modal__frame-container ${device}`;
    }
  }

  deviceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setDevice(btn.dataset.device);
    });
  });

  // Code Modal functions
  window.openCodeModal = function(id) {
    const tpl = HERO_TEMPLATES.find(t => t.id === id);
    if (!tpl || !codeModal) return;
    activeTemplate = tpl;

    const formattedCode = tpl.html.trim();
    codeContent.textContent = formattedCode;
    codeModal.classList.add('active');
  };

  function closeCodeModal() {
    if (!codeModal) return;
    codeModal.classList.remove('active');
  }

  if (codeModalClose) {
    codeModalClose.addEventListener('click', closeCodeModal);
  }

  if (codeCopyAction) {
    codeCopyAction.addEventListener('click', () => {
      if (!activeTemplate) return;
      navigator.clipboard.writeText(activeTemplate.html.trim()).then(() => {
        const origText = codeCopyAction.innerHTML;
        codeCopyAction.innerHTML = '<span>✓ Copied to Clipboard</span>';
        codeCopyAction.style.background = '#10b981';
        setTimeout(() => {
          codeCopyAction.innerHTML = origText;
          codeCopyAction.style.background = '';
        }, 2000);
      });
    });
  }

  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', () => {
      if (!activeTemplate) return;
      openCodeModal(activeTemplate.id);
    });
  }

  // Close modals on Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (codeModal && codeModal.classList.contains('active')) {
        closeCodeModal();
      } else if (modal && modal.classList.contains('active')) {
        closeModal();
      }
    }
  });
}
