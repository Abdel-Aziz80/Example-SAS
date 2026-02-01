// Année auto (footer)
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mail pré-rempli (page contact + index si tu l'as)
const prefill = document.getElementById("prefillMail");
if (prefill) {
  prefill.addEventListener("click", (e) => {
    e.preventDefault();

    const to = "contact@example.com"; // ✅ remplace par ton email
    const subject = encodeURIComponent("Demande de contact - Example SAS");
    const body = encodeURIComponent(
`Bonjour John Doe,

Je souhaite te contacter pour :
- Type de besoin : (site vitrine / landing page / refonte)
- Délai :
- Budget estimé :
- Détails :

Merci !`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}

// Menu hamburger (mobile)
document.querySelectorAll('.nav').forEach((nav) => {
  const toggle = nav.querySelector('.nav__toggle');
  const links = nav.querySelector('.nav__links');
  if (!toggle || !links) return;

  const closeMenu = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close when clicking a link
  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', closeMenu);
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.classList.contains('is-open')) return;
    if (nav.contains(e.target)) return;
    closeMenu();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
});