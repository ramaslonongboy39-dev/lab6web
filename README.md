
# Praktikum 6: JavaScript DOM dan Event Handling

**Nama:** Ramadan  
**NIM:** 312510256  
**Kelas:** I125C  
**Mata Kuliah:** Pemrograman Web  
**Institusi:** Universitas Pelita Bangsa  

---

## Langkah-Langkah Praktikum

### 1. Struktur HTML dan JavaScript (`index.html`)

Membuat struktur dasar halaman HTML yang berisi judul, paragraf, tombol, formulir, daftar tugas, dan formulir pendaftaran workshop. File HTML dihubungkan dengan JavaScript eksternal menggunakan tag `<script>` dengan atribut `defer`.

### Screenshot
![Struktur HTML](<Screenshot 2026-10-26 125532.png>)

---

### 2. Manipulasi DOM dan Event Handling (`script.js`)

Menggunakan JavaScript DOM untuk memilih elemen HTML, mengubah teks, mengubah tampilan teks melalui tombol, serta menghitung jumlah karakter yang dimasukkan pengguna. Event listener digunakan agar halaman dapat merespons tindakan pengguna.

### Screenshot
![Kode Manipulasi DOM](<Screenshot 2026-10-26 125643.png>)

---

### 3. Hasil Manipulasi DOM

Menjalankan halaman melalui browser untuk menguji perubahan teks, perubahan tampilan, dan penghitung karakter setelah tombol diklik atau pengguna memasukkan teks.

### Screenshot
![Hasil Manipulasi DOM](<Screenshot 2026-10-26 125840.png>)

---

### 4. Validasi Formulir (`script.js`)

Membuat validasi formulir menggunakan JavaScript. Validasi dilakukan dengan memeriksa kolom kosong, format email, dan umur yang harus berada dalam rentang 17–100 tahun.

### Screenshot
![Kode Validasi Formulir](<Screenshot 2026-10-26 130309.png>)

---

### 5. Pengujian Validasi Formulir

Menguji formulir menggunakan data yang tidak valid dan data yang valid. Pengujian dilakukan untuk memastikan pesan kesalahan muncul ketika data tidak sesuai dan proses berhasil ketika data memenuhi ketentuan.

### Screenshot
![Hasil Validasi Formulir](<Screenshot 2026-10-26 130509.png>)

---

### 6. To-do List

Membuat fitur daftar tugas menggunakan JavaScript. Pengguna dapat menambahkan tugas, menandai tugas sebagai selesai, dan menghapus tugas dari daftar.

### Screenshot
![Kode dan Hasil To-do List](<Screenshot 2026-10-26 130719.png>)

---

### 7. Mini Project: Form Pendaftaran Workshop

Membuat formulir pendaftaran workshop yang dilengkapi penghitung karakter nama, validasi nama dan email, pilihan sesi workshop, pesan kesalahan, pesan berhasil, serta tombol reset.

### Screenshot
![Kode Pendaftaran Workshop](<Screenshot 2026-10-26 130851.png>)

---

### 8. Hasil Mini Project Pendaftaran Workshop

Menjalankan formulir pendaftaran workshop melalui browser untuk menguji pengisian data, pemilihan sesi, validasi formulir, dan tampilan hasil pendaftaran.

### Screenshot
![Hasil Pendaftaran Workshop](<Screenshot 2026-10-26 131047.png>)

---

## Eksperimen Mandiri

### 1. Menambahkan Fitur dan Interaksi Tambahan

- **Eksperimen Mandiri 1:** Menambahkan tombol untuk menghapus satu item dari To-do List.
- **Eksperimen Mandiri 2:** Mengubah validasi agar nama minimal terdiri dari tiga karakter.
- **Eksperimen Mandiri 3:** Menambahkan event `change` pada dropdown sesi workshop dan menampilkan sesi yang dipilih.
- **Eksperimen Mandiri 4:** Membuat tombol untuk menyembunyikan dan menampilkan kembali paragraf menggunakan JavaScript.
- **Eksperimen Mandiri 5:** Mencoba memindahkan script tanpa atribut `defer` ke bagian `<head>`, kemudian mengamati kemungkinan masalah yang terjadi.

