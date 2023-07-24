import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro.service';
import { Livro } from '../livro.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {
  
  displayedColumns: string[] = ['nome', 'autor', 'genero', 'editora', 'status', 'acoes'];

  livros: Livro[] = []

  constructor(private service: LivroService, private router:Router) {}

  ngOnInit(): void {
    this.findAll()
  }
  
  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.livros = resposta
    })
  }
  
  goToCreateLivro(){
    this.router.navigate(["livros/create"])
  }
}
  