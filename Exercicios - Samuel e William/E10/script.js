document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector('.slider');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.querySelector('.main-image');
  let currentIndex = 0;
  let intervalId;

  function startSlideShow() {
    intervalId = setInterval(nextSlide, 3000);
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    showSlide(currentIndex);
  }

  function showSlide(index) {
    mainImage.src = thumbnails[index].src;
    currentIndex = index; // Atualiza o índice para a próxima imagem
  }

  function stopSlideShow() {
    clearInterval(intervalId);
    startSlideShow(); // Reinicia o slide show após parar por causa do mouseover
  }

  function handleThumbnailClick(event) {
    const index = parseInt(event.target.dataset.index);
    showSlide(index);
    stopSlideShow();
  }

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', handleThumbnailClick);
  });

  startSlideShow();
});
