import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AccessLogComponent } from './access-log/access-log.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HostsComponent } from './hosts/hosts.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HostCardComponent } from './host-card/host-card.component';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { hostsReducer } from './state/hosts.reducer';
import { HostEffects } from './state/hosts.effects';

@NgModule({
  declarations: [
    AppComponent,
    AccessLogComponent,
    NavigationComponent,
    HomeComponent,
    HostsComponent,
    HostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ hosts: hostsReducer}),
    EffectsModule.forRoot([HostEffects]),
    BrowserAnimationsModule, 
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    HostCardComponent
  ]
})
export class AppModule { }
