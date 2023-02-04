import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Katrina Nardo';
  colorClass = 'colorClass';
  showData($event: any) {
    console.log('Button is clicked.');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
