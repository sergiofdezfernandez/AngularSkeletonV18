import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MainComponent } from '../../components/main/main.component';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'dms-main-core',
  standalone: true,
  imports: [
    SidebarComponent,
    MainComponent,
    TopbarComponent,
    TopbarComponent,
    FooterComponent,
  ],
  templateUrl: './main-core.component.html',
  styleUrl: './main-core.component.css',
})
export class MainCoreComponent {}
