document.querySelector('.burger-menu_lines').addEventListener('click', function(){
  document.querySelector('.br-line').classList.toggle('open');
})

 function toggleMenu(){
    nav_burger-menu.toggleClass('burger-menu_open');
    
    if (nav_burger-menu.hasClass('burger-menu_open')) {
      $('nav-list_burger-menu').css('display', 'none');
    } else {
      $('nav-list_burger-menu').css('display', 'flex');
    }
  }

burgerMenu('.nav_burger-menu');