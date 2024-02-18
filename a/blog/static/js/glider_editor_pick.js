new Glider(document.querySelector('.glider'), {
  // Mobile-first defaults
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: '#resp-dots',
  arrows: {
    prev: '.glider-prev-edit',
    next: '.glider-next-edit'
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 'auto',
        slidesToScroll: 'auto',
        itemWidth: 150,
        duration: 0.25
      }
    }, {
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
});