// Menggunakan JavaScript untuk memuat dan memasukkan header
const headerContainer = document.getElementById("header-container");

// Buat permintaan HTTP menggunakan fetch API
fetch("header_hukum.html")
  .then((response) => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error("Gagal memuat header");
    }
  })
  .then((data) => {
    headerContainer.innerHTML = data;
  })
  .catch((error) => {
    console.error(error);
  });

// Menggunakan JavaScript untuk memuat dan memasukkan footer
const footerContainer = document.getElementById("footer-container");

// Buat permintaan HTTP menggunakan fetch API
fetch("footer.html")
  .then((response) => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error("Gagal memuat header");
    }
  })
  .then((data) => {
    footerContainer.innerHTML = data;
  })
  .catch((error) => {
    console.error(error);
  });


