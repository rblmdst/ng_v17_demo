import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [CommonModule],
  template: '<p class="comp-placeholder">🚧 Placeholder</p>',
})
export class PlaceholderComponent {}
