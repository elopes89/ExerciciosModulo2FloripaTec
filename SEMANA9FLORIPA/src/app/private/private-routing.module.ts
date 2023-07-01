import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { PrivateComponent } from '../layouts/private/private.component';
import { BuscaComponent } from '../component/busca/busca.component';
import { ResultadoPaiComponent } from '../component/resultado-pai/resultado-pai.component';

const routes: Routes = [
{
  path:'',
  component: PrivateComponent,
  children: [
    {path: 'home', component: HomeComponent},
    {path: 'busca', component: BuscaComponent},
    {path: 'resultPai', component: ResultadoPaiComponent}

  ]
}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
