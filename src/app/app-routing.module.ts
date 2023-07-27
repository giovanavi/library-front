import { LivroReadComponent } from './views/livro/livro-read/livro-read.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroCreateComponent } from './views/livro/livro-create/livro-create.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "livros", component: LivroReadComponent},
  {path: "livros/create", component: LivroCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
