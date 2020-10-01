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