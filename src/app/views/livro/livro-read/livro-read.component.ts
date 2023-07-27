import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro.service';
import { Livro } from '../livro.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {
  
  displayedColumns: string[] = ['nome', 'autor', 'genero', 'editora', 'status', 'acoes'];

  livros: Livro[] = []

  constructor(private service: LivroService, private router:Router, private dialog: MatDialog) {}

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

  delete(id:number): void{
    this.service.delete(id!).subscribe(resposta => {
      this.service.redirectTo('livros')
      this.service.mensagem('Livro deletado com sucesso!')
    }, err =>{
      this.service.mensagem(err.error.message)
    })
  }

    // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    //   this.dialog.open(DeleteDialogComponent, {
    //     width: '250px',
    //     enterAnimationDuration,
    //     exitAnimationDuration,
    //   });

    // this.service.delete(this.livro.id?: String || undefined).subscribe(resposta => {
    //   this.service.mensagem('Categoria deletada com sucesso!')
      // openDialog()
    // })

  // }



  
  




}
  