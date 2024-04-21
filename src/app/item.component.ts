import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  template: `
    <div class="app-item" [class]="{ 'is-disabled': disabled }">
      {{ label() }}
    </div>
    <div (click)="onTogglerClicked()" class="toggler">
      {{ disabled ? 'Enable' : 'Disable' }}
    </div>
  `,
})
export class ItemComponent {
  label = input.required<string>();

  // before Signal Inputs
  @Input() disabled = false;

  onTogglerClicked() {}
}
