import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RequisicaoComponent } from './component/requisicao/requisicao.component';
import { ReactiveFormsComponent } from './component/reactive-forms/reactive-forms.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: RequisicaoComponent},
  {path: 'listPrimeiro', component: ReactiveFormsComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
