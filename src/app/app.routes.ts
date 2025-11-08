import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio';
import { AcercaComponent } from './acerca/acerca';
import { MayusculaComponent } from './mayuscula/mayuscula';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'acerca', component: AcercaComponent },
    { path: 'mayuscula', component: MayusculaComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' } // redirige al inicio
];
