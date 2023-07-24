import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from './livro.model';
import { environment } from 'src/environments/environments';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll(): Observable<Livro[]>{
    const url = `${this.baseUrl}/livro/`

    return this.http.get<Livro[]>(url)
  }

  create(livro: Livro):Observable<Livro>{
    const url = `${this.baseUrl}/livro`
    
    return this.http.post<Livro>(url, livro)
  }

  mensagem(str: string): void{
    this._snack.open(`${str}`, 'Ok', 
    {horizontalPosition: 'center', verticalPosition: 'bottom', duration: 3000})
  }
}
