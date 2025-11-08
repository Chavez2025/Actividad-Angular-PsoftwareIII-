import { Component } from '@angular/core';
import { RouterOutlet, provideRouter, RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from './app.routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { MayusculaComponent } from './mayuscula/mayuscula';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'Mi App Angular';
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
