import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TareasService } from '../services/tareas';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css'
})
export class TareasComponent {

  tareas: { id: number, nombre: string }[] = [];

  constructor(private tareasService: TareasService) {
    this.tareas = this.tareasService.getTareas();
  }

  eliminar(id: number) {
    this.tareasService.eliminarTarea(id);
    this.tareas = this.tareasService.getTareas();
  }
}
