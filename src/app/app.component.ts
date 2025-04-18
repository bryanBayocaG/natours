import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';

@Component({
  selector: 'app-root',
  imports: [/* RouterOutlet,  */ HeaderComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'natours';
}
