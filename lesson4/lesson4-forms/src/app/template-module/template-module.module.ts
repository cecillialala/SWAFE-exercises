import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateModuleRoutingModule } from './template-module-routing.module';
import { FormTemplateComponent } from './form-template/form-template.component';


@NgModule({
  declarations: [
    FormTemplateComponent
  ],
  imports: [
    CommonModule,
    TemplateModuleRoutingModule
  ]
})
export class TemplateModuleModule { }
