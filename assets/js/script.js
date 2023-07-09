$('document').ready(function() {
  $('.header-mobile span').on('click', function() {
    $('.header-menu-mobile').toggleClass('flex not-transparent');
  });

  let imgCounter = 3;
  let width = 262;
  let counter = 0;
  $('#product-previous').on('click', function() {
    if (imgCounter > 1) {
      counter++;
      imgCounter--;
      $('#product-previous').removeClass('cursor-not-allowed');
      $('#product-next').removeClass('cursor-not-allowed');
      $('.products-img-container').removeClass('active');
      $(`[img-number=${imgCounter}]`).addClass('active');

      $('.products-img-wrapper-container').css(`transform`, `translateX(${width * counter}px)`);
    }

    if (imgCounter == 1) {
      $('#product-previous').addClass('cursor-not-allowed');
    }
  });

  $('#product-next').on('click', function() {
    if (imgCounter < 5) {
      counter--;
      imgCounter++;
      $('#product-next').removeClass('cursor-not-allowed');
      $('#product-previous').removeClass('cursor-not-allowed');
      $('.products-img-container').removeClass('active');
      $('.products-img-container').removeClass('active');
      $(`[img-number=${imgCounter}]`).addClass('active');

      $('.products-img-wrapper-container').css(`transform`, `translateX(${width * counter}px)`);
    }

    if (imgCounter == 5) {
      $('#product-next').addClass('cursor-not-allowed');
    }
  });
});
