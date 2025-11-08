import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimeraMayusculaPipe } from '../pipes/primera-mayuscula.pipe';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-mayuscula',
  standalone: true,
  imports: [FormsModule, PrimeraMayusculaPipe, NgIf],
  templateUrl: './mayuscula.html',
  styleUrl: './mayuscula.css'
})
export class MayusculaComponent {
  texto: string = '';
}
