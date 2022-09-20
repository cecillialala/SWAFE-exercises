import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveModuleRoutingModule } from './reactive-module-routing.module';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';


@NgModule({
  declarations: [
    FormReactiveComponent
  ],
  imports: [
    CommonModule,
    ReactiveModuleRoutingModule
  ]
})
export class ReactiveModuleModule { }
