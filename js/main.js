// scrollreveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  .section .banner, .card, #produtos, footer,
  .footer-info, .novidades, .social
`,
  { interval: 100 }
)

//mostrar botao de voltar para o topo
const btnBackToTop = document.querySelector('.back-to-top')
const header = document.querySelector('#header')

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }

  if (window.scrollY > 800) {
    btnBackToTop.classList.add('active')
  } else {
    btnBackToTop.classList.remove('active')
  }
})
