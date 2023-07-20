import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from './livro.model';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient) { }

  findAll(): Observable<Livro[]>{
    const url = `${this.baseUrl}/livro`

    return this.http.get<Livro[]>(url)
  }
}
