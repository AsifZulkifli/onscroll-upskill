window.onload = function () {
  document.body.classList.remove('loading');
};

$(document).ready(function() {
  new WOW().init();
  AOS.init();
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  slidesPerView: 1.1,
  spaceBetween: -220, // 👈 try -80 to -120 depending on how much overlap you want
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const wave = new window.rive.Rive({
  src: './assets/vid/waves1.riv',
  canvas: document.getElementById("wave"),
  autoplay: true,
  onLoad: () => {
    const anim = wave.animationNames[0];

    const canvas = document.getElementById("wave");

    canvas.addEventListener("mouseenter", () => {
      wave.play(anim);
    });
  }
});
const wave2 = new window.rive.Rive({
  src: './assets/vid/waves2.riv',
  canvas: document.getElementById("wave2"),
  autoplay: true,
  onLoad: () => {
    const anim = wave2.animationNames[0];

    const canvas = document.getElementById("wave2");

    canvas.addEventListener("mouseenter", () => {
      wave2.play(anim);
    });
  }
});
const wave3 = new window.rive.Rive({
  src: './assets/vid/waves3.riv',
  canvas: document.getElementById("wave3"),
  autoplay: true,
  onLoad: () => {
    const anim = wave3.animationNames[0];

    const canvas = document.getElementById("wave3");

    canvas.addEventListener("mouseenter", () => {
      wave3.play(anim);
    });
  }
});
const wave4 = new window.rive.Rive({
  src: './assets/vid/waves4.riv',
  canvas: document.getElementById("wave4"),
  autoplay: true,
  onLoad: () => {
    const anim = wave4.animationNames[0];

    const canvas = document.getElementById("wave4");

    canvas.addEventListener("mouseenter", () => {
      wave4.play(anim);
    });
  }
});
const wave5 = new window.rive.Rive({
  src: './assets/vid/waves5.riv',
  canvas: document.getElementById("wave5"),
  autoplay: true,
  onLoad: () => {
    const anim = wave5.animationNames[0];

    const canvas = document.getElementById("wave5");

    canvas.addEventListener("mouseenter", () => {
      wave5.play(anim);
    });
  }
});
const wave6 = new window.rive.Rive({
  src: './assets/vid/waves6.riv',
  canvas: document.getElementById("wave6"),
  autoplay: true,
  onLoad: () => {
    const anim = wave6.animationNames[0];

    const canvas = document.getElementById("wave6");

    canvas.addEventListener("mouseenter", () => {
      wave6.play(anim);
    });
  }
});

const battery = new window.rive.Rive({
  src: './assets/vid/battery-holds.riv',
  canvas: document.getElementById("battery"),
  autoplay: true,
});

const mapPin = new window.rive.Rive({
  src: './assets/vid/map-pin.riv',
  canvas: document.getElementById("map-pin"),
  autoplay: true,
});

const soundWave = new window.rive.Rive({
  src: './assets/vid/sound-wave.riv',
  canvas: document.getElementById("sound-wave"),
  autoplay: true,
});

$(document).ready(function () {
    $('.change-img').on('click', function () {
      const newSrc = $(this).data('src');
      $('#hand-img').attr('src', newSrc);
    });
  });

  gsap.defaults({
    overwrite: 'auto',
    roundProps: 'y' // rounds to whole pixels
  });

$(document).ready(function () {
  const buttons = $(".change-img");
  let currentIndex = 0;
  let interval = null;
  const duration = 8000; // 4 seconds
  const $img = $("#img1");

  function startProgress(index) {
    const $button = buttons.eq(index);
    const $bar = $button.find(".progress-bar");

    // Reset all progress bars
    $(".progress-bar").css("width", "0");

    // Animate the current progress bar
    $bar.animate({ width: "100%" }, duration, "linear", function () {
      // After animation complete, go to next
      currentIndex = (index + 1) % buttons.length;
      triggerButton(currentIndex);
    });
  }

  function triggerButton(index) {
    const $btn = buttons.eq(index);
    const newSrc = $btn.data("src");
    $img.attr("src", newSrc);
    currentIndex = index;
    startProgress(index);
  }

  // Manual click override
  buttons.on("click", function () {
    const index = $(this).index();
    $(".progress-bar").stop(true); // stop any current animation
    triggerButton(index);
  });

  // Start first automatically
  triggerButton(0);
});  

// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
    
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
    });
    gsap.config({
      force3D: true
    });

    gsap.to(".beat", {
      letterSpacing: "-0.05em",
      duration: 1,         
      repeat: -1,   
      yoyo: true,  
      ease: "power1.inOut" 
    });

    let hand = gsap.timeline({
      scrollTrigger: {
        trigger: '.hand',
        start: '-30% top',
        end: '+=830',
        scrub: true,
        pinSpacing: false,
        pin: true,
        markers: false
      }
    });
    hand.fromTo(".hand", { opacity: 0 }, { opacity: 1, duration: 2.5 })
      .to(".hand", { opacity: 1, duration: 4 }); 

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

    
// Step-by-step timeline animation
  const tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: "#card-crop",
      start: "top 75%", // adjust scroll position trigger here
      toggleActions: "play none none none", // only play once
    }
  });

  // Step 1: expand height
  tl5.to("#card-crop", {
    opacity: 1,
    height: "380px",
    duration: 0.8,
    ease: "power2.out"
  });

  // Step 2: show image and text
  tl5.to("#crop-img", {
    opacity: 1,
    display: "block",
    duration: 0.4,
    ease: "power2.out"
  },); // slight delay after height grows

  tl5.to("#crop-text", {
    opacity: 1,
    display: "block",
    duration: 0.4,
    ease: "power2.out"
  },); // start slightly before image ends

  // Step-by-step timeline animation
  const tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: "#card-crop2",
      start: "top 75%", // adjust scroll position trigger here
      toggleActions: "play none none none", // only play once
    }
  });

  // Step 1: expand height
  tl6.to("#card-crop2", {
    opacity: 1,
    height: "380px",
    duration: 0.8,
    ease: "power2.out"
  }, "+=0.1");

  // Step 2: show image and text
  tl6.to("#crop-img2", {
    opacity: 1,
    display: "block",
    duration: 0.4,
    ease: "power2.out"
  },); // slight delay after height grows

  tl6.to("#crop-text2", {
    opacity: 1,
    display: "block",
    duration: 0.4,
    ease: "power2.out"
  },); // start slightly before image ends

  // Step-by-step timeline animation
  const tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: "#card-crop3",
      start: "top 75%", // adjust scroll position trigger here
      toggleActions: "play none none none", // only play once
    }
  });

  // Step 1: expand height
  tl7.to("#card-crop3", {
    opacity: 1,
    height: "380px",
    duration: 0.8,
    ease: "power2.out"
  }, "+=0.2");

  // Step 2: show image and text
  tl7.to("#crop-img3", {
    opacity: 1,
    display: "block",
    duration: 0.4,
    ease: "power2.out"
  },); // slight delay after height grows

  tl7.to("#crop-text3", {
    opacity: 1,
    display: "block",
    duration: 0.4,
    ease: "power2.out"
  },); // start slightly before image ends

  // Step-by-step timeline animation
  const tl8 = gsap.timeline({
    scrollTrigger: {
      trigger: "#card-crop4",
      start: "top 75%", // adjust scroll position trigger here
      toggleActions: "play none none none", // only play once
    }
  });

  // Step 1: expand height
  tl8.to("#card-crop4", {
    opacity: 1,
    height: "380px",
    duration: 0.8,
    ease: "power2.out"
  }, "+=0.3");

  // Step 2: show image and text
  tl8.to("#crop-img4", {
    opacity: 1,
    display: "block",
    duration: 0.4,
    ease: "power2.out"
  },); // slight delay after height grows

  tl8.to("#crop-text4", {
    opacity: 1,
    display: "block",
    duration: 0.4,
    ease: "power2.out"
  },); // start slightly before image ends

  // Step-by-step timeline animation
  const tl9 = gsap.timeline({
    scrollTrigger: {
      trigger: "#card-crop5",
      start: "top 75%", // adjust scroll position trigger here
      toggleActions: "play none none none", // only play once
    }
  });

  // Step 1: expand height
  tl9.to("#card-crop5", {
    opacity: 1,
    height: "380px",
    duration: 0.8,
    ease: "power2.out"
  }, "+=0.4");

  // Step 2: show image and text
  tl9.to("#crop-img5", {
    opacity: 1,
    display: "block",
    duration: 0.4,
    ease: "power2.out"
  },); // slight delay after height grows

  tl9.to("#crop-text5", {
    opacity: 1,
    display: "block",
    duration: 0.4,
    ease: "power2.out"
  },); // start slightly before image ends

  // Step-by-step timeline animation
  const tl10 = gsap.timeline({
    scrollTrigger: {
      trigger: "#card-crop6",
      start: "top 75%", // adjust scroll position trigger here
      toggleActions: "play none none none", // only play once
    }
  });

  // Step 1: expand height
  tl10.to("#card-crop6", {
    opacity: 1,
    height: "380px",
    duration: 0.8,
    ease: "power2.out"
  }, "+=0.5");

  // Step 2: show image and text
  tl10.to("#crop-img6", {
    opacity: 1,
    display: "block",
    duration: 0.4,
    ease: "power2.out"
  },); // slight delay after height grows

  tl10.to("#crop-text6", {
    opacity: 1,
    display: "block",
    duration: 0.4,
    ease: "power2.out"
  },); // start slightly before image ends
  

  gsap.registerPlugin(ScrollTrigger);

  const canvas = document.getElementById('webgl');
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.z = 4;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0); // Transparent background
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // LIGHT for standard material
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(2, 5, 5);
  scene.add(light);

  const geometry = new THREE.CylinderGeometry(1.3, 1.3, 1.0, 64);
  const materials = [
    new THREE.MeshStandardMaterial({ color: 0x5198f5 }),
    new THREE.MeshStandardMaterial({ color: 0xffffff }), 
    new THREE.MeshStandardMaterial({ color: 0xffffff })  
  ];
  const stethoscopeHead = new THREE.Mesh(geometry, materials);
  stethoscopeHead.rotation.x = Math.PI / 2;
  stethoscopeHead.rotation.y = Math.PI / -5;
  stethoscopeHead.rotation.z = Math.PI / 4;
  scene.add(stethoscopeHead);

  // Animate
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();

  // Timeline
  const rotationTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".crop",
      start: "5% top",
      end: "+=3600",
      scrub: true,
      markers: false
    }
  });

  rotationTimeline
    .to(stethoscopeHead.rotation, { x: Math.PI / 2, y: 0, z: 0, duration: 800 })
    .to("#webgl", { top: "50%", ease: "power2.inOut", duration: 1000 }, "<")
    .to(stethoscopeHead.rotation, { x: Math.PI / 2, y: 0, z: Math.PI / -1, duration: 2000 })
    .to(stethoscopeHead.rotation, { x: Math.PI / 2, y: 0, z: Math.PI / -1, duration: 2000 })
    .to(stethoscopeHead.rotation, { x: Math.PI, y: Math.PI, duration: 1000 })
    .to("#webgl", { top: "60%", ease: "power2.inOut", duration: 1000 }, "<")
    .to("#webgl", { opacity: 0, duration: 600 }); // Fade out

  // Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

});
