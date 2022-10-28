function hamBurgerAnimate(x) {
    x.classList.toggle("change");
    $("#sideNav").toggle(300);
  }

$(document).ready(function(){
     $("#sideNavClose").click(function(){
        $("#sideNav").hide(300);
        setTimeout(function() {
            $(".hamBurger").removeClass("change");
        }, 300);
    });
});

$(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    nav:true,
    navText: ["<i class='bi bi-chevron-left'></i>","<i class='bi bi-chevron-right'></i>"],
    responsive:{
        0:{
            items:1,
            
        },
        576:{
            items:1,
            nav: false
           
        },
        768:{
            items:3
        },
        992:{
            items:4
        }
        
    }
})
