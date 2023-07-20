import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro.service';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {
  
  displayedColumns: string[] = ['nome', 'autor', 'genero', 'editora', 'status', 'acoes'];

  livros: Livro[] = []

  constructor(private service: LivroService) {}

  ngOnInit(): void {
    this.findAll()
  }
  
  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.livros = resposta
    })
  }
  
}
