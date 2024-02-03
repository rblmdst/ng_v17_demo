import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
  effect,
  input,
} from '@angular/core';
import { Product } from './product';

const nameUpper = (v: Product) =>
  ({ ...v, name: v.name.toUpperCase() } as Product);

@Component({
  selector: 'app-item',
  standalone: true,
  template: `<div class="item" [class.active]="active()">
    {{ compAttr() }}
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  item = input.required<Product, Product>({
    alias: 'product',
    transform: nameUpper,
  });
  active = input(false);

  compAttr = computed(() => {
    const active = this.active() ? '[active]' : '[inactive]';
    return `${active} ${this.item().name}`;
  });

  constructor() {
    /* effect(() => {
      console.log(this.item());
      // call api
    }); */
  }
}
