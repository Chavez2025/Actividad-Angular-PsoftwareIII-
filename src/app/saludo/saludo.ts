import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './saludo.html',
  styleUrls: ['./saludo.css']
})
export class SaludoComponent {
  nombre: string = '';
}
