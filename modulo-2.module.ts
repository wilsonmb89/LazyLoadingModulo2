import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modulo2Pagina1Component } from './components/modulo2-pagina1/modulo2-pagina1.component';
import { Modulo2Pagina2Component } from './components/modulo2-pagina2/modulo2-pagina2.component';
import { Modulo2Pagina3Component } from './components/modulo2-pagina3/modulo2-pagina3.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'm2-page1', pathMatch: 'full'},
  { path: 'm2-page-1', component: Modulo2Pagina1Component},
  { path: 'm2-page-2', component: Modulo2Pagina2Component},
  { path: 'm2-page-3', component: Modulo2Pagina3Component}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    Modulo2Pagina1Component,
    Modulo2Pagina2Component,
    Modulo2Pagina3Component
  ]
})
export class Modulo2Module { }
