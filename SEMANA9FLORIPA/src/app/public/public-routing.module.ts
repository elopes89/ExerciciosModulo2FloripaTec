import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../component/login/login.component';
import { PublicComponent } from '../layouts/public/public.component';

const routes: Routes = [
  {
    path:'',
    component: PublicComponent,
    children: [
      {path: 'login', component: LoginComponent}
    ]
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule { }
