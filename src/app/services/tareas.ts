import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private tareas = [
    { id: 1, nombre: 'Estudiar Angular' },
    { id: 2, nombre: 'Hacer la práctica del curso' },
    { id: 3, nombre: 'Descansar un rato 😎' },
    { id: 4, nombre: 'Descansar un rato 😎' },
    { id: 5, nombre: 'Descansar un rato 😎' },
    { id: 6, nombre: 'Descansar un rato 😎' },
  ];

  getTareas() {
    return this.tareas;
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }
}
