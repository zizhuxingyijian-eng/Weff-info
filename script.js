// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// Countdown to 1 Aug 2026 13:00 JST (UTC+9)
const EVENT_DATE = new Date('2026-08-01T13:00:00+09:00');

function pad(n) { return String(n).padStart(2, '0'); }

function updateCountdown() {
  const now = new Date();
  const diff = EVENT_DATE - now;

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML =
      '<div class="countdown-unit"><div class="countdown-num" style="font-size:1.1rem;color:#fff">Event is today!</div></div>';
    return;
  }

  const days  = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins  = Math.floor((diff % 3600000)  / 60000);
  const secs  = Math.floor((diff % 60000)    / 1000);

  document.getElementById('cd-days').textContent  = pad(days);
  document.getElementById('cd-hours').textContent = pad(hours);
  document.getElementById('cd-mins').textContent  = pad(mins);
  document.getElementById('cd-secs').textContent  = pad(secs);
}

updateCountdown();
setInterval(updateCountdown, 1000);
