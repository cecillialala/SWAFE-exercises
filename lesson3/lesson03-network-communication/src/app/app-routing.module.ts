import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'client',
  loadChildren: () => import('./client/client.module').then(m => m.ClientModule) 
},{
  path: '**',
  loadComponent: () => import('./page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

