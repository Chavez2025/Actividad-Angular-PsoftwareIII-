import { Component } from '@angular/core';
import { SaludoComponent } from '../saludo/saludo';
import { TareasComponent } from '../tareas/tareas';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [SaludoComponent, TareasComponent],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class InicioComponent {}
