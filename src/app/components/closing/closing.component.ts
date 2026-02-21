import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-closing',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './closing.component.html',
  styleUrls: ['./closing.component.css'],
})
export class ClosingComponent {}
