import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomeComponent],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header>
          <h3>Home</h3>
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styles: `
    header {
      border-bottom: 1px solid black;
      margin-bottom: 1rem;
    }
  `,
})
export class AppComponent {}
