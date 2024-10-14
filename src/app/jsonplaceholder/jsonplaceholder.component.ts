import { Component, OnInit } from '@angular/core';
import { JsonapiService } from './jsonapi.service';

@Component({
  selector: 'app-jsonplaceholder',
  templateUrl: './jsonplaceholder.component.html',
  styleUrls: ['./jsonplaceholder.component.css'],
})
export class JsonplaceholderComponent implements OnInit {
  posts: any[] = []; // Variabel untuk menyimpan hasil data
  filteredPosts: any[] = [];
  loading: boolean = true;
  searchTerm: string = '';

  // Daftar endpoint yang bisa dipilih
  endpoints = [
    { name: 'Posts', url: 'https://jsonplaceholder.typicode.com/posts' },
    { name: 'Comments', url: 'https://jsonplaceholder.typicode.com/comments' },
    { name: 'Albums', url: 'https://jsonplaceholder.typicode.com/albums' },
    { name: 'Photos', url: 'https://jsonplaceholder.typicode.com/photos' },
    { name: 'Todos', url: 'https://jsonplaceholder.typicode.com/todos' },
    { name: 'Users', url: 'https://jsonplaceholder.typicode.com/users' },
  ];

  selectedEndpoint = this.endpoints[0]; // Set endpoint awal

  constructor(private dataService: JsonapiService) {}

  ngOnInit(): void {
    this.fetchData(); // Ambil data saat inisialisasi
  }

  fetchData(): void {
    this.loading = true; // Set loading ke true sebelum mengambil data
    // Simulasikan loading selama 3 detik sebelum memanggil API
    setTimeout(() => {
      this.dataService.fetchData(this.selectedEndpoint.url).subscribe({
        next: (data) => {
          this.posts = data;
          this.filteredPosts = data; // Set filteredPosts ke semua data setelah diambil
          this.loading = false; // Set loading ke false setelah data diambil
        },
        error: (err) => {
          console.error('Error fetching posts', err);
          this.loading = false; // Set loading ke false jika terjadi error
        },
      });
    }, 3000); // Menunggu 3 detik
  }

  searchPosts(): void {
    if (this.searchTerm) {
      this.filteredPosts = this.posts.filter((post) =>
        post.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredPosts = this.posts; // Kembali ke semua post jika tidak ada input
    }
  }

  onEndpointChange(event: Event): void {
    const target = event.target as HTMLSelectElement; // Casting event.target
    const selectedEndpoint = this.endpoints.find(
      (endpoint) => endpoint.name === target.value
    );
    if (selectedEndpoint) {
      this.selectedEndpoint = selectedEndpoint; // Set endpoint yang dipilih
      this.fetchData(); // Ambil data berdasarkan endpoint yang dipilih
    }
  }
}
