import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name = 'Katrina Nardo';
  colorClass = 'colorClass';

  //ngStyle
  color = '#ff6b6b';

  constructor() {}

  ngOnInit() {}
}
