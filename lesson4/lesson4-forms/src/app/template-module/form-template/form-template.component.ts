import { Component, OnInit } from '@angular/core';
import { TemplateModuleModule } from '../template-module.module';


@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
