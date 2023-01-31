(function() { 
    // on cible l'objet nav
    let objNav = document.querySelector("nav");
    // on mémorise la position de nav
    let memoPositionNav = objNav.offsetTop;
    function sticky(){
      // position du curseur au scroll
      var posCurseur = this.pageYOffset;
      // je teste la différence de distance entre le scroll et nav
      if(memoPositionNav-posCurseur<1){
        objNav.style.position = "fixed";
        objNav.style.top = 0;
        objNav.style.width = "75rem";
      }
      if(posCurseur<100){
        objNav.style.position = "relative";
        objNav.style.width = "100%"
      }
    }
    // evenement
    window.addEventListener("scroll", sticky);
  })()

  // ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});