import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule],
  template: '<p class="comp-error">🛑 ## Error ##</p>',
})
export class ErrorComponent {}
