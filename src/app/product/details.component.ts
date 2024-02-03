import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
} from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  template: `
    <p class="item">
      {{ productId() }}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent {
  productId = input.required();
}