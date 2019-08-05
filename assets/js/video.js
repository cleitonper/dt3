function loadVideoList() {
  const videoList = document.querySelector('.videos');
  const fullVideo = document.querySelector('.full-video');
  const playButton = document.querySelector('.video.active .play');
  const closeButton = document.querySelector('.full-video .close');

  playButton.addEventListener('click', function() {
    playButton.classList.add('hidden');
    fullVideo.classList.remove('closed');
    setTimeout(() => {
      fullVideo.scrollIntoView();
    }, 300);
  });

  closeButton.addEventListener('click', function() {
    playButton.classList.remove('hidden');
    fullVideo.classList.add('closed');
    videoList.scrollIntoView();
  });
}