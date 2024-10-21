# Aplikasi TodoList

Aplikasi TodoList adalah aplikasi web sederhana dan fungsional untuk mengelola tugas sehari-hari. Aplikasi ini memungkinkan pengguna untuk mendaftar, login, menambahkan todo, mengedit dan menghapus tugas, serta menandai tugas yang sudah selesai.

## Fitur

### 1. Halaman Home
- **Navbar**
  - Menu navigasi: Todos, Profile, Home, Log Out (terlihat jika sudah login)
- **Bagian Pengenalan**
  - Judul dan deskripsi singkat tentang aplikasi
- **Tombol**
  - `Mulai`: Mengarahkan ke halaman login
  - `Daftar`: Mengarahkan ke halaman pendaftaran

### 2. Halaman Register
- **Field Input**
  - Username, Email, dan Password
- **Tombol Toggle Password**
  - Pilihan untuk menampilkan/menyembunyikan password
- **Validasi Form**
  - Field yang wajib diisi: Username, Email, dan Password
- **Tombol**
  - `Register`: Mengirimkan form pendaftaran
- **Pilihan Login**
  - Arahkan ke halaman login jika pengguna sudah memiliki akun

### 3. Halaman Login
- **Field Input**
  - Username dan Password
- **Tombol Toggle Password**
  - Pilihan untuk menampilkan/menyembunyikan password
- **Validasi Sederhana**
  - Memeriksa apakah semua field telah diisi
- **Tombol**
  - `Login`: Mengirimkan form login

### 4. Halaman Todos
- **Judul**: Menampilkan judul halaman
- **Input Todos**
  - Field input untuk menambahkan tugas baru
- **Daftar Tugas**
  - Menampilkan daftar todos
- **Tombol**
  - `Edit`: Mengedit tugas tertentu
  - `Delete`: Menghapus tugas tertentu
  - `Tandai Selesai`: Menandai tugas sebagai selesai atau belum selesai

### 5. Halaman Profile
- **Judul**: Menampilkan judul halaman
- **Bagian Sapaan**
  - Menyapa pengguna dengan username mereka
- **Email Pengguna**
  - Menampilkan email pengguna yang sedang login

### 6. Log Out
- **Pengalihan**
  - Mengeluarkan pengguna dan mengarahkan ke halaman home
- **Manajemen Sesi**
  - Menghapus status login

## Instalasi

1. Clone repositori ini:
   ```bash
   git clone https://github.com/sancodeid/todolist-app.git
