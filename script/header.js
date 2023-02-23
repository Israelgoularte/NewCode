window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 100) {
      nav.style.backgroundColor = 'var(--headerBackGroud_color)'; /* mudança de cor de fundo quando a barra de rolagem passar de 100 pixels */
    } else {
      nav.style.backgroundColor = 'var(--headerBackGroud_transparent)'; /* retorna para a cor de fundo padrão quando a barra de rolagem volta a ser menor que 100 pixels */
    }
  });
  function redirecionarPagina() {
    const select = document.getElementById("projeto");
    var selectedOption = select.options[select.selectedIndex].value;
    if (selectedOption !== "") {
      window.location.href = selectedOption;
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const select = document.getElementById("projeto");
    select.addEventListener('change', redirecionarPagina);
  });
  
  $(document).ready(function() {
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true
    });
  });