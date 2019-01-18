//ADD COROUSEL
var swiperGames = new Swiper('.our-games__container', {
  slidesPerView: 3,
  spaceBetween: 70,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiperTombala = new Swiper('.tombala__container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
//OPTIMIZE VIDEO

document.addEventListener("DOMContentLoaded", lazyVideoLoad);
document.addEventListener("scroll", lazyVideoLoad);

function lazyVideoLoad() {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        console.log("video.isIntersecting",video.isIntersecting);
        console.log(video.target);
        if (video.isIntersecting) {
          video.target.play(); 
        }else{
          video.target.pause();
        }
        // if (video.isIntersecting) {
        //   for (var source in video.target.children) {
        //     var videoSource = video.target.children[source];
        //     if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
        //       videoSource.src = videoSource.dataset.src;
        //     }
        //   }
        //
        //   video.target.load();
        //   video.target.classList.remove("lazy");
        //   lazyVideoObserver.unobserve(video.target);
        // }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
}
// SMOOTH ANCHOR TRANSITION?
// document.querySelector('.about-us').scrollIntoView({
//   behavior: 'smooth'
// });
