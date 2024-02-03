import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemComponent } from './item.component';
import { Product } from './product';

@Component({
  selector: 'app-list',
  standalone: true,
  template: `
    @for(product of products; track product.id) {
    <app-item [product]="product" [active]="product.id === '64a6'" />
    }
  `,
  imports: [ItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  products: Product[] = [
    { id: 'e23f', name: 'Mac Book Mini' },
    { id: '64a6', name: 'DELL XPS' },
  ];
}
