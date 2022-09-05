import { Component } from '@angular/core';
import { Course } from 'projects/models/src/lib/models.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'lesson1';

  courses: Course[] = [{
    name: 'Frontend',
    code: 'IDK',
    ects: "5",
  }, {
    name: 'MAD',
    code: 'IDK!',
    ects: "5",
  }, {
    name: 'ABE',
    code: '12231',
    ects: "5",
  }]
}
