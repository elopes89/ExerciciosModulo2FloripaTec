import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BuscaComponent } from './component/busca/busca.component';
import { LoginComponent } from './component/login/login.component';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ResultadoPaiComponent } from './component/resultado-pai/resultado-pai.component';
import { FullComponent } from './layouts/full/full.component';
import { acessarModuloPrivadoGuard, authGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: 'public/login', pathMatch: 'full' },
      {
        path: 'public',
        canActivate: [authGuard],
        loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
      },
      {
        path: 'private',
        canActivate: [acessarModuloPrivadoGuard],
        loadChildren: () => import('src/app/private/private.module').then(m => m.PrivateModule)

      },
    ]
  },
  { path: '**', component: NotFoundComponent }  //rotas não existentes

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule]
})
export class AppRoutingModule { }
