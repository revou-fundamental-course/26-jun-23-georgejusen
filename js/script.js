function validateForm() {
  let fname = document.forms["form"]["fullname"].value;
  let email = document.forms["form"]["email"].value;
  let option = document.forms["form"]["option"].value;

  if (fname == "") {
    alert("nama tidak boleh kosong");
    return false;
  }
  if (email == "") {
    alert("email tidak boleh kosong");
    return false;
  }
  if (option == "") {
    alert("opsi tidak boleh kosong");
    return false;
  }

  document.getElementById("sender-fullname").innerHTML = fname;
  document.getElementById("sender-email").innerHTML = email;
  document.getElementById("sender-option").innerHTML = option;
}

let menuToggle = document.querySelector(".menu-toggle input");
let nav = document.querySelector("nav ul");

document
  .getElementById("input-form")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Menghentikan pengiriman formulir

    // Mengambil nilai dari elemen-elemen input
    let nama = document.getElementById("form-nama").value;
    let tglLahir = document.getElementById("form-tgl-Lahir").value;
    let jenisKelamin = document.querySelector(
      'input[name="jenis_kelamin"]:checked'
    ).value;
    let pesan = document.getElementById("form-area").value;

    // Mengisi elemen-elemen output dengan nilai yang diambil
    document.getElementById("timestamp").innerHTML = "Timestamp: " + new Date();
    document.getElementById("nama").innerHTML = "Nama: " + nama;
    document.getElementById("tgl-Lahir").innerHTML =
      "Tanggal Lahir: " + tglLahir;
    document.getElementById("jenisKelamin").innerHTML =
      "Jenis Kelamin: " + jenisKelamin;
    document.getElementById("pesan").innerHTML = "Pesan: " + pesan;
  });

// const images = [
//   "../assets/hero_image/hero-drone.jpg",
//   "../assets/hero_image/Drones.jpg",
//   "../assets/hero_image/drone-hero2-optimized.jpg",
// ];

// const imageSlide = document.getElementById("image-slide");
// let currentImageIndex = 0;

// function changeImage() {
//   imageSlide.innerHTML = `<img src="${images[currentImageIndex]}" alt="Slide Image">`;
//   currentImageIndex = (currentImageIndex + 1) % images.length;
// }

// setInterval(changeImage, 3000); // Ganti gambar setiap 3 detik (3000 ms)
