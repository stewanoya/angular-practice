import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipes-shopping';
  loadedFeature: string = 'recipe';
  onNavigate(e) {
    this.loadedFeature = e;
  }
}
