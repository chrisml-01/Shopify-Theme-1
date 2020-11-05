// Put your applicaiton javascript here
var bottomNavbar = document.getElementById("bottom-nav");
var sticky = bottomNavbar.offsetTop;

console.log(bottomNavbar);
console.log(sticky);


function stickyHeader (){
    if (window.pageYOffset >= sticky) {
        bottomNavbar.classList.add("sticky");
    } else {
        bottomNavbar.classList.remove("sticky");
    }
}

window.onscroll = function(){stickyHeader()};

var btnMore = document.getElementById("btn-navMore");

var mainMenuList = $('.mobile-nav .mainmenu-list');

mainMenuList.each(function(i){
    var btn = $(this).find(".main-link");
    var btnMore = btn.find(".btnMore"); 

    btnMore.on("click", function(){
        var childMenuList = $(this).parent().parent().find(".childmenu-list");
        if (childMenuList.css("display") === "none"){
            childMenuList.css("display", "block");
        } else {
            childMenuList.css("display", "none");
        }
    })

});

$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),   
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
   
    }
    );

    $('.single-item').slick({
      arrows: false,
      dots: true,
      autoplay:true,
      autoplaySpeed: 2000
    });

    $('.slideshow').slick({
        arrows: false,
        dots: true,
        // autoplay:true,
        // autoplaySpeed: 2000
      });

