import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  CSSClass = 'uppercase';
  text = 'uppercase';

  //ngFor
  shs = [
    'Holy Angel University',
    '2018 - 2020',
    '#1 Holy Angel Avenue, Sto. Rosario, Angeles City, Philippines 2009',
  ];

  college = [
    'Holy Angel University',
    '2020 - Present',
    '#1 Holy Angel Avenue, Sto. Rosario, Angeles City, Philippines 2009',
  ];

  showData($event: any) {
    console.log('Button is clicked.');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
