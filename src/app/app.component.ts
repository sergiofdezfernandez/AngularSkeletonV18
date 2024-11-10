import { Component } from '@angular/core';
import { MainCoreComponent } from './core/container/main-core/main-core.component';

@Component({
  selector: 'dms-root',
  standalone: true,
  imports: [MainCoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'skeleton';
}
