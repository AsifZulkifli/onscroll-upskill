$(document).ready(function() {
  new WOW().init();
  AOS.init();
});

// use a script tag or an external JS file
  document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
    
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });


    let keikku = gsap.timeline({
      scrollTrigger: {
        trigger: '.keikku',
        start: '-50% top',
        end: '+=3600',
        scrub: true,
        pin: true,
        markers: false
      }
    });
    keikku.fromTo(".keikku", { opacity: 1 }, { opacity: 1, duration: 2.5 })
      .to(".keikku", { opacity: 0, duration: 0.5 }); 


    let hand = gsap.timeline({
      scrollTrigger: {
        trigger: '.hand',
        start: '-30% top',
        end: '+=850',
        scrub: true,
        pin: true,
        markers: true
      }
    });
    hand.fromTo(".hand", { opacity: 0 }, { opacity: 1, duration: 2.5 })
      .to(".hand", { opacity: 1, duration: 1 }); 

    const video = document.getElementById("meetvid")

    gsap.timeline({
      scrollTrigger: {
        trigger: '.meetvid',
        start: "top top",
        end: "+=2000",
        pin: true,
        onEnter: () => {
          const vid = $('.meetvid')[0];
          const source = $(vid).find('source');

          source.attr('src', './assets/vid/circles-start.mp4');
          vid.load();
          vid.loop = false;
          vid.play();

          $(vid).off('ended');

          $(vid).on('ended', function () {
            source.attr('src', './assets/vid/circles-v2.mp4');
            vid.load();
            vid.loop = true;
            vid.play();
          });

          vid.classList.remove("opacity-0");
          vid.classList.add("opacity-100");
        },
        onLeave: () => {
          video.classList.remove("opacity-100");
          video.classList.add("opacity-0");
        },
        onEnterBack: () => {
          const vid = $('.meetvid')[0];
          const source = $(vid).find('source');

          source.attr('src', './assets/vid/circles-start.mp4');
          vid.loop = false;
          vid.load();

          // Reset time to ensure 'ended' event can fire again
          vid.currentTime = 0;
          vid.play();

          // Remove previous ended listeners to prevent stacking
          $(vid).off('ended');

          $(vid).on('ended', function () {
            source.attr('src', './assets/vid/circles-v2.mp4');
            vid.load();
            vid.loop = true;
            vid.play();
          });

          vid.classList.remove("opacity-0");
          vid.classList.add("opacity-100");
        },
        onLeaveBack: () => {
          video.classList.remove("opacity-100");
          video.classList.add("opacity-0");
        },
        markers: false
      }
    });

    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".card",
          start: "-120% center",  
          end: "250% center",   
          scrub: true,  
          markers: false 
        }
      }
    );  

    tl.fromTo(".card", { opacity: 0 }, { opacity: 1, duration: 1 })
      .to(".card", { opacity: 0, duration: 1 });  

    let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".card2",
          start: "-120% center",  
          end: "250% center",   
          scrub: true,  
          markers: false 
        }
      }
    );  

    tl2.fromTo(".card2", { opacity: 0 }, { opacity: 1, duration: 1 })
      .to(".card2", { opacity: 0, duration: 1 }); 

    let tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".card3",
          start: "-120% center",  
          end: "250% center",   
          scrub: true,  
          markers: false 
        }
      }
    );  

    tl3.fromTo(".card3", { opacity: 0 }, { opacity: 1, duration: 1 })
      .to(".card3", { opacity: 0, duration: 1 }); 

    let tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".card4",
          start: "-120% center",  
          end: "250% center",   
          scrub: true,  
          markers: false 
        }
      }
    );  

    tl4.fromTo(".card4", { opacity: 0 }, { opacity: 1, duration: 1 })
      .to(".card4", { opacity: 0, duration: 1 }); 

});

