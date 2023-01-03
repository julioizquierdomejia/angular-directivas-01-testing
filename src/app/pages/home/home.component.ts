import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  ciudad!: string;
  
  cities = ['Barcelona', 'Madrid', 'Lima', 'Toronto', 'Sokovia'];
  dia!: string;

  mostrar = false;

}
