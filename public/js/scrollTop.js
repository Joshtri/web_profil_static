window.addEventListener('scroll', function() {
  var scrollButton = document.getElementById('scroll-up-button');
  if (window.scrollY > 300) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
});

// Tambahkan event listener untuk menggulir halaman ke atas ketika tombol diklik
document.getElementById('scroll-up-button').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});