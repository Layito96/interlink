(function() {
  
  "use strict";  

      //===== Preloader

      // window.onload = function () {
      //   window.setTimeout(fadeout, 500);
      // }

      // function fadeout() {
      //   document.querySelector('#preloader').style.opacity = '0';
      //   document.querySelector('#preloader').style.display = 'none';
      // }



      /*=====================================
      Sticky
      ======================================= */
      window.onscroll = function () {
        var header_navbar = document.querySelector(".navigation");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
          header_navbar.classList.add("sticky");
        } else {
          header_navbar.classList.remove("sticky");
        }



        // show or hide the back-top-top button
        var backToTop = document.querySelector(".back-to-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          backToTop.style.display = "flex";
        } else {
          backToTop.style.display = "none";
        }
      };

      // Get the navbar


      // for menu scroll 
      var pageLink = document.querySelectorAll('.page-scroll');

      pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
          e.preventDefault();
          document.querySelector(elem.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            offsetTop: 1 - 60,
          });
        });
      });

      // section menu active
      function onScroll(event) {
        var sections = document.querySelectorAll('.page-scroll');
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        for (var i = 0; i < sections.length; i++) {
          var currLink = sections[i];
          var val = currLink.getAttribute('href');
          var refElement = document.querySelector(val);
          var scrollTopMinus = scrollPos + 73;
          if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
            document.querySelector('.page-scroll').classList.remove('active');
            currLink.classList.add('active');
          } else {
            currLink.classList.remove('active');
          }
        }
      };

      window.document.addEventListener('scroll', onScroll);


      //===== close navbar-collapse when a  clicked
      let navbarToggler = document.querySelector(".navbar-toggler");
      var navbarCollapse = document.querySelector(".navbar-collapse");

      document.querySelectorAll(".page-scroll").forEach(e =>

        e.addEventListener("click", () => {
          navbarToggler.classList.remove("active");
          navbarCollapse.classList.remove('show')
        })
      );
      navbarToggler.addEventListener('click', function () {
        console.log("Navbar toggler")
        navbarToggler.classList.toggle("active");
        navbarCollapse.classList.toggle('show');
        // navbarCollapse
        console.log(navbarCollapse);
        
      })


    //======== tiny slider for testimonial
    tns({
      container: '.testimonials',
      items: 1,
      slideBy: 'page',
      autoplay: false,
      mouseDrag: true,
      gutter: 0,
      nav: false,
      controls: false,
    });

    //======== tiny slider for portfolio
    tns({
      container: '.portfolio-carousel',
      items: 3,
      slideBy: 'page',
      autoplay: false,
      mouseDrag: true,
      gutter: 30,
      nav: true,
      navPosition: 'bottom',
      controls: false,
      responsive: {
        0: {
          items: 1,
        },
        765: {
          items: 2,
        },
        1024: {
          items: 3,
        }
      }
    });

      //WOW Scroll Spy
      var wow = new WOW({
        //disabled for mobile
        // mobile: false
        offset: 0,
      mobile: true,
      live: true,
      resetAnimation: true 
      });
      wow.init();
      let lastScrollTop = 0;

      function reinitializeWow() {
        // Select all elements with class 'wow'

        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // User is scrolling down
            console.log('Scrolled down');
            // Your code here, e.g., reinitialize Wow.js

            var wowElements = document.querySelectorAll('.wow');
    
        wowElements.forEach(function(element) {
            if (element.classList.contains('animated')) {
                // Remove 'animated' class and inline styles
                element.classList.remove('animated');
                element.removeAttribute('style');
    
                // Reinitialize WOW.js
                // Check if WOW.js is already initialized to avoid multiple instances
                if (typeof window.WOW !== 'undefined') {
                    new WOW().init();
                }
            }
        });
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

        
    }
      // Add scroll event listener
      // window.addEventListener('scroll', reinitializeWow);

})();