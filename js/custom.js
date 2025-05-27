$(document).ready(function() {
  new WOW().init();
  AOS.init();
});

// use a script tag or an external JS file
  document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
    
    // ScrollSmoother.create({
    //   smooth: 1,
    //   effects: true,
    // });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.keikku',
        start: '-50% top',
        end: '+=2000',
        pin: true,
        markers: true
      }
    });

    const video = document.getElementById("meetvid")

    gsap.timeline({
      scrollTrigger: {
        trigger: '.meetvid',
        start: "top top",
        end: "+=1000",
        pin: true,
        pinSpacing: true,
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

    
  });

