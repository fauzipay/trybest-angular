import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonapiService {
  constructor(private http: HttpClient) {}

  // Method untuk mengambil data dari API dengan URL dinamis
  fetchData(apiUrl: string): Observable<any> {
    return this.http.get(apiUrl);
  }
}
