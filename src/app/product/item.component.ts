import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from './product';

const nameUpper = (v: Product) =>
  ({ ...v, name: v.name.toUpperCase() } as Product);

@Component({
  selector: 'app-item',
  standalone: true,
  template: `<div class="item" [class.active]="active">{{ item.name }}</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  @Input({ required: true, alias: 'product' }) item!: Product;
  @Input() active = false;
}
