# TrybestAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

Lifecycle Hooks di Angular: Lifecycle Hooks adalah metode yang disediakan oleh Angular untuk memberi Anda kontrol pada berbagai tahap siklus hidup sebuah komponen atau direktif. Dengan menggunakan lifecycle hooks, Anda dapat melakukan tindakan tertentu saat komponen berada dalam status tertentu (misalnya, saat komponen diinisialisasi, diperbarui, atau dihancurkan).

Berikut adalah lifecycle hooks yang paling umum digunakan di Angular:

1. ngOnInit() Dipanggil sekali saat komponen diinisialisasi. Tempat yang ideal untuk menginisialisikan data komponen, melakukan fetch data dari API, dan melakukan pengaturan awal.
2. ngOnChanges(changes: SimpleChanges) Dipanggil sebelum ngOnInit() dan setiap kali ada perubahan pada input properties komponen. changes adalah objek yang berisi nilai sebelumnya dan nilai saat ini dari properti yang diubah.
3. ngDoCheck() Dipanggil selama setiap siklus deteksi perubahan. Berguna untuk melakukan deteksi perubahan yang lebih mendalam, terutama ketika menggunakan objek atau array yang tidak secara otomatis terdeteksi.
4. ngAfterViewInit() Dipanggil setelah tampilan komponen dan semua tampilan anak telah diinisialisasi. Cocok untuk mengakses elemen DOM atau child components.
5. ngOnDestroy() Dipanggil sebelum komponen dihapus dari DOM. Gunakan untuk membersihkan sumber daya, menghentikan observables, dan menghapus listener.
Hal-Hal yang Perlu Diketahui:

Modularitas Angular dirancang dengan konsep modular. Anda akan bekerja dengan modul (NgModule), yang merupakan wadah untuk mengelompokkan komponen, direktif, dan layanan.
Komponen Komponen adalah bagian dasar dari aplikasi Angular. Setiap komponen memiliki template (HTML), class (TypeScript), dan stylesheet (CSS).
Data Binding Angular mendukung berbagai bentuk binding data, seperti: Interpolation: Menampilkan data dari komponen ke template. Property Binding: Mengikat data dari komponen ke properti elemen HTML. Event Binding: Menangani event seperti klik. Two-way Binding: Menggunakan [(ngModel)] untuk sinkronisasi antara model dan tampilan.
Dependency Injection Angular menggunakan dependency injection untuk menyediakan layanan (services) kepada komponen. Ini memudahkan manajemen dependensi dan membuat kode lebih terorganisir.
Routing Angular memiliki sistem routing yang kuat untuk menavigasi antara berbagai tampilan dalam aplikasi. Anda akan menggunakan RouterModule untuk mendefinisikan rute dan navigasi.
Observables dan RxJS Angular menggunakan observables untuk menangani data asinkron. RxJS adalah library yang menyediakan banyak operator untuk manipulasi data.
Forms Angular mendukung form baik secara template-driven maupun reactive. Pelajari bagaimana cara menangani validasi dan pengiriman data form.
Testing Angular menyediakan alat untuk unit testing dan end-to-end testing. Familiarisasi dengan Jasmine dan Protractor untuk menulis tes untuk aplikasi Anda.