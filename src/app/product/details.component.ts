import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  template: `
    <p class="item">
      {{ productId }}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent {
  @Input({ required: true }) productId!: string;
}
