import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JetComponent } from './jet/jet.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { ErrorComponent } from './error/error.component';
import { LoadingComponent } from './loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    JetComponent,
    PlaceholderComponent,
    ErrorComponent,
    LoadingComponent,
  ],
})
export class AppComponent {
  isOk = signal(false);

  onTargetClicked() {
    this.isOk.set(true);
  }
}
