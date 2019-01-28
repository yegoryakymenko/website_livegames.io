window.addEventListener("orientationchange", function () {
  const footer = document.querySelector('.footer');
  const career = document.querySelector('.career');
  const partners = document.querySelector('.partners');
  const careerParag = document.querySelector('.career__content-block p');
  const careerContent = document.querySelector('.career__content');
  // const careerButton = document.querySelector('.career__content-block button');
  if (window.orientation === 90) {
    footer.classList.add('mobile-landscape');
    career.classList.add('mobile-landscape');
    partners.classList.add('mobile-landscape');
    careerParag.className = 'paragraph';
    careerContent.className = 'career__content mobile-landscape__content';
    // careerButton.className = 'mobile-landscape__content button';
  } else {
    footer.classList.remove('mobile-landscape');
    career.classList.remove('mobile-landscape');
    partners.classList.remove('mobile-landscape')
    careerParag.classList.remove('paragraph');
    careerContent.className = 'career__content';
    // careerButton.className = '';
  }
  // alert(window.orientation);
}, false);
