import { Component } from '@angular/core';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent {
  displayedColumns: string[] = ['nome', 'autor', 'genero', 'editora', 'status', 'acoes'];
}
