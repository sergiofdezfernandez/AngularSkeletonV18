import { Component } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { StyleClassModule } from 'primeng/styleclass';
import { SIDEBAR_MENU, SidebarItem } from '../../model/sidebar-item.model';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'dms-sidebar',
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
    SvgIconComponent,
    RouterLink,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isSidebarCollapsed: boolean;
  sidebarMenuItems: SidebarItem[];

  constructor(private route: ActivatedRoute) {
    this.sidebarMenuItems = [...SIDEBAR_MENU];
    this.isSidebarCollapsed = false;
  }
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  isActive(path: string) {
    if (this.route.snapshot.url.length === 0) {
      return false;
    }
    return this.route.snapshot.url[0].path === path;
  }
}
