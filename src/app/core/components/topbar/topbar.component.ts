import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { interval } from 'rxjs';

@Component({
  selector: 'dms-topbar',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, RippleModule, ToggleButtonModule, FormsModule, DatePipe],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent implements OnInit {

  isOnline = true;
  currentDate: Date;
  utc: string;

  constructor() {
    this.currentDate = new Date();
    this.utc = this.currentDate.toUTCString();
  }

  ngOnInit() {
    interval(1000).subscribe(() => {
      const now = new Date();
      this.currentDate = now;
    });
  }
  signOut() {
    throw new Error('Method not implemented.');
  }
}
