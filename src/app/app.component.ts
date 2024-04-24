import { Component } from '@angular/core';
import { ItemComponent } from './item.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemComponent],
  template: `
    <div class="parent-toggler" (click)="isDisabled = !isDisabled">
      Parent Toggler
    </div>
    <div class="status">Disabled : {{ isDisabled }}</div>
    <app-item [(disabled)]="isDisabled" label="Item One" />
  `,
})
export class AppComponent {
  isDisabled = false;
}
