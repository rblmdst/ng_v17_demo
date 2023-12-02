import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  template: '<p class="comp-loading">⏳ Loading ...</p>',
})
export class LoadingComponent {}
