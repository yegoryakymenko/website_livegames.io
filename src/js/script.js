//ADD COROUSEL
let deviceWidth = window.innerWidth;

let swiperGames = new Swiper('.our-games__container', {
  slidesPerView: (deviceWidth > 725) ? 3 : 1,
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: true,
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
let swiperTombala = new Swiper('.tombala__container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

window.addEventListener("resize", changeScreenParameters());
window.addEventListener("orientationchange",changeScreenParameters());

function changeScreenParameters() {
  deviceWidth = window.innerWidth;

  swiperGames = new Swiper('.our-games__container', {
    slidesPerView: (deviceWidth > 725) ? 3 : 1,
    loop: true,
    centeredSlides: true,
    // autoplay: {
    //   delay: (deviceWidth < 540) ? 5500 : 2500,
    //   disableOnInteraction: true,
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

  if(deviceWidth <= 560){
    var pageVideos = [].slice.call(document.querySelectorAll("video"));
    pageVideos.forEach(function(video) {
      video.pause();
    });
  }
}
//OPTIMIZE VIDEO
document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting && video.target) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }
            video.target.load();
            video.target.classList.remove("lazy");

        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});

document.addEventListener("scroll", function() {
  var pageVideos = [].slice.call(document.querySelectorAll("video"));

  if ("IntersectionObserver" in window && (deviceWidth > 560)) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting && (deviceWidth > 560)) {
          video.readyState === 4 && video.target.play();
        }else{
            video.target.pause()
        }
      });
    });

    pageVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});
