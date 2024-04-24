import {
  Component,
  EventEmitter,
  Input,
  Output,
  input,
  model,
} from '@angular/core';

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

  // disabled = model(false, { alias: 'toto' });
  @Input() disabled = false;
  @Output() disabledChange = new EventEmitter<boolean>();

  onTogglerClicked() {
    this.disabled = !this.disabled;
    this.disabledChange.emit(this.disabled);
  }
}
