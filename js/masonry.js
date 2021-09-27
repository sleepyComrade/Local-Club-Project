// Masonry

window.onload = () => {
    const elem = document.querySelector('.grid');
    const iso = new Isotope( elem, {
    
     
      // options
    itemSelector: '.card',
    layoutMode: 'masonry',
    masonry: {
      fitWidth: true,
      gutter: 15
    }
  });
}

