// Pesan selamat datang saat website dibuka
window.onload = function () {
    alert("✨ Selamat Datang di Website Kelurahan Mranggen ✨");
};


// Efek klik tombol download
const tombolDownload = document.querySelectorAll(".btn-download");

tombolDownload.forEach((btn) => {

    btn.addEventListener("click", function () {

        alert("📥 Dokumen sedang diunduh");

    });

});

