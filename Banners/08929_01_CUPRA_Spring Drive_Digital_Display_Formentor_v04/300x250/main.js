var tl = new TimelineMax({ onComplete: endFrame, repeat: 0, repeatDelay: 3 });
window.onload = function () {
  initAd();
};

var bool1 = 0;
function endFrame() {
  console.log("endFrame()");
}


function initAd() {

  document.getElementById("banner").addEventListener('mouseover', ctaOver, false);
  document.getElementById("banner").addEventListener('mouseout', ctaOut, false);

  // Helper function
  let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb);
  };

  domReady(() => {
    // Display body when DOM is loaded
    document.body.style.visibility = 'visible';
  });

  //---------- START ANIMATION ------------
  tl.addLabel("start")
    .set("#bg1,#logo,#disclaimer,#disclaimer1,#disclaimer2,#car", { opacity: 0 })


  // ----------Frame 1 ------------
  tl.addLabel("frame1", "")
    .to('#bg1', 0.1, { opacity: 1, ease: Power1.easeInOut }, "frame1")
    .to('#logo,#disclaimer,#disclaimer1,#car', 0.1, { opacity: 1, ease: Power1.easeIn }, "frame1+=0.3")
    .to('#car', 8, { scale: 1, ease: Power1.easeIn }, "frame1+=0.3")
    .to('#copy1', 0.5, { opacity: 1, ease: Power1.easeIn}, "frame1+=0.5")
    .to('#copy2', 0.5, { opacity: 1, ease: Power1.easeIn}, "frame1+=1.3")
    .to('#copy3', 0.5, { opacity: 1, ease: Power1.easeIn}, "frame1+=2.1")

  // ----------Frame 2 ------------
  tl.addLabel("frame2", "5")
    .to('#copy2,#copy3,#disclaimer,#disclaimer1', 0.5, { opacity: 0, ease: Power1.easeIn}, "frame2")
    .to('#disclaimer2', 0.1, { opacity: 1, ease: Power1.easeIn }, "frame2+=0.3")
    .to('#copy4', 0.5, { opacity: 1, ease: Power1.easeIn}, "frame2+=1")
    .to('#copy5', 0.5, { opacity: 1, ease: Power1.easeIn}, "frame2+=1.8")
    .to('#copy6', 0.5, { opacity: 1, ease: Power1.easeIn}, "frame2+=2.6")

  // ----------Frame 3 ------------
  tl.addLabel("frame3", "10")
    .to('#copy4,#copy5,#copy6,#disclaimer2,#copy1', 0.5, { opacity: 0, ease: Power1.easeIn}, "frame3")
    .to('#copy7', 0.5, { opacity: 1, ease: Power1.easeIn }, "frame3+=0.3")
    .to('#copy8', 0.5, { opacity: 1, ease: Power1.easeIn}, "frame3+=1.1")
    .to('#cta1', 0.5, { opacity: 1, ease: Power1.easeIn}, "frame3+=1.9")
  endFrame()

  var cta1 = document.getElementById("cta1");

  function ctaOver(e) {
    console.log(bool1)
    if(window.getComputedStyle(cta1).opacity == "1"){
      TweenLite.to('#cta2', 0,{ opacity: 1, ease: Power1.easeIn} );
    }
    // else{
    //   TweenLite.to('#cta1', 0,{ opacity: 0, ease: Power1.easeIn} );
    //   TweenLite.to('#cta2', 0,{ opacity: 1, ease: Power1.easeIn} );
    // }
  }

  function ctaOut(e) {
    if(window.getComputedStyle(cta1).opacity == "1"){
      TweenLite.to('#cta2', 0,{ opacity: 0, ease: Power1.easeIn} );
    }
    // else{
    //   TweenLite.to('#cta1', 0,{ opacity: 0, ease: Power1.easeIn} );
    //   TweenLite.to('#cta2', 0,{ opacity: 1, ease: Power1.easeIn} );
    // }
  }
}
