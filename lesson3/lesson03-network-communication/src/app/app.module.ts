import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Router, Routes } from '@angular/router';


const routes: Routes = [{
  path: 'client',
  loadChildren: () => import('./client/client.module').then(m => m.ClientModule) 
},{
  path: '**',
  loadComponent: () => import('./page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent)
}];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]

  

})
export class AppModule { }
