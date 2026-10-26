
/* LATIHAN 1: Mengubah teks */
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
const tombolUbah = document.getElementById("tombolUbah");

tombolUbah.addEventListener("click", function () {
    judul.textContent = "Halo, Saya Sedang Belajar DOM!";
    pesan.textContent = "Berhasil! Teks diubah menggunakan JavaScript.";
});

/* LATIHAN 2: Mengubah gaya teks */
const tombolHighlight = document.getElementById("tombolHighlight");
const tombolUkuran = document.getElementById("tombolUkuran");
const teksLatihan = document.getElementById("teksLatihan");

tombolHighlight.addEventListener("click", function () {
    teksLatihan.classList.toggle("highlight");
});

tombolUkuran.addEventListener("click", function () {
    teksLatihan.classList.toggle("teks-besar");
});

/* LATIHAN 3: Penghitung karakter */
const inputPesan = document.getElementById("inputPesan");
const jumlahKarakter = document.getElementById("jumlahKarakter");

inputPesan.addEventListener("input", function () {
    jumlahKarakter.textContent = inputPesan.value.length;
});

/* LATIHAN 4: Validasi form */
const formLatihan = document.getElementById("formLatihan");
const hasilValidasi = document.getElementById("hasilValidasi");

formLatihan.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const umurInput = document.getElementById("umur").value;
    const umur = Number(umurInput);

    if (nama === "" || email === "" || umurInput === "") {
        hasilValidasi.textContent = "Semua kolom wajib diisi!";
        hasilValidasi.style.color = "red";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        hasilValidasi.textContent = "Format email tidak valid!";
        hasilValidasi.style.color = "red";
        return;
    }

    if (!Number.isInteger(umur) || umur < 17 || umur > 100) {
        hasilValidasi.textContent =
            "Umur harus berupa bilangan bulat antara 17 sampai 100 tahun.";
        hasilValidasi.style.color = "red";
        return;
    }

    hasilValidasi.textContent = "Pendaftaran berhasil!";
    hasilValidasi.style.color = "green";
});

/* LATIHAN 5: To-do List */
const inputTugas = document.getElementById("inputTugas");
const tombolTambah = document.getElementById("tombolTambah");
const daftarTugas = document.getElementById("daftarTugas");

function tambahTugas() {
    const teks = inputTugas.value.trim();

    if (teks === "") {
        alert("Masukkan tugas terlebih dahulu!");
        return;
    }

    const item = document.createElement("li");
    const tulisan = document.createElement("span");
    const tombolSelesai = document.createElement("button");
    const tombolHapus = document.createElement("button");

    tulisan.textContent = teks;

    tombolSelesai.textContent = "Selesai";
    tombolSelesai.type = "button";
    tombolSelesai.addEventListener("click", function () {
        item.classList.toggle("selesai");
    });

    tombolHapus.textContent = "Hapus";
    tombolHapus.type = "button";
    tombolHapus.addEventListener("click", function () {
        item.remove();
    });

    item.append(tulisan, tombolSelesai, tombolHapus);
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    inputTugas.focus();
}

tombolTambah.addEventListener("click", tambahTugas);

inputTugas.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        tambahTugas();
    }
});

/* MINI PROJECT: Pendaftaran workshop */
const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");
const hitungNama = document.getElementById("hitungNama");
const sesiTerpilih = document.getElementById("sesiTerpilih");
const hasilWorkshop = document.getElementById("hasilWorkshop");
const tombolReset = document.getElementById("tombolReset");

namaWorkshop.addEventListener("input", function () {
    hitungNama.textContent = namaWorkshop.value.length;
});

sesiWorkshop.addEventListener("change", function () {
    sesiTerpilih.textContent =
        sesiWorkshop.value || "Belum memilih sesi";
});

formWorkshop.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = namaWorkshop.value.trim();
    const email = emailWorkshop.value.trim();
    const sesi = sesiWorkshop.value;

    if (nama.length < 3) {
        hasilWorkshop.textContent =
            "Nama harus terdiri dari minimal 3 karakter.";
        hasilWorkshop.style.color = "red";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        hasilWorkshop.textContent = "Masukkan email yang valid.";
        hasilWorkshop.style.color = "red";
        return;
    }

    if (sesi === "") {
        hasilWorkshop.textContent = "Silakan pilih sesi workshop.";
        hasilWorkshop.style.color = "red";
        return;
    }

    hasilWorkshop.textContent =
        "Pendaftaran berhasil! Nama: " + nama +
        " | Email: " + email + " | Sesi: " + sesi;
    hasilWorkshop.style.color = "green";
});

tombolReset.addEventListener("click", function () {
    hitungNama.textContent = "0";
    sesiTerpilih.textContent = "Belum memilih sesi";
    hasilWorkshop.textContent = "";
});

/* EKSPERIMEN: Sembunyikan dan tampilkan paragraf */
const tombolSembunyi = document.getElementById("tombolSembunyi");
const paragrafSembunyi = document.getElementById("paragrafSembunyi");

tombolSembunyi.addEventListener("click", function () {
    const tersembunyi = paragrafSembunyi.style.display === "none";

    paragrafSembunyi.style.display = tersembunyi ? "block" : "none";

    tombolSembunyi.textContent = tersembunyi
        ? "Sembunyikan/Tampilkan"
        : "Tampilkan Paragraf";
});
