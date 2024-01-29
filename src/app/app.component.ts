import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  template: `
    <main>
      <header>
        <h3>Header</h3>
      </header>
      <section class="content">
        <app-home></app-home>
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
