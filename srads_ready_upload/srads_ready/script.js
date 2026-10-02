document.addEventListener("DOMContentLoaded", () => {
  // Keep all package videos silent, looping and autoplay-friendly.
  document.querySelectorAll("video").forEach((video) => {
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.play().catch(() => {});
  });
});
