import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro.service';
import { Livro } from '../livro.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      for (let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message)
      }
    }
    )
  }

  cancel(): void{
    this.router.navigate(['livros'])
  }

}

