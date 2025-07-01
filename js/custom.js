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

  gsap.fromTo(".unlock",
    { opacity: 0, scale: 1.3 },
    {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".unlock",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    }
  );

  gsap.fromTo(".built",
    { opacity: 0, scale: 1.3 },
    {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".built",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    }
  );

  gsap.fromTo(".developed",
    { opacity: 0, scale: 1.3 },
    {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".developed",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    }
  );

  let footerKeikku = gsap.timeline({
    scrollTrigger: {
      trigger: '.footer-keikku',
      start: '-90% center',
      end: 'top center',
      scrub: true,
      markers: false
    }
  });

  footerKeikku.to('.footer-keikku', {
    y: -160, // Move up by 50 pixels
    ease: 'none'
  });


//   const parts = Array.from(document.querySelectorAll('.part'));

// // Map of custom explosion directions
// const explodeMap = [
//   { x: -100, y: -80},
//   { x: -80, y: -60},
//   { x: -60, y: -40},
//   { x: -40, y: -20},
//   { x: -20, y: -10},
//   { x: 0, y: 0},
//   { x: 20, y: 10},
//   { x: 40, y: 20},
//   { x: 60, y: 30},
//   { x: 80, y: 40},
//   { x: 100, y: 50},
//   { x: 120, y: 60},
//   { x: 140, y: 80},
//   { x: 160, y: 100},
// ];

// parts.forEach((part, i) => {
//   const index = part.dataset.index;
//   const originalSrc = `./assets/img/keikku/${index}.png`;
//   const hoverSrc = `./assets/img/keikku/${index}-hover.png`;

//   part.addEventListener('mouseenter', () => {
//     // Swap image with fade
//     gsap.to(part, {
//       opacity: 0,
//       duration: 0.1,
//       onComplete: () => {
//         part.src = hoverSrc;
//         gsap.to(part, {
//           opacity: 1,
//           duration: 0.15,
//           ease: "power2.out"
//         });
//       }
//     });

//     // Animate other parts out
//     parts.forEach((other, j) => {
//       if (j !== i) {
//         const offset = explodeMap[j];
//         gsap.to(other, {
//           x: offset.x,
//           y: offset.y,
//           duration: 0.4,
//           ease: "power2.out"
//         });
//       }
//     });
//   });

//   part.addEventListener('mouseleave', () => {
//     // Reset hovered image
//     gsap.to(part, {
//       opacity: 0,
//       duration: 0.1,
//       onComplete: () => {
//         part.src = originalSrc;
//         gsap.to(part, {
//           opacity: 1,
//           duration: 0.15,
//           ease: "power2.out"
//         });
//       }
//     });

//     // Reset all parts
//     parts.forEach(other => {
//       gsap.to(other, {
//         x: 0,
//         y: 0,
//         scale: 1,
//         duration: 0.4,
//         ease: "power2.inOut"
//       });
//     });
//   });
// });

  gsap.set(".discover-app-card", {
    x: 0,
    rotate: 0,
    zIndex: (i) =>4  - i
  });

  gsap.to(".discover-app-card", {
    x: (i) => (1.5 - i) * 170,      // centered spread
  rotate: (i) => (1.5 - i) * 6, 
    duration: 1,
    ease: "power2.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".discover-app-wrapper",
      start: "10% 30%",
      toggleActions: "play none none none",
      markers: false
    }
  });

});

document.addEventListener("DOMContentLoaded", () => {
  const parts = Array.from(document.querySelectorAll('.part'));

  // Explosion direction map
  const entranceOffsets = [
    { x: -300, y: -100, z: -100 },
    { x: -260, y: -90, z: -80 },
    { x: -220, y: -80, z: -60 },
    { x: -180, y: -60, z: -40 },
    { x: -140, y: -50, z: -20 },
    { x: -100, y: -40, z: 0 },
    { x: -60, y: -30, z: 10 },
    { x: -20, y: -20, z: 20 },
    { x: 20, y: -10, z: 30 },
    { x: 60, y: 0, z: 40 },
    { x: 100, y: 10, z: 50 },
    { x: 140, y: 20, z: 60 },
    { x: 180, y: 30, z: 70 },
    { x: 220, y: 40, z: 80 }
  ];

  // 1. Sequential Load Animation
  gsap.timeline({
  scrollTrigger: {
    trigger: ".relative",
    start: "top 80%",
    once: true
  }
  }).from(parts, {
    opacity: 0,
    x: i => entranceOffsets[i].x,
    y: i => entranceOffsets[i].y,
    z: i => entranceOffsets[i].z,
    rotateZ: -15,
    scale: 0.5,
    stagger: 0.08,
    duration: 1.2,
    ease: "power3.out"
  });

  parts.forEach((part, i) => {
    tl.fromTo(part,
      {
        opacity: 0,
        x: -80,
        y: -80,
        rotateZ: -15,
        scale: 0.6
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotateZ: 0,
        scale: 1
      },
      i * 0.1 // Stagger animation
    );
  });

  // 2. Hover and Leave Effects
  parts.forEach((part, i) => {
    const index = part.dataset.index;
    const originalSrc = `./assets/img/keikku/${index}.png`;
    const hoverSrc = `./assets/img/keikku/${index}-hover.png`;

    part.addEventListener('mouseenter', () => {
      // Fade to hover image
      gsap.to(part, {
        opacity: 0,
        duration: 0.1,
        onComplete: () => {
          part.src = hoverSrc;
          gsap.to(part, {
            opacity: 1,
            duration: 0.15,
            ease: "power2.out"
          });
        }
      });

      // Animate others outward
      parts.forEach((other, j) => {
        if (j !== i) {
          const offset = explodeMap[j];
          gsap.to(other, {
            x: offset.x,
            y: offset.y,
            rotateY: (j - i) * 5,
            scale: 0.95,
            duration: 0.4,
            ease: "power2.out"
          });
        }
      });
    });

    part.addEventListener('mouseleave', () => {
      // Reset image
      gsap.to(part, {
        opacity: 0,
        duration: 0.1,
        onComplete: () => {
          part.src = originalSrc;
          gsap.to(part, {
            opacity: 1,
            duration: 0.15,
            ease: "power2.out"
          });
        }
      });

      // Reset all parts
      parts.forEach(other => {
        gsap.to(other, {
          x: 0,
          y: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.inOut"
        });
      });
    });
  });

});

const imgEl = document.getElementById("exploded-image");

document.querySelectorAll(".hover-zone").forEach(zone => {
  zone.addEventListener("mouseenter", (e) => {
    const index = e.currentTarget.dataset.index;
    const newSrc = `./assets/img/keikku-2/${index}.png`;

    // Apply visual flash style
    imgEl.classList.add("opacity-75", "blur-[1px]", "brightness-110");

    setTimeout(() => {
      imgEl.src = newSrc;

      // Remove effect after a short delay
      setTimeout(() => {
        imgEl.classList.remove("opacity-75", "blur-[1px]", "brightness-110");
      }, 150); // Let transition finish
    }, 100);
  });
});



