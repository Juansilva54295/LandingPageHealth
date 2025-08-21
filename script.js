// Função simples para rolar até a seção desejada
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Animação de contagem dos resultados
const counters = document.querySelectorAll('.counter');
let started = false;

function animateCounters() {
  if (started) return;
  const section = document.getElementById('resultados');
  const sectionTop = section.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100) {
    started = true;
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const increment = target / 100;

      const updateCount = () => {
        if (count < target) {
          count += increment;
          counter.innerText = Math.floor(count);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }
}

window.addEventListener('scroll', animateCounters);
