// ── Active nav link based on current page ──
(function () {
  const links = document.querySelectorAll('.navbar-nav .nav-link');
  const current = location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

// ── Booking form feedback ──
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!bookingForm.checkValidity()) {
      bookingForm.classList.add('was-validated');
      return;
    }
    const btn = bookingForm.querySelector('button[type="submit"]');
    btn.textContent = 'Booking confirmed!';
    btn.disabled = true;
    btn.classList.replace('btn-primary', 'btn-success');
    bookingForm.insertAdjacentHTML('afterend',
      '<div class="alert alert-success mt-3">Thank you! We will be in touch within 24 hours.</div>');
    bookingForm.reset();
    bookingForm.classList.remove('was-validated');
  });
}

// ── Contact form feedback ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.classList.add('was-validated');
      return;
    }
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Sent!';
    btn.disabled = true;
    btn.classList.replace('btn-primary', 'btn-success');
    contactForm.insertAdjacentHTML('afterend',
      '<div class="alert alert-success mt-3">Message received. We\'ll reply soon!</div>');
    contactForm.reset();
    contactForm.classList.remove('was-validated');
  });
}

// ── Gallery lightbox (simple) ──
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const label = item.querySelector('.gallery-overlay span')?.textContent || '';
    const modal = document.createElement('div');
    modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.88);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;cursor:zoom-out;padding:20px';
    modal.innerHTML = `<img src="${img.src}" style="max-width:90vw;max-height:80vh;border-radius:8px;object-fit:contain">
      <p style="color:#fff;margin-top:14px;font-size:1.1rem">${label}</p>`;
    modal.addEventListener('click', () => modal.remove());
    document.body.appendChild(modal);
  });
});
