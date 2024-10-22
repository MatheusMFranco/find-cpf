import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Paths } from './paths.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: Paths.DETAIL,
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule),
  },
  {
    path: Paths.FIND,
    loadChildren: () => import('./find/find.module').then(m => m.FindModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
