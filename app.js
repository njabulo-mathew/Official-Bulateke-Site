const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = Math.ceil(+counter.innerText);

        const inc = target / speed

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 19)
        } else {
            counter.innerText = target;
        }
    }

    updateCount();
})

// aos
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });


  //gsap
  const tl = gsap.timeline( { defaults: { ease: "power1.out" }})

  tl.fromTo(".home-main-img", { y: 60 }, { y: 0, duration: 1});
  tl.fromTo(".heading", { y: 60, opacity: 0 }, { y: 0, opacity: 1,duration: 1}, "-=0.5")
  .fromTo(".sub-text", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1}, )
  .fromTo(".btn", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1});

