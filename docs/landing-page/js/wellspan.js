$(document).ready(function(){

   // back to top smooth scrolling


   function scrollTop(width) {
      if (width <= 753) {
          $('a[href^="#"]').on('click',function (e) {
       	   e.preventDefault();

       	   var target = this.hash;
       	   var $target = $(target);

       	   $('html, body').stop().animate({
       		   'scrollTop': -30 + $target.offset().top
       	   }, 900, 'swing', function () {
       	   });
          });
      } else {
          $('a[href^="#"]').on('click',function (e) {
       	   e.preventDefault();

       	   var target = this.hash;
       	   var $target = $(target);

       	   $('html, body').stop().animate({
       		   'scrollTop': -156 + $target.offset().top
       	   }, 900, 'swing', function () {
       	   });
          });
      }
  }
   scrollTop($(window).width());
   $(window).on('resize', function() {
       scrollTop($(this).width());
   });

   // parallax scrolling background
   $('.hero').parallax("0%", -.3);

    // move sidebar on small screens
    function moveSidebar(width) {
       if (width <= 685) {
           $(".story-top .sidebar").insertBefore("footer");
       } else {
           $(".sidebar").insertAfter(".story-top .content");
       }
   }
    moveSidebar($(window).width());
    $(window).on('resize', function() {
        moveSidebar($(this).width());
    });

    // hide the mobile header
    function hideMobileHeader(width){
        if ( width <= 753) {
            // Hide Header on on scroll down
            var didScroll;
            var lastScrollTop = 0;
            var delta = 5;
            var navbarHeight = $('header').outerHeight();

            $(window).scroll(function(event){
                didScroll = true;
            });

            setInterval(function() {
                if (didScroll) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 250);

            function hasScrolled() {
                var st = $(this).scrollTop();

                // Make sure they scroll more than delta
                if(Math.abs(lastScrollTop - st) <= delta)
                    return;

                // If they scrolled down and are past the navbar, add class .nav-up.
                // This is necessary so you never see what is "behind" the navbar.
                if (st > lastScrollTop && st > navbarHeight){
                    // Scroll Down
                    $('header').removeClass('nav-down').addClass('nav-up');
                } else {
                    // Scroll Up
                    if(st + $(window).height() < $(document).height()) {
                        $('header').removeClass('nav-up').addClass('nav-down');
                    }
                }

                lastScrollTop = st;
            }
        }
        else {

        }
    }
    hideMobileHeader( $(window).width() );
        $(window).on('resize', function(){
            hideMobileHeader( $(this).width() );
    });

    // social sharing
    $('.share-fb').click(function(e) {
        e.preventDefault();
        var contentPath = window.location;
        shareURL = 'https://www.facebook.com/sharer/sharer.php?m2w&s=100&p[url]='+contentPath;
        window.open(shareURL, '_blank', 'height=350,width=550');
    });
    $('.share-tw').click(function(e) {
        e.preventDefault();
        var contentPath = window.location;
        shareURL = 'http://twitter.com/share?url='+contentPath;
        window.open(shareURL, '_blank', 'height=350,width=550');
    });
    $('.share-li').click(function(e) {
        e.preventDefault();
        var contentPath = window.location;
        shareURL = 'https://www.linkedin.com/shareArticle?mini=true&url='+contentPath;
        window.open(shareURL, '_blank', 'height=350,width=550');
    });

});
