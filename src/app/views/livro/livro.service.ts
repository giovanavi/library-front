import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from './livro.model';
import { environment } from 'src/environments/environments';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, UrlHandlingStrategy } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient, private _snack: MatSnackBar, private router: Router) { }

  findAll(): Observable<Livro[]>{
    const url = `${this.baseUrl}/livro/`

    return this.http.get<Livro[]>(url)
  }

  findById(id: number): Observable<Livro>{
    const url = `${this.baseUrl}/livro/${id}`
    return this.http.get<Livro>(url)
  }

  create(livro: Livro): Observable<Livro>{
    const url = `${this.baseUrl}/livro`
    return this.http.post<Livro>(url, livro)
  }

  update(livro: Livro): Observable<void>{
    const url = `${this.baseUrl}/livro/${livro._id}`
    return this.http.put<void>(url, livro)
  }

  delete(id: number):Observable<void>{
    const url = `${this.baseUrl}/livro/${id}`
    return this.http.delete<void>(url)
  }

  mensagem(str: string): void{
    this._snack.open(`${str}`, 'Ok', 
    {horizontalPosition: 'center', verticalPosition: 'top', duration: 3000})
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this.router.navigate([uri]));
 }
}
