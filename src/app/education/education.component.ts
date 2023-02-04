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
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  showData($event: any) {
    console.log('Button is clicked.');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
