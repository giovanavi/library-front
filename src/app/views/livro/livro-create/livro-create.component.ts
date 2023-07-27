import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro.service';
import { Livro } from '../livro.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit{

  livro: Livro = {
    isbn:  '',
    nome: '',
    autor: '',
    editora: '',
    genero: '',
  }

  constructor(private service:LivroService, private router: Router){}

  ngOnInit(): void {
  }


  create(): void{
    this.service.create(this.livro).subscribe(resposta => {
      this.router.navigate(['livros'])
      this.service.mensagem("Livro criado com sucesso !")
    }, err =>{
      this.service.mensagem("Verifique se todos os campos estão preenchidos corretamente")
    }
    )
  }

  cancel(): void{
    this.router.navigate(['livros'])
  }
  
}

