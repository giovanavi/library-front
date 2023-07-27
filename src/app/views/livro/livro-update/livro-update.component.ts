import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit{

  livro: Livro = {
    isbn:  '',
    nome: '',
    autor: '',
    editora: '',
    genero: '',
  }

  constructor(private service:LivroService, private router: Router, private route: ActivatedRoute){}
  
  
  ngOnInit(): void {
    this.livro._id = Number(this.route.snapshot.paramMap.get('id')!)
    this.findById()
  }

  findById(): void{
    // populando livro e os campos
    this.service.findById(this.livro._id!).subscribe( resposta =>{
      this.livro.autor = resposta.autor
      this.livro.editora = resposta.editora
      this.livro.genero = resposta.genero
      this.livro.isbn = resposta.isbn
      this.livro.nome = resposta.nome
      this.livro.status = resposta.status
    })
  }

  update():void {
    this.service.update(this.livro).subscribe(resposta => {
      this.router.navigate(['livros/'])
      this.service.mensagem('Livro editado com sucesso!')
    }, err =>{
      this.service.mensagem("Verifique se todos os campos estão preenchidos corretamente")
    })
  }

  cancel() {
    this.router.navigate(['livros/'])
  }
  
}