### Screenshot
![Eksperimen Mandiri](<Screenshot 2026-10-26 131210.png>)

---

## PERTANYAAN DAN TUGAS

1. Apa yang dimaksud dengan DOM dan apa manfaatnya?
2. Apa perbedaan `getElementById()`, `querySelector()`, dan `querySelectorAll()`?
3. Apa fungsi `addEventListener()` dan sebutkan tiga contoh event?
4. Mengapa `event.preventDefault()` digunakan pada event submit form?
5. Apa perbedaan `textContent` dan `innerHTML` dari sisi penggunaan dan keamanan?
6. Bagaimana `classList.toggle()` membantu mengubah tampilan elemen?
7. Sebutkan minimal tiga skenario pengujian validasi form.

## JAWABAN

### 1. Apa yang dimaksud dengan DOM dan apa manfaatnya?

DOM (Document Object Model) adalah representasi dokumen HTML dalam bentuk objek yang dapat diakses oleh JavaScript. DOM bermanfaat untuk memilih elemen, mengubah teks, mengatur tampilan, menambah atau menghapus elemen, serta membuat halaman web menjadi interaktif.

### 2. Apa perbedaan `getElementById()`, `querySelector()`, dan `querySelectorAll()`?

`getElementById()` digunakan untuk memilih elemen berdasarkan ID. `querySelector()` digunakan untuk memilih elemen pertama yang sesuai dengan selector CSS. Sementara itu, `querySelectorAll()` digunakan untuk memilih semua elemen yang sesuai dengan selector CSS.

### 3. Apa fungsi `addEventListener()` dan sebutkan tiga contoh event?

`addEventListener()` digunakan untuk menjalankan suatu fungsi ketika event tertentu terjadi. Contohnya adalah `click` ketika tombol diklik, `input` ketika nilai input berubah, dan `submit` ketika formulir dikirim.

### 4. Mengapa `event.preventDefault()` digunakan pada event submit form?

`event.preventDefault()` digunakan untuk mencegah tindakan bawaan browser, seperti pengiriman formulir yang menyebabkan halaman dimuat ulang. Dengan begitu, JavaScript dapat memeriksa data terlebih dahulu dan menampilkan hasil validasi pada halaman.

### 5. Apa perbedaan `textContent` dan `innerHTML` dari sisi penggunaan dan keamanan?

`textContent` digunakan untuk membaca atau mengubah teks biasa di dalam elemen HTML. Sementara itu, `innerHTML` digunakan untuk membaca atau mengubah isi elemen HTML, termasuk tag HTML di dalamnya.

Dari sisi keamanan, `textContent` lebih aman untuk menampilkan teks dari pengguna karena teks tersebut tidak diproses sebagai markup HTML. Penggunaan `innerHTML` dengan input yang tidak tepercaya dapat menimbulkan risiko keamanan.

### 6. Bagaimana `classList.toggle()` membantu mengubah tampilan elemen?

`classList.toggle()` digunakan untuk menambahkan class CSS jika class tersebut belum ada atau menghapusnya jika sudah ada. Dengan cara ini, tampilan elemen dapat diubah secara bergantian menggunakan aturan CSS tanpa harus menulis ulang seluruh gaya elemen.

### 7. Sebutkan minimal tiga skenario pengujian validasi form.

Tiga skenario pengujian validasi form adalah:

1. Membiarkan kolom wajib kosong untuk memastikan pesan kesalahan ditampilkan.
2. Memasukkan email dengan format yang tidak valid untuk memastikan sistem menolak data tersebut.
3. Memasukkan umur di bawah 17 atau di atas 100 untuk memastikan validasi umur berjalan.

Selain itu, pengujian dapat dilakukan dengan memasukkan seluruh data yang benar untuk memastikan formulir berhasil diproses.

---

## Kesimpulan

Melalui praktikum ini, saya mempelajari cara menggunakan JavaScript DOM untuk memilih dan memanipulasi elemen HTML, menangani event pengguna, melakukan validasi formulir, serta membuat fitur interaktif seperti To-do List dan pendaftaran workshop. Praktikum ini juga membantu memahami pentingnya pengujian agar fungsi pada halaman web dapat berjalan sesuai kebutuhan.
