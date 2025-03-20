import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from './Component/nav-menu/nav-menu.component';
import { NavTopComponent } from './Component/nav-top/nav-top.component';
import { CenterContentComponent } from './Component/center-content/center-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavMenuComponent,NavTopComponent,CenterContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sales Dashboard';
}
