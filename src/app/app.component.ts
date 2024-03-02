import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profilecard';
  constructor() { }

  ngOnInit(): void {
    // Test Bootstrap initialization
    console.log('Bootstrap initialized');
  }
}
