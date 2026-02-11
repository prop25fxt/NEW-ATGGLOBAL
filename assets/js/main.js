(function(){
  const b=document.querySelector('[data-mobile-toggle]');
  const n=document.querySelector('[data-navlinks]');
  const a=document.querySelector('[data-actions]');
  if(b&&n){
    b.addEventListener('click',()=>{
      n.classList.toggle('open');
      if(a) a.classList.toggle('open');
      b.setAttribute('aria-expanded', n.classList.contains('open')?'true':'false');
    });
  }

  // Homepage hero slideshow (only runs if elements exist)
  const imgEl = document.getElementById('heroSlideImg');
  const capEl = document.getElementById('heroSlideCaption');
  if(imgEl && capEl){
    const slides = [
      {
        img: 'assets/img/cat-agri.webp',
        title: 'Agribusiness',
        text: 'Day‑old chicks & hatching • Cooking oil supply • Butcher services • Turkey farming'
      },
      {
        img: 'assets/img/solar-1.webp',
        title: 'Solar Energy Solutions',
        text: 'Energy solutions for homes and businesses • Supply • Installation • Support'
      },
      {
        img: 'assets/img/cleaning-1.webp',
        title: 'Cleaning Services',
        text: 'Residential & commercial cleaning • Deep cleaning • Scheduled maintenance'
      },
      {
        img: 'assets/img/logistics-1.webp',
        title: 'Cargo, Logistics & Flight Ticketing',
        text: 'Cargo movement & coordination • Logistics support • Fast flight booking'
      }
    ];

    let i = 0;
    const render = () => {
      const s = slides[i];
      imgEl.src = s.img;
      capEl.innerHTML = '<strong>' + s.title + '</strong><span>' + s.text + '</span>';
      i = (i + 1) % slides.length;
    };

    // Start immediately, then rotate
    render();
    setInterval(render, 4500);
  }
})();